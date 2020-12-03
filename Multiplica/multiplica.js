const fs = require('fs');


/*function multiplica_base(num) {
    for (let index = 1; index < 11; index++) {
        let resul = num * index;
        data += `${num} * ${index} = ${resul} \n`;
    }

    fs.writeFile(`tablas/tablas${num}.txt`, data, (err) => {
        if (err) return throw new Error(err);
        console.log('El archivo ha sido creado');
    });
}

*/
let creaArchivo = async(num) => {

    if (!Number(num)) {
        return `Esto no es un numero ${num}`;
    }

    let data = '';
    for (let index = 1; index < 11; index++) {
        let resul = num * index;
        data += `${num} * ${index} = ${resul} \n`;
    }

    fs.writeFile(`tablas/tablas${num}.txt`, data, (err) => {
        if (err) {
            throw new Error(`error al crear el archivo:${err}`);
        }


    });

    return `tablas${num}.txt`;

}

let ListarTabla = async(num, max) => {

    if (!Number(num) && !Number(max)) {
        return `Esto no es un numero ${num}`;
    }

    let data = '';
    for (let index = 1; index <= max; index++) {
        let resul = num * index;
        data += `${num} * ${index} = ${resul} \n`;
    }

    fs.writeFile(`tablas/tablas${num}_maximo.txt`, data, (err) => {
        if (err) {
            throw new Error(`error al crear el archivo:${err}`);
        }


    });

    return `tablas${num}_maximo.txt`;
}


module.exports = { creaArchivo, ListarTabla };