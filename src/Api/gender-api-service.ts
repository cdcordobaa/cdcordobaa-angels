

const apiKey = '5e3cd48a756fae1db04d91a2';
const apiUrl = 'https://genderapi.io/api/';

const getAngelsGender = async(names: Array<string>) => {

    let url = new URL(apiUrl);
    const params = {
        key: apiKey,
        name: names.join(';')
    }
    url.search = new URLSearchParams(params).toString();
    console.log("api params", params, url.toString());

    //! Switch this two blocks 
    let data = await fetch(url.toString());
    let response = await data.json();

    //! Switch this two blocks
    // let response = JSON.parse(savedResponse);
    
    console.log("response for genders, in gender service", response);
    return response.names;
}

export {
    getAngelsGender
};

//Copiying some response since the api can only be called 200 times
const savedResponse = `
{"status":true,"duration":"0.16s","used_credits":34,"remaining_credits":166,"expires":1581120000,"server":"genderapi.io","q":"Michael;James;Nicholas;Jennifer;Christopher;Patricia;Beth;Cathy;Harold;Robin;Douglas;Donald;Ilene;William;Lynn;Leonie;Katherine;Melissa;Kimberly;Richard;Ayn;Bruce;Fred;Robert;David;Maureen;Mary Sue;Janet;John;Rand;Kathy;Susan;Peter;Diana","names":[{"name":"michael","q":"Michael","gender":"male","total_names":137572,"probability":100,"country":"US"},{"name":"james","q":"James","gender":"male","total_names":70373,"probability":99,"country":"US"},{"name":"nicholas","q":"Nicholas","gender":"male","total_names":16425,"probability":100,"country":"US"},{"name":"jennifer","q":"Jennifer","gender":"female","total_names":73723,"probability":100,"country":"US"},{"name":"christopher","q":"Christopher","gender":"male","total_names":35704,"probability":100,"country":"US"},{"name":"patricia","q":"Patricia","gender":"female","total_names":41215,"probability":100,"country":"BR"},{"name":"beth","q":"Beth","gender":"female","total_names":14138,"probability":99,"country":"US"},{"name":"cathy","q":"Cathy","gender":"female","total_names":8673,"probability":100,"country":"US"},{"name":"harold","q":"Harold","gender":"male","total_names":3810,"probability":99,"country":"US"},{"name":"robin","q":"Robin","gender":"male","total_names":18865,"probability":51,"country":"US"},{"name":"douglas","q":"Douglas","gender":"male","total_names":17941,"probability":100,"country":"BR"},{"name":"donald","q":"Donald","gender":"male","total_names":5937,"probability":99,"country":"US"},{"name":"ilene","q":"Ilene","gender":"female","total_names":335,"probability":100,"country":"US"},{"name":"william","q":"William","gender":"male","total_names":39660,"probability":100,"country":"US"},{"name":"lynn","q":"Lynn","gender":"female","total_names":9457,"probability":95,"country":"US"},{"name":"leonie","q":"Leonie","gender":"female","total_names":1040,"probability":99,"country":"NL"},{"name":"katherine","q":"Katherine","gender":"female","total_names":13877,"probability":100,"country":"US"},{"name":"melissa","q":"Melissa","gender":"female","total_names":55400,"probability":100,"country":"US"},{"name":"kimberly","q":"Kimberly","gender":"female","total_names":21427,"probability":100,"country":"US"},{"name":"richard","q":"Richard","gender":"male","total_names":43349,"probability":100,"country":"US"},{"name":"ayn","q":"Ayn","gender":"female","total_names":162,"probability":81,"country":"US"},{"name":"bruce","q":"Bruce","gender":"male","total_names":7527,"probability":99,"country":"US"},{"name":"fred","q":"Fred","gender":"male","total_names":9635,"probability":98,"country":"US"},{"name":"robert","q":"Robert","gender":"male","total_names":58781,"probability":100,"country":"US"},{"name":"david","q":"David","gender":"male","total_names":165865,"probability":100,"country":"US"},{"name":"maureen","q":"Maureen","gender":"female","total_names":4955,"probability":99,"country":"US"},{"name":"mary","q":"Mary Sue","gender":"female","total_names":47102,"probability":99,"country":"US"},{"name":"janet","q":"Janet","gender":"female","total_names":8991,"probability":100,"country":"US"},{"name":"john","q":"John","gender":"male","total_names":116219,"probability":99,"country":"US"},{"name":"rand","q":"Rand","gender":"female","total_names":418,"probability":63,"country":"US"},{"name":"kathy","q":"Kathy","gender":"female","total_names":15462,"probability":100,"country":"US"},{"name":"susan","q":"Susan","gender":"female","total_names":22627,"probability":99,"country":"US"},{"name":"peter","q":"Peter","gender":"male","total_names":45061,"probability":99,"country":"US"},{"name":"diana","q":"Diana","gender":"female","total_names":48939,"probability":99,"country":"US"}]}
`