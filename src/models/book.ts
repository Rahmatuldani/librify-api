import mongoose from "mongoose";


interface IBook  {
    _id: mongoose.Types.ObjectId;
    name: string;
}

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const BookModel = mongoose.model<IBook>("Book", BookSchema);

export { BookModel, IBook };
