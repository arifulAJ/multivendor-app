import { initializeApp } from "firebase/app";
import appFirebase from "./Firebase.config";

const initializationAuthentic=()=>{
    return initializeApp(appFirebase);
}
export default initializationAuthentic