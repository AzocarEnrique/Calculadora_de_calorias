import { collection, query, getDocs, doc, getDoc, listCollections, collectionGroup, addDoc } from "firebase/firestore";
import { db, auth } from './../../firebase-config';

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
            //addDoc(collection(Usuarios, 'calculadora', 'registro'), {
            //name: 'Legion of Honor',
            //    type: 'museum'
            //}),
        ]);
        console.log("Documento escrito con ID: ", Usuarios.id);
    } catch (e) {
        console.error("Error agregando el documento: ", e);
    }
}

export const guardarComida = (nombre, calorias, proteinas, carbohidratos, grasas) => {
    if (!nombre || !calorias || !proteinas || !carbohidratos || !grasas) {
        Alert.alert('Datos vacios', 'Faltan casillas por rellenar', [
            { text: 'OK' },
        ]);
    }
    if (typeof calorias != 'number' || typeof proteinas != 'number' || typeof carbohidratos != 'number' || typeof grasas != 'number') {
        Alert.alert('Datos erroneos', 'Existen casillas con datos que no corresponden', [
            { text: 'OK' },
        ]);
    }
    else {
        const comidaJSON = {
            "nombre": nombre,
            "calorias": calorias,
            "carbohidratos": carbohidratos,
            "proteinas": proteinas,
            "grasas": grasas
        }
        console.log(comidaJSON)
    }
}



export const getData = async () => {
    let r = [];
    const q =  query(collection(db,`${auth.currentUser.uid}/comidas/simple`));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        r.push(doc.data())  
    });
    return r;
}

const getDataNombre = async () => {
    const q = doc(db, `${auth.currentUser.uid}/comidas`);
    
    //console.log(q.listCollections())
    //collections.forEach(collection => {
    //    console.log('Found subcollection with id:', collection);
    //  });
}
