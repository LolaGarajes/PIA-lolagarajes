<div class="salida">
    <a href="../"><img src="https://res.cloudinary.com/donhib3cp/image/upload/v1724352997/images%20pagina/c0tqayrqkh5ulx2xqedz.jpg" class="logoinicio"alt=logolola/></a>
    <h1 class="inicio">inicio</h1>
</div>
<script lang="ts">
	import { jornada } from '$lib/server/database/schema.js';

    export let data;
   /* let input: HTMLInputElement | undefined = $state(undefined);

    let new_image_url = '';

const WITH = 300;

let image: { id: number; secureUrl: string } = $state({ id: 0, secureUrl: '' });

let showImage = $state(false);

async function onChange() {
    if (!input) return;
    showImage = true;
    const file = input.files ? input.files[0] : null;

    if (file) {
        console.log('ingreso al evento de cambio de imagen');
        showImage = true;
        const reader = new FileReader();
        let modificar = false;

        reader.addEventListener('load', function () {
            const new_image = document.createElement('img');
            if (reader.result !== null) {
                new_image.setAttribute('src', reader.result as string);
                new_image_url = reader.result as string;
            }

            new_image.onload = async (e) => {
                let w_image = WITH;
                let h_image = WITH;
                if (e.target !== null) {
                    const imageElement = e.target as HTMLImageElement;
                    w_image = imageElement.width ? imageElement.width : 300;
                    h_image = imageElement.height ? imageElement.height : 300;
                }
                let ratio;
                let canvas = document.createElement('canvas');
                if (w_image >= h_image && WITH / w_image < 1) {
                    ratio = WITH / w_image;
                    canvas.width = WITH;
                    canvas.height = h_image * ratio;
                    modificar = true;
                } else if (w_image < h_image && WITH / h_image < 1) {
                    ratio = WITH / h_image;
                    canvas.height = WITH;
                    canvas.width = w_image * ratio;
                    modificar = true;
                }
                if (modificar) {
                    const context = canvas.getContext('2d');
                    if (context) {
                        context.drawImage(new_image, 0, 0, canvas.width, canvas.height);
                        new_image_url = context.canvas.toDataURL('image/jpeg', 100);
                    }
                }
                image = { secureUrl: new_image_url, id: Date.now() };
                canvas.remove();
            };
            new_image.remove();
        });

        reader.readAsDataURL(file);
        return;
    }
    showImage = false;
}*/

function enviarFormulario(event: Event) {
    event.preventDefault(); // Evita el comportamiento predeterminado
    (event.currentTarget as HTMLSelectElement).form?.submit(); //envía el formulario
}
</script>

<div class="publi">
<div  class="cuadropubli">
    


    <h1>PUBLICACIÓN</h1>
 
    
    <form action="?/crear" method="post">
        <!--
        <input>
        class="imagenpublicacion"
        bind:this={input}
        onchange={() => onChange()}
        type="file"
        accept=".jpg,.png,.svg.,jpeg"
    />
   -->
        <label for="tit"> ingrese el nombre:

        <input class="tit" name="tit" type="text" placeholder="Escribir titulo..." required/>
        </label>

        <label for="desc">añada una descripcion:

        <input class="desc" name="desc" type="text" placeholder="Añada una descripción..." required/>
        </label>
        
        <label for="fecha">Añada la fecha

        <input class="fecha" name="fecha" type="date" placeholder = "ingrese la fecha" required/>
        </label>
        <label for="nombre">Ingrese su nombre:

        <input class="nombre" name="nombre" type="text" placeholder="nombre..." required/>
        </label>
        <label>Elija el tipo de evento
        
            <select name="tipoevento" class="tipoevento">
            <option value="1">Deportivo</option>
            <option value="2">Dia Festivo</option>
            <option value="3">Asopadres</option>
            <option value="4">Extracurricular</option>
            <option value="5">Reunion</option>
            <option value="6">Graduacion</option>
        </select>
        </label>
        <label for="prueba">
            <select name="Lugar" >
                <option value={jornada} selected>{jornada}</option>
                {#each data.jornadass as item}
                    <option value={item.jornada}>
                        {item.jornada}
                    </option>
                {/each}
            </select>
        </label>
        <label>Indique La Jornada

            <select name="jornada" class="jornada">
            <option value="2">Tarde</option>
            <option value="1">Mañana</option> </select>
        
            <!-- <input type="hidden" name="send_image" bind:value={image.secureUrl} /> -->
            </label>
        <br>
    <center>
        <button type="submit" id="boton">Enviar datos</button>
    </center>
    </form>


    
    
    
</div>

</div>
