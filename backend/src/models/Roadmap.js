import mongoose from "mongoose";

const { Schema } = mongoose;

const roadmapSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  topic: { type: String, required: true, trim: true },
  weeks: [
    {
      week: { type: Number, required: true, min: 1 },
      steps: [
        {
          title: { type: String, required: true, trim: true },
          description: { type: String, required: true, trim: true },
          resources: {
            youtube: [{ type: String, trim: true }],
            articles: [{ type: String, trim: true }],
            websites: [{ type: String, trim: true }]
          }
        }
      ]
    }
  ]
}, { timestamps: true });

export default mongoose.model("Roadmap", roadmapSchema);
