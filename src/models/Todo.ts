import mongoose, { Schema, Document } from "mongoose";

interface ITodo extends Document {
  text: string;
  complete: boolean;
  timestamp: string;
}

const TodoSchema: Schema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now().toString(),
  },
});

const Todo = mongoose.model<ITodo>("Todos", TodoSchema);

export default Todo;
