import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  },
  worksPerHourADay: {
    type: Number,
    required: true,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    exprience: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: [],
      required: true,
    },

    worksInHospital: [hospitalSchema],
  },
  {
    timestamps: true,
  }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
