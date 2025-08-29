import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    size: {
      type: String,
      required: [true, "Please select a size"],
      enum: {
        values: ["S", "M", "L", "XL", "XXL"],
        message: "{VALUE} is not a supported size",
      },
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },

    priceAtPurchase: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email address"],
      unique: true,
      lowecase: true,
      trim: true,
      index: true,
    },
    firstName: {
      type: String,
      required: [true, "Please enter the first name"],
    },
    secondName: {
      type: String,
      required: [true, "Please enter the last name"],
    },
    scholarId: {
      type: String,
      required: [true, "Please enter the schoalr ID"],
      unique: true,
      trim: true,
    },
    hostelNumber: {
      type: String,
      required: [true, "Please enter the schoalr ID"],
    },
    mobileNumber: {
      type: String,
      required: [true, "Please enter the schoalr ID"],
    },
    paidToUpiId: {
      type: String,
      required: [true, "Please select the UPI ID from which you have paid"],
      enum: {
        values: ["hello@oksbi", "hola@oksbi"],
      },
    },
    proofOfPayment: {
      type: String,
    },
    isVerified: {
        type: Boolean,
        default: false
    }
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model("User", userSchema);
