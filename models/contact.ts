import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  message: {
    type: String,
    required: [true, "Message is required."],
  },
});

const Contact = models.Session || model("Contact", ContactSchema);

export default Contact;
