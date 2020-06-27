function n() {
    let mystr;
    let newdiv=document.querySelector(".new")
    fetch("http://localhost:3000/personalized/newsong",{
        method:"GET"
    })
        .then(response=>{
            if(response.status==200)
            {
                return response.json()
            }
        })
        .then(data=>{
            console.log(data.result)

            let output=""
            data.result.forEach(value=>{
                if(value.song.alias[0]!=null)
                    mystr="("+value.song.alias+")"
                else
                    mystr="";
                output+=`
                    <div>
                        <img src="images/play.png" alt="">                  
                        <h3 class="song">${value.name}</h3>
                        <h3 class="alias">${mystr}</h3>
                        <h4><span>SQ</span> ${value.song.artists[0].name}-${value.song.album.name}</h4>
                    
                    </div>
                `
            })
            newdiv.innerHTML=output

        })


}