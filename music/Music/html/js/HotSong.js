window.onload=function () {
    let hotsong=document.querySelector(".hotsong")
    let mystring;
    fetch("http://localhost:3000/top/list?idx=1",{
        method:"GET"
    })
        .then(response=>{
            if(response.status==200)
            {
                return response.json() 
            }
        })
        .then(data=>{
            console.log(data.playlist)
            let output=""
            data.playlist.tracks.forEach(function(value,index){
                if(index<9){
                    mystring="0"+(index+1)
                }
                else
                    mystring=index+1
                output+=`
                <div>
                    <p class="num">${mystring}</p>
                    <h3 class="song">${value.name}</h3>
                    <h3 class="alias">${value.alia}</h3>
                    <h4><span>SQ</span>${value.ar[0].name}-${value.al.name}</h4>
                </div>
                `
             })
            hotsong.innerHTML=output
        })
}