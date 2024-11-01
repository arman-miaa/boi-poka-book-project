import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredWishList, addToStoreReadList } from "../utility/addToDB";

const BookDetails = () => {
    const { bookId } = useParams();
    
    const data = useLoaderData();
    const id = parseInt(bookId)
    // console.log(typeof bookId,typeof id, typeof data[0].bookId);
    const book = data.find(book => book.bookId === id);
    // console.log(book);
    const { bookId: currentBookId, image} = book;
   
    const handleMarkAsRead = (id) => {
/**
 * * 1. understand what to store or save: => bookId
 * * 2. where to store: database
 * * 3. array, list, collection:
 * * 4. check: if the book is already in the readdLlist.
 * * 5. if not, then add the book to the list
 * * 6. if yes, do not add the book
 */
        
        addToStoreReadList(id)
    }

    const handleMarkAsWish = (id) => {
       

        addToStoredWishList(id)
   }
    
    return (
      <div className="my-12">
        <h2>Book details: {bookId}</h2>
        <img className="w-36" src={image} alt="" /> <br />
        <button
          onClick={() => handleMarkAsRead(bookId)}
          className="btn btn-outline mr-4 btn-accent"
        >
          Mark as Read
        </button>
        <button
          onClick={() => handleMarkAsWish(bookId)}
          className="btn btn-accent"
        >
          Add to WishList
        </button>
      </div>
    );
};

export default BookDetails;