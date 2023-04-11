import * as FileSystem from 'expo-file-system';

export async function writeFile(ruta, data) {
    const fileUri = `${FileSystem.documentDirectory+ruta}`;
    console.log(fileUri)
    try {
        const content = await FileSystem.readAsStringAsync(fileUri);
        await FileSystem.writeAsStringAsync(fileUri, content+','+data);
        await readFile('calorias.json')
    } catch (error) {
        console.error(error);
    }
}

export async function readFile(ruta) {
    const fileUri = `${FileSystem.documentDirectory+ruta}`;
    try {
        const content = await FileSystem.readAsStringAsync(fileUri);
    } catch (error) {
        console.error(error);
    }
}
