import { BookModel, IBook } from "../models/book"
import response from "../utils/response";

async function getBooks(req: any, res:any) {
    try {
        const books: IBook[] = await BookModel.find();
        return response(res, { message: 'Get books success', data: {books} })

    } catch (error) {
        return response(res, { status: 500, message: `Get books failed ${error}` })
    }
}

async function createBook(req: any, res: any) {
    const {
        isbn, year, title, genre, author, publisher, desc, price,
    } = req.body;

    try {
        const book = await BookModel.create({
            isbn, year, title, genre, author, publisher, desc, price,
        })

        return response(res, { message: 'Create book success', data: {book} })
    } catch (error) {
        return response(res, { status: 500, message: `Create book failed ${error}` })
    }
}

export {
    getBooks,
    createBook,
}