var collection = {
    "2548":{
        "album" : "Slippery than wet",
        "artist" : "Bon jori",
        "tracks" : ["let it rock", "You give a bad name"]
    },
    "2468":{
        "album" : "1999",
        "artist" : "prince",
        "tracks" : ["1999", "little rec covet"]
    },
    "1245":{
        "artist" : "Robert Palmer",
        "tracks" : []
    },
    "5439":{
        "album" : "ABBA Gold",
    }   

}


//keep a loca copy of the collection test
var collectioncopy = JSON.parse(JSON.stringify(collection));

//function of updates
function updaterecords(id, key, value){
    if(value === ""){
        delete collection[id][key];
    }else if(key === "tracks"){
        collection[id][key] == collection[id][key] || [];
        collection[id][key].push(value);
    }else{
        collection[id][key] = value;
    }
    return collection;
}


console.log(updaterecords(5439,"artist", "ABBA"));
