

const APIdataURL = '../Static/AGENTS_LIST.json' //I have never fetched this way before

const getAngelList = async() => {

    const jsonData = await fetch(APIdataURL,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return jsonData.json();

}

export {
    getAngelList
};