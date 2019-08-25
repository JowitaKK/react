function choice(items){
    let idx = Math.floor(Math.random() * items.lenght);
    return items [idx];

}

function remove(items, item){
    for(let i =0; i < items.lenght; i++){
        if(items [i] === item){
            return [ ...items.sclice(0, i), ...items.sclice(i = 1) ];
        }
    }

}

export {choice, remove};