const contenerdor = document.getElementById("contenedor");
const celdas = document.getElementsByClassName("td")

const CargarPoke = async () => {
        var Poke1 = Math.floor(Math.random()*905);
        var Poke2 = Math.floor(Math.random()*905);
        var Poke3 = Math.floor(Math.random()*905);
        var Poke4 = Math.floor(Math.random()*905);
        var Poke5 = Math.floor(Math.random()*905);
        var Poke6 = Math.floor(Math.random()*905);

        try {
        
        const ResPoke1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Poke1}/`)
        const ResPoke2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Poke2}/`)
        const ResPoke3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Poke3}/`)
        const ResPoke4 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Poke4}/`)
        const ResPoke5 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Poke5}/`)
        const ResPoke6 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Poke6}/`)

        const DataPoke1 = await ResPoke1.json();
        const DataPoke2 = await ResPoke2.json();
        const DataPoke3 = await ResPoke3.json();
        const DataPoke4 = await ResPoke4.json();
        const DataPoke5 = await ResPoke5.json();
        const DataPoke6 = await ResPoke6.json();
        console.log(DataPoke1, DataPoke2, DataPoke3, DataPoke4, DataPoke5, DataPoke6);


        DisplayPokes();

        function DisplayPokes (){
                data = [DataPoke1, DataPoke2, DataPoke3, DataPoke4, DataPoke5, DataPoke6]
                for (var i=0; i<6; i++) {
                celdas[i].innerText = data[i].name;
                }

                data = [DataPoke1, DataPoke2, DataPoke3, DataPoke4, DataPoke5, DataPoke6]
                for (var i=0; i<6; i++) {
                celdas[i].innerHTML = `<h3>${data[i].name}</h3><img src = "${data[i].sprites.front_default}"></img>`;
}
        }

}

        catch {

        }
}

CargarPoke();

