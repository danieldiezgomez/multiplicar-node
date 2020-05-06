//Requireds
const fs = require('fs');
const colors = require('colors/safe');

//const fs = require('express'); librerias externas-
//const fs = require('./fs'); nuestro proyecto

let listarTabla = (base,limite) =>{
    return new Promise((resolve,reject) => {
        
        console.log('========================'.green);
        console.log(`Tabla del ${base}`.blue);
        console.log('========================'.green);


        if(!Number(base)){
            reject(`El valor introducido ${base} no es un nùmero`);
            return;
        }

        if(base > limite){
            reject('El limite debe ser mayor a la base');
            return;
        }

        let data = '';
        for(let i=base;i<=limite; i++){
            data+=` ${base} * ${i} = ${base * i} \n`;
        }
        resolve(data);
        return;

    });
}


let crearArchivo = (base,limite) => {
    return new Promise((resolve, reject) =>{
            
            if(!Number(base)){
                reject(`El valor introducido ${base} no es un nùmero`);
                return;
            }
 

            let data = '';
            for(let i=1;i<=limite;i++){
                data += ` ${base} * ${i} = ${base * i} \n`;
            }
            fs.writeFile(`tablas/tabla-${base}.txt`, data , (err) => {
            if (err){
                reject(err);
            } else{
                resolve(colors.green(`tabla-${base}.txt`));
            }
        
        });


    });
};

module.exports = {
    crearArchivo,
    listarTabla
}
