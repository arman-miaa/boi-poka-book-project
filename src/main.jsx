import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboar/Dashboard.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
 import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>       

      }, 
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json'), // * do not load all the books for one book.

      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        //* worst way to load some data.
        loader: () => fetch('/booksData.json')// * do not all data load for some 

      },
      {
        path: '/dashboard',
        element:<Dashboard></Dashboard>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
