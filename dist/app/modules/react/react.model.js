"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.React = void 0;
const mongoose_1 = require("mongoose");
const ReactSchema = new mongoose_1.Schema({
    react: {
        type: String,
        trim: true,
        enum: ['love', 'like'],
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    post: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.React = (0, mongoose_1.model)('React', ReactSchema);
