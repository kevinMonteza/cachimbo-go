const url = "http://cachimbogo.xyz/";
const url2 = "https://cachimbogo.herokuapp.com/servicios";
export default function PostData(dir, data,flag) {
    let urlTemp;
    return new Promise((resolve, reject) => {
        if(flag){
            urlTemp=url2;
        }else{
            urlTemp=url;
        }
        console.log(`${urlTemp}/${dir}`);
        fetch(`${urlTemp}/${dir}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                resolve(res)
            })
            .catch((error) => {
                reject(error);
            });
    })
}