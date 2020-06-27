window.onload=function () {
    let albumdiv=document.querySelector(".album")
    let searchdiv=document.querySelector(".searchsong")
    let myinput=document.querySelector(".search")
    let mybtn=document.querySelector(".query")
    let string0
    let string1
    let string2
    mybtn.onclick=function(){
        fetch("http://localhost:3000/search?keywords="+myinput.value,{
            method:"GET"
        })
            .then(response=>{
                if(response.status==200)
                    return response.json()
            })
            .then(data=>{
                console.log(data.result.songs)
                output=""
                data.result.songs.forEach(value => {
                    if(value.artists[1]==null)
                    {
                        string0=value.album.name
                        string1=""
                    }
                    else
                    {
                        string1=value.artists[1].name
                        string0="-"+value.album.name
                    }

                    output+=`
                        <div class="searchsong">
                            <p class="songname">${value.name}</p>
                            <p>
                                <span class="highlight">${value.artists[0].name}/</span>
                                <span class="normal">${string1}</span>
                                <span class="normal">${string0}</span>
                            </p>
                        </div>
                    `
                })
                searchdiv.innerHTML=output

                fetch("http://localhost:3000/artist/album?id="+data.result.songs[0].artists[0].id+"&limit=30",{
                    method:"GET"
                })
                    .then(response=>{
                        if(response.status)
                            return response.json()
                    })
                    .then(data=>{
                        if(data.artist.alias[0]==null)
                            string2=""
                        else
                            string2="("+data.artist.alias+")"
                        console.log(data)
                       let output2="";
                        output2+=`
                        <div class="infor">
                            <p>最佳匹配</p>
                            <div class="singer">
                               <img src="${data.artist.picUrl}" alt="#">
                               <div>
                                   <span>歌手: </span>
                                   <span class="highlight">${data.artist.name}</span>
                                   <span>${string2}</span>
                               </div>
                            </div>
                            
                            <div class="album">
                                <img src="${data.hotAlbums[0].picUrl}" alt="#">
                                <div>
                                    <span>专辑: </span>
                                    <span>${data.hotAlbums[0].name}</span>
                                     <span class="highlight">${data.artist.name}</span>
                                </div>   
                            </div>
                        </div>
                        `
                        albumdiv.innerHTML=output2
                    })
            })

    }
}