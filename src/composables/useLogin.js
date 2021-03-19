import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const login = async (email, password) => {
  error.value = null

  try {
    // Internal Timer may cause extra error in the console when using await
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    console.log(res)
    return res
  } catch (err) {
    console.log(err.message)
    error.value = 'Incorrect login password or account'
  }
}


const useLogin = () => {
  return { error, login }
}

export default useLogin