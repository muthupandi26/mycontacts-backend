const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    // user_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    userName: {
      type: String,
      required: [true, "Please add the User name"],
    },
    email: {
      type: String,
      required: [true, "Please add the User Email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the User password"],
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
