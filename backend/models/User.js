import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return validator.isEmail(v);
      }
    }
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  verificationToken: {
    type: String
  },
  tokenExpriesAt: {
    type: Date
  }
})

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  // delete obj.__v
  return obj;
}

const User = mongoose.model("User", userSchema);

export default User;