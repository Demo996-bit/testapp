window.onload=function () {
    let resoudiv=document.querySelector(".resou")
    fetch("http://localhost:3000/search/hot",{
        method:"GET"
    })
        .then(response=>{
            if(response.status)
            return response.json()
        })
        .then(data=>{
            console.log(data.result.hots)
            let output=""
            data.result.hots.forEach(value=>{
                output+=`
                    <div>
                        <p>${value.first}</p>
                    </div>
                `
            })
            resoudiv.innerHTML=output

        })
}