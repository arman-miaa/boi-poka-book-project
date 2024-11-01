import { toast } from "react-toastify";

const getStoreReadList = () => {
    // read-lisst
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }
    else {
        return [];
    }
}
const getStoreWishList = () => {
    // read-lisst
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storedList = getStoreReadList();
    if (storedList.includes(id)) {
        // already exists, do not add it
        console.log(id, 'already exists in teh read list');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        //* ideally trigger toast from the component
        toast('This book  is added to your read list.')

    }
}
const addToStoredWishList = (id) => {
  const storedList = getStoreWishList();
  if (storedList.includes(id)) {
    // already exists, do not add it
    console.log(id, "already exists in teh read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};

export { addToStoreReadList, addToStoredWishList, getStoreReadList };