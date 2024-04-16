import {db} from '../firebase.config'

import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'

const bookCollectionRef = collection(db,'books')

class BookDataService{
    addBooks = (newBook) =>{
        return addDoc(bookCollectionRef,newBook)
    }
    updateBooks = (id,updateBook) =>{
        const bookDoc = doc(db,'books',id)
        return updateDoc(bookDoc,updateBook)
    }
    deleteBooks = (id) =>{
        const bookDoc = doc(db,'books',id)
        return deleteDoc(bookDoc)
    }
    getBook = (id) =>{
        const bookDoc = doc(db,'books',id)
        return getDoc(bookDoc)
    }
    getAllBooks = () =>{
        return getDocs(bookCollectionRef)
    }
}
export default new BookDataService;