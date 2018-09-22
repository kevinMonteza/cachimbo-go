let url = "http://cachimbogo.xyz";
let url2 = "https://cachimbogo.herokuapp.com/servicios";

export default function GetData(dir,data,flag) {
    let urlTemp;
    return new Promise((resolve, reject) => {
        if(flag){
            urlTemp=url2;
           // console.log(`${urlTemp}/${dir}/${data}`);
        }else{
            urlTemp=url;
           // console.log(`${urlTemp}/${dir}/${data}`);
        }
        fetch(`${urlTemp}/${dir}/${data}`)
            .then(response => { return (response.json()) })
            .then(responseJson => {
                resolve(responseJson)
            })
            .catch((error) => {
                reject(error);
            });
    })
}
