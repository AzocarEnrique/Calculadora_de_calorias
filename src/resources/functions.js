import { collection, query, addDoc, onSnapshot, where, deleteDoc, doc, getDocs, updateDoc, getDoc } from "firebase/firestore";
import { db, auth } from './../../firebase-config';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            addDoc(collection(Usuarios, 'calculadora', 'limite'), {
                limite: 2500,
                tipo: "menor",
            })
        ]);
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

export const getData = async (ruta) => {
    const q = query(collection(db, `${auth.currentUser.uid}${ruta}`));
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

export const delData = async (nombre, path1, path2) => {
    const q = query(collection(db, auth.currentUser.uid, path1, path2 ), where("nombre", "==", nombre));
    const querySnapshot = await getDocs(q);
    const data = await new Promise((resolve) => {
        querySnapshot.forEach((doc) => {
            resolve(doc.id);
        });
    })
    await deleteDoc(doc(db, auth.currentUser.uid, path1, path2, data));
}

export const numero = (ev) => {
    if (!isNaN(ev)) {
        const ans1 = ev.match(/\./g) ? "true" : "false";
        const ans2 = ev.match(/\,/g) ? "true" : "false";
        if (ans1 == 'true' || ans2 == 'true') {
            return parseFloat(ev)
        }
        else {
            return parseInt(ev)
        }
    }
}
export const editData = async (nombre, calorias, carbohidratos, proteinas, grasas) => {
    const q = query(collection(db, `${auth.currentUser.uid}/comidas/simple`), where("nombre", "==", nombre));
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

export const guardarCalData = async (nombre, numero) => {
    const Usuarios = collection(db, auth.currentUser.uid);
    const q = query(collection(Usuarios, 'calculadora', 'datos'), where("nombre", "==", nombre))
    const querySnapshot = await getDocs(q);
    let data = undefined
    if (!querySnapshot.empty) {
        data = await new Promise((resolve) => {
            querySnapshot.forEach((doc) => {
                resolve(doc.id);
            });
        })
    }
    if (data) {
        const documento = doc(db, auth.currentUser.uid, 'calculadora', 'datos', data)
        const gramosAntiguos = await getDoc(documento)
        await updateDoc(documento, {
            "nombre": nombre,
            "gramos": parseInt(numero) + parseInt(gramosAntiguos.data().gramos)
        });
    }
    else {
        addDoc(collection(Usuarios, 'calculadora', 'datos'), {
            nombre: nombre,
            gramos: numero
        })
    }
}


export const arraysAsincronos = async (arregloData, arregloTotal) => {
    //console.log(arregloTotal)
    const data = await new Promise((resolve) => {
        const arrayFiltrado = []
        if (arregloData && arregloTotal) {
            arregloData.map((elemento) => {
                const calculado = arregloTotal.filter((element) => element.nombre === elemento.nombre)[0]
                calculado.calorias = (calculado.calorias * elemento.gramos) / 100;
                calculado.carbohidratos = (calculado.carbohidratos * elemento.gramos) / 100;
                calculado.proteinas = (calculado.proteinas * elemento.gramos) / 100;
                calculado.grasas = (calculado.grasas * elemento.gramos) / 100;
                arrayFiltrado.push(calculado)
            })
            resolve(arrayFiltrado)
        }
    })
    return data
}

export const sumArrays = (arrays) => {
    let sums = {};
    for (let array of arrays) {
        for (let [label, value] of Object.entries(array)) {
            if (label in sums) {
                sums[label] += value;
            } else {
                sums[label] = value;
            }
        }
    }
    return sums;
}

export const guardarLimite = async (limite, tipo) => {
    const LimiteCol = collection(db, auth.currentUser.uid);
    const q = query(collection(LimiteCol, 'calculadora', 'limite'))
    const querySnapshot = await getDocs(q);
    let data = undefined
    if (!querySnapshot.empty) {
        data = await new Promise((resolve) => {
            querySnapshot.forEach((doc) => {
                resolve(doc.id);
            });
        })
    }
    const documento = doc(db, auth.currentUser.uid, 'calculadora', 'limite', data)
    await updateDoc(documento, {
        "limite": limite,
        "tipo": tipo
    });
}

export const deleteAll = async (col1, col2) => {
    const q = query(collection(db, auth.currentUser.uid, col1, col2));
    const querySnapshot = await getDocs(q);
    const deletePromises = querySnapshot.docs.map(async (doc) => {
        try {
            await deleteDoc(doc.ref);
        } catch (error) {
            console.log(error);
        }
    });
    await Promise.all(deletePromises);
    console.log("datos eliminados");
};



export const storeSessionData = async (userSession, PassSession) => {
    try {
      await AsyncStorage.setItem('user', userSession);
      await AsyncStorage.setItem('pass', PassSession);
      console.log(await AsyncStorage.getItem('user'), await AsyncStorage.getItem('pass'));
    } catch (error) {
      console.log(error)
    }
  };