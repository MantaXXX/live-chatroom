import { ref } from "vue";
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  // get the firebase collection and orderby
  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

  // once the collection be changes, method: onSnapshot() invoked
  collectionRef.onSnapshot(snap => {
    let results = []
    snap.docs.forEach(doc => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    });

    // update values
    documents.value = results
    error.value = null
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = "Could not fetch data"
  })
  return { error, documents }
}

export default getCollection