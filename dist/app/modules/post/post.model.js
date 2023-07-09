"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    text: {
        type: String,
        trim: true,
    },
    react: {
        type: Number,
        trim: true,
    },
    comment: {
        type: {
            text: String,
            user: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Post = (0, mongoose_1.model)('Post', userSchema);
