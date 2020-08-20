import client from "./client";
const register = "/register";
const auth = "/auth";
const verify = "/verify";

const registerUser = (user) => client.post(register, user);
const loginUser = (user) => client.post(auth, user);
const sendOTP = (otp) => client.post(verify, otp);
const resendOTP = (id) => client.post(verify + "/resend", id);

export default {
  registerUser,
  loginUser,
  sendOTP,
  resendOTP,
};
