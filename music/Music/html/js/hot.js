window.onload=function(){
    n();
    let hotDiv=document.querySelector(".hot")
    fetch("http://localhost:3000/top/playlist?limit=6&order=new",{
        method:"GET"
    })
    .then(response=>{
        if(response.status==200)
        {
            return response.json()
        }
    })
    .then(data=>{
        console.log(data.playlists)
        let output=""
        data.playlists.forEach(value=>{
            output+=`
                <div>
                    
                    <img src="${value.coverImgUrl}" alt="">
                    <p>${value.name}</p>

                </div>
            `
        })
        hotDiv.innerHTML=output
    })
}