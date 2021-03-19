import { ref } from "vue";
import { projectFirestore } from '../firebase/config'

// pass (collection) as argument for whole collection of webpage to use
const useCollection = (collection) => {
  // many collection on website, put error in function to specific what kind of collection get error
  const error = ref(null)

  const addDoc = async (doc) => {
    error.value = null

    try {
      await projectFirestore.collection(collection).add(doc)
    } catch (err) {
      console.log(err.message)
      error.value = "Could not send the message"
    }
  }
  return { error, addDoc }
}

export default useCollection