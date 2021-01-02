const boton=document.getElementById("imagen")
const span=document.getElementById("sonido")
boton.addEventListener("click",() =>{ 
    console.log("string");
    span.innerHTML +="<p>spann</p>";
    fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res => res.json())
            .then(data =>{
                console.log(data)
                for(let i=0;i<data.length;i++){
                    span.innerHTML += `<h3>Titulo ${i + 1}: ${data[i].title}</h3><br>`;
                }
            })

})