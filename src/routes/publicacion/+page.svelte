<div class="salida">
    <a href="../"><img src="https://res.cloudinary.com/donhib3cp/image/upload/v1724352997/images%20pagina/c0tqayrqkh5ulx2xqedz.jpg" class="logoinicio"alt=logolola/></a>
    <h1 class="inicio">inicio</h1>
</div>
<script>
    export let data;
</script>
<div class="publi">
<div  class="cuadropubli">
    


    <h2>PUBLICACIÓN</h2>
 
    
    <form action="?/guardar" method="post">
        
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
       
        
        <br>
    <center>
        <button type="submit" id="boton">Enviar datos</button>
    </center>
    </form>


    
    
    
</div>

</div>
