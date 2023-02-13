import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"

import firebaseConfig from "../firebase/config"

const app = initializeApp(firebaseConfig)

export const useAuth = () => getAuth(app)
export const useDB = () => getFirestore(app)
export const useRTDB = () => getDatabase(app)