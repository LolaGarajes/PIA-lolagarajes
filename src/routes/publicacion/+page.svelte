<div class="salida">
    <a href="../"><img src="https://res.cloudinary.com/donhib3cp/image/upload/v1724352997/images%20pagina/c0tqayrqkh5ulx2xqedz.jpg" class="logoinicio"alt=logolola/></a>
    <h1 class="inicio">inicio</h1>
</div>
<script lang="ts">
    export let data;
    async function uploadImage() {
    const fileInput = document.getElementById("fileInput");
    const status = document.getElementById("status");

    if (fileInput.files.length === 0) {
        status.textContent = "Selecciona una imagen primero.";
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();

    // Añadir el archivo y los parámetros de Cloudinary
    formData.append("file", file);
    formData.append("upload_preset", "TU_UPLOAD_PRESET"); // Reemplaza con tu upload_preset
    formData.append("cloud_name", "TU_CLOUD_NAME"); // Reemplaza con tu cloud_name

    try {
        // Hacer la petición de subida a Cloudinary
        const response = await fetch(`https://api.cloudinary.com/v1_1/TU_CLOUD_NAME/image/upload`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.secure_url) {
            status.innerHTML = `Imagen subida con éxito: <a href="${data.secure_url}" target="_blank">Ver imagen</a>`;
        } else {
            status.textContent = "Error al subir la imagen.";
        }
    } catch (error) {
        status.textContent = "Hubo un error en la subida: " + error.message;
    }
}
</script>
<div class="publi">
<div  class="cuadropubli">
    


    <h2>PUBLICACIÓN</h2>
    <p id="status"></p>
    
    <form action="?/guardar" method="post" id="uploadForm">
        
         <!-- <input> 
        class="imagenpublicacion"
        bind:this={input}
        onchange={() => onChange()}
        type="file"
        accept=".jpg,.png,.svg.,jpeg"-->

   
        <label for="tit"> ingrese el nombre:

        <input class="tit" name="tit" type="text" placeholder="Escribir titulo..." required/>
        </label>

        <label for="desc">añada una descripcion:

        <input class="desc" name="desc" type="text" placeholder="Añada una descripción..." required/>
        </label>
        
        <label for="fecha">Añada la fecha

        <input class="fecha" name="fecha" type="date" placeholder = "ingrese la fecha" required/>
        </label>
  
        <label for="tipoevento"> indique el tipo de evento:
            <select name="tipoevento">
                <option value = {0} selected></option>
                {#each data.tipo_evento as item}
                    <option value={item.idtipoevento}>
                    {item.nomtipoevento}
                    </option>
                {/each}
            </select>
        </label>
       <label for="jornada"> indique la jornada:
            <select name="jornada" >
                <option value={0} selected></option>
                {#each data.jornadas as item}
                    <option value={item.idjornada}>
                        {item.nomjornada}
                    </option>
                {/each}
            </select>
        </label>
        <label for="lugar">indique el lugar:
            <select name="lugar" > 
                <option  value = {0} selected></option>
                {#each data.lugar as item }
                <option value={item.idlugar}>
                    {item.nomlugar}
                </option>
                {/each}
            </select>
        </label>
        <input type="file" id="fileInput" accept="image/*" />
        
        <br>
    <center>
        <!-- <button type="button" id="boton" onclick="uploadImage()">Enviar datos</button>  -->
    </center>
    </form>


    
    
    
</div>

</div>
