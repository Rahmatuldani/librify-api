import { BookModel, IBook } from "../models/book"

async function getBooks(req: any, res:any) {
    try {
        const books: IBook[] = await BookModel.find();
        return res.status(200).json({
            books
        })
    } catch (error) {
        return res.status(500).json({
            msg: error
        })
    }
}

async function createBook() {
    
}

export {
    getBooks,
    createBook,
}