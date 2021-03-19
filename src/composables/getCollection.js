import { ref, watchEffect } from "vue";
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  // get the firebase collection and orderby
  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

  // once the collection be changes, method: onSnapshot() invoked
  const unsub = collectionRef.onSnapshot(snap => {
    console.log('snapshot')
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

  watchEffect(onInvalidate => {
    // unsub from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub())
  })

  return { error, documents }
}

export default getCollection