import "./lib/db";
import cors from 'cors';
import express from "express";
import routers from "./routers";
require('dotenv').config({ path: '.env.local' });

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({
    url: 'librify-api.up.railway.app/api',
    authorization: {
      Bearer: 'secretpassword',
    },
    node: {
      auth: {
        path: '/auth',
        login: {
          path: '/login',
          method: 'POST',
          body: {
            email: 'type string, email, required',
            password: 'type string, min length 6 characters long, required'
          }
        },
        register: {
          path: '/register',
          method: 'POST',
          body: {
            nik: 'type string, required',
            name: 'type string, required',
            email: 'type string, email, required',
            password: 'type string, min length 6 characters long, required'
          }
        }
      },
      users: {
        getUsers: {
          path: '/users',
          method: 'GET'
        }
      },
      books: {
        getBooks: {
          path: '/books',
          method: 'GET'
        },
        addBook: {
          path: '/books',
          method: 'POST',
          authorization: true,
          body: {
            isbn: "type number, unique, required",
            year: "type number, required",
            title: "type string, required",
            genre: "type string[], required",
            author: "type string[], required",
            publisher: "type string, required",
            desc: "type string, required",
            price: "type number, required"
          }
        }
      },
      borrows: {
        getBorrows: {
          path: '/borrows',
          method: 'GET',
        },
        addBorrow: {
          path: '/borrows',
          method: 'POST',
          authorization: true,
          body: {
            userId: "type string, required",
            bookId: "type string, required",
            quantity: "type number, required"
          }
        }
      }
    }
  });
});

app.use("/api", routers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app
