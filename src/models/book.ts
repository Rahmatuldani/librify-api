import mongoose from "mongoose";


interface IBook {
  _id: mongoose.Types.ObjectId;
  isbn: number;
  year: number;
  title: string;
  genre: string[];
  author: string[];
  publisher: string;
  desc: string;
  price: number;
}

const BookSchema = new mongoose.Schema({
  isbn: {
    type: Number,
    unique: true,
  },
  year: Number,
  title: String,
  genre: [String],
  author: [String],
  publisher: String,
  desc: String,
  price: Number,
}, {
  versionKey: false,
  timestamps: true,
});

const BookModel = mongoose.model<IBook>("Book", BookSchema);

export { BookModel, IBook };
