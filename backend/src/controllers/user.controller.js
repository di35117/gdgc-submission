import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiErrors.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const submitUserData = asyncHandler(async (req, res) => {
  const {
    size,
    quantity,
    priceAtPurchase,
    email,
    firstName,
    secondName,
    scholarId,
    hostelNumber,
    mobileNumber,
    paidToUpiId,
  } = req.body;
  console.log("email ", email);
  if (
    [
      size,
      quantity,
      priceAtPurchase,
      email,
      firstName,
      secondName,
      scholarId,
      hostelNumber,
      mobileNumber,
      paidToUpiId,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const proofOfPaymentLocalPath = await req.files?.proofOfPayment[0]?.path;
  console.log(proofOfPaymentLocalPath)
  if (!proofOfPaymentLocalPath) {
    throw new ApiError(400, "Proof of payment is needed 1");
  }
  const proofOfPayment = await uploadOnCloudinary(proofOfPaymentLocalPath);
  if (!proofOfPayment) {
    throw new ApiError(400, "Proof of payment is needed 2");
  }
  const user= await User.create({
    size,
    quantity,
    priceAtPurchase,
    email,
    firstName,
    secondName,
    scholarId,
    hostelNumber,
    mobileNumber,
    paidToUpiId,
    proofOfPayment: proofOfPayment.url,
  });
  if(!user) {
    throw new ApiError(500, "Something went wrong while submitting the user data")
  }
  return res.status(201).json(
    new ApiResponse(200, user, "User data submitted successfully")
  )
});
export { submitUserData };
