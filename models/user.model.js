import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    cart: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Product",
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    orders: {
        type: [mongoose.Schema.Types.ObjectId], // Use ObjectId for references, if applicable
        ref: "Order",
        default: []
    },
    contact: {
        type: String,
        trim: true
    },
    profileImage: {
        type: String,
        trim: true
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Ensure indexes for faster queries (e.g., email)
// userSchema.index({ email: 1 });

// Define the model export statement
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
