import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
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
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    product:{
        type : [mongoose.Schema.Types.ObjectId],
        ref : "Product",
        default: []
    },
    gstin: {
        type : String,
        require : true,
        unique : true
    },
    profileImage: {
        type: String,
        trim: true
    },
}, {
    timestamps: true
});

// Index for faster email lookup
// ownerSchema.index({ email: 1 });

const OwnerModel = mongoose.model("Owner", ownerSchema);
export default OwnerModel;
