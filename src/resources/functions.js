import { collection, query, addDoc, onSnapshot, where, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db, auth } from './../../firebase-config';
import { Alert } from 'react-native';


export const AgregarUsuario = async (db, user_id) => {
    try {
        const Usuarios = collection(db, user_id);
        await Promise.all([
            addDoc(collection(Usuarios, 'comidas', 'simple'), {
                nombre: 'Pera',
                calorias: 58,
                proteinas: 0.38,
                carbohidratos: 15.46,
                grasas: 0.12
            }),
            addDoc(collection(Usuarios, 'comidas', 'simple'), {
                nombre: 'Tomate',
                calorias: 18,
                proteinas: 0.88,
                carbohidratos: 3.92,
                grasas: 0.2
            }),
            addDoc(collection(Usuarios, 'comidas', 'simple'), {
                nombre: 'Manzana',
                calorias: 52,
                proteinas: 0.26,
                carbohidratos: 13.81,
                grasas: 0.17
            }),
        ]);
        console.log("Documento escrito con ID: ", Usuarios.id);
    } catch (e) {
        console.error("Error agregando el documento: ", e);
    }
}

export const guardarComida = (nombre, calorias, proteinas, carbohidratos, grasas) => {
    
    const Usuarios = collection(db, auth.currentUser.uid);
    if (!nombre || !calorias || !proteinas || !carbohidratos || !grasas) {
        Alert.alert('Datos vacios', 'Faltan casillas por rellenar', [
            { text: 'OK' },
        ]);
    }
    else {
        addDoc(collection(Usuarios, 'comidas', 'simple'), {
            nombre: nombre,
            calorias: calorias,
            carbohidratos: carbohidratos,
            proteinas: proteinas,
            grasas: grasas
        })
    }
}

export const getData = async () => {
    const q =  query(collection(db,`${auth.currentUser.uid}/comidas/simple`));
    const data = await new Promise((resolve) => {
        const r = [];
        onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            r.push(doc.data());
          });
          resolve(r);
        });
      });
    
    return data;
}   

export const delData = async (nombre) => {
    const q =  query(collection(db,`${auth.currentUser.uid}/comidas/simple`), where("nombre", "==", nombre));
    const querySnapshot = await getDocs(q);
    const data = await new Promise((resolve) => {
        querySnapshot.forEach((doc) => {
            resolve(doc.id);
        });
    })
    await deleteDoc(doc(db, auth.currentUser.uid, "comidas", "simple", data));
} 

export const numero = (ev) =>{
    if(!isNaN(ev)){
        const ans1 = ev.match(/\./g) ? "true" : "false";
        const ans2 = ev.match(/\,/g) ? "true" : "false";
          if(ans1 == 'true' || ans2 == 'true' ){
            return parseFloat(ev)
          }
          else{
            return parseInt(ev)
          }       
      }
}
export const editData = async (nombre,calorias,carbohidratos,proteinas,grasas) =>{
    const q =  query(collection(db,`${auth.currentUser.uid}/comidas/simple`), where("nombre", "==", nombre));
    const querySnapshot = await getDocs(q);
    const data = await new Promise((resolve) => {
        querySnapshot.forEach((doc) => {
            resolve(doc.id);
        });
    })
    const documento = doc(db, auth.currentUser.uid, "comidas", "simple", data)
    await updateDoc(documento, {
        "calorias": calorias,
        "proteinas": proteinas,
        "carbohidratos": carbohidratos,
        "grasas": grasas
    });
}