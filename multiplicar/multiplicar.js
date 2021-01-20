const fs = require('fs');



let listarTabla = (base,limite=10)=>{

    let data = ''
    // console.log(`base: ${base} limite:${limite}`);

    // let limit = parseInt(`${limite}`)

    // console.log(limit);

    for(let i=1; i<=limite;i++){
            
        data+= (`${base} x ${i}  = ${i*base} \n`);
        }

    console.log(data);
}   



let crearArchivo = ( base, limite ) => {

    return new Promise((resolve, reject)=>{
       
        if( !Number(base)){
            reject(`El valor introducido ${base} no es valido`);
            return
        }

        let data = '';

        for(let i=1; i<=limite;i++){
            
        data+= `${base} x ${i}  = ${i*base} \n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`,data, (err)=>{
        if(err) 
        reject(err)
        else
        resolve(`tabla del ${base}`)
       
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}