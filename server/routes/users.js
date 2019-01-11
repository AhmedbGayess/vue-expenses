const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

const router = express.Router();

// Get User model and validation
const User = require("../models/User");
const validateCreateUser = require("../validation/createUserValidation");
const validateLoginUser = require("../validation/loginUserValidation");

// Register a new user
router.post("/register", (req, res) => {
    // Validate user
    const { error } = validateCreateUser(req.body);
    if (error) {
        const errors = {};
        error.details.forEach(err => (errors[err.context.key] = err.message));
        return res.status(400).send(errors);
    }

    // Find User by email
    User.findOne({ email: req.body.email }).then(user => {
        // Check if email is already used
        if (user) {
            return res
                .status(400)
                .json({ email: "This email address is already used" });
        } else {
            // Create new user
            const newUser = new User({
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            });

            // Hash password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    // Save user to database
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// login and return JWT (json web token)
router.post("/login", (req, res) => {
    // Validation
    const { error } = validateLoginUser(req.body);
    if (error) {
        const errors = {};
        error.details.forEach(err => (errors[err.context.key] = err.message));
        return res.status(400).send(errors);
    }

    // Find user by email
    User.findOne({ email: req.body.email }).then(user => {
        //Check if user exists
        if (!user) {
            return res
                .status(404)
                .json({
                    email: "No user with the provided email address was found"
                });
        }

        // Check password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            // Correct password
            if (isMatch) {
                // Create JWT payload
                const payload = {
                    id: user.id,
                    email: user.email,
                    isAdmin: user.isAdmin
                };

                // Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 }, // Token expires in one hour
                    (err, token) => {
                        res.json({
                            success: true,
                            token: `Bearer ${token}`
                        });
                    }
                );
            } else {
                // Incorrect password
                return res
                    .status(400)
                    .json({ password: "Passoword incorrect" });
            }
        });
    });
});

// Get current user
router.get(
    "/current",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        res.json({
            id: req.user.id,
            email: req.user.email
        });
    }
);

// Modify User info
router.put(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { error } = validateUser(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        // Updates
        const userUpdates = {
            email: req.body.email,
            password: req.body.password
        };

        // Hash password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(userUpdates.password, salt, (err, hash) => {
                if (err) throw err;
                userUpdates.password = hash;
                // Find user and update info
                User.findOneAndUpdate(
                    { _id: req.user.id },
                    { $set: userUpdates },
                    { new: true }
                )
                    .then(user => res.json(user))
                    .catch(err => res.json({ email: "Email already used" }));
            });
        });
    }
);

module.exports = router;
