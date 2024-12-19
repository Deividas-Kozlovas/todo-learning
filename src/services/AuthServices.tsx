import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export { registerWithEmailAndPassword };
