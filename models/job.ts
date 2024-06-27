import { Schema, model, models } from "mongoose";

const JobSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
      maxlength: 20,
    },
    companyLocation: {
      type: String,
      required: true,
      maxlength: 40,
    },
    position: {
      type: String,
      required: true,
      maxlength: 40,
    },
    positionDescription: {
      type: String,
      required: true,
      maxlength: 400,
    },
    jobType: {
      type: String,
      required: true,
      enum: ["Remote", "On-site", "Hybrid"],
    },
    jobTiming: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time"],
    },
    companylogoURL: {
      type: String,
      required: false,
    },
    userprofileURL: {
      type: String,
      required: false,
    },
    recruiterName: {
      type: String,
      required: true,
      maxlength: 40,
    },
    recruiterPhone: {
      type: String,
      required: true,
      maxlength: 40,
    },
    recruiterEmail: {
      type: String,
      required: true,
      maxlength: 40,
    },
  },
  { timestamps: true }
);

const Job = models.Job || model("Job", JobSchema);
// Define the JobDocument interface extending the mongoose Document type
export interface JobDocument extends Document {
  companyName: string;
  companyLocation: string;
  position: string;
  positionDescription: string;
  jobType: "Remote" | "On-site" | "Hybrid";
  jobTiming: "Full-time" | "Part-time";
  companylogoURL?: string;
  userprofileURL?: string;
  recruiterName: string;
  recruiterPhone: string;
  recruiterEmail: string;
}

export default Job;
