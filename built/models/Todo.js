import mongoose, { Schema } from "mongoose";
const TodoSchema = new Schema({
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
const Todo = mongoose.model("Todos", TodoSchema);
export default Todo;
