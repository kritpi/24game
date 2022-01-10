import { db, firebase } from './firebaseConfig'

export const addData = (name, timeReasult) => {
    db.collection("scoreBoards").add({ name, timeReasult })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export const readData = () => {
    const scoreBoards = db.collection("scoreBoards").where("timeReasult", "!=", "00:00:00").get()
    return scoreBoards
}
