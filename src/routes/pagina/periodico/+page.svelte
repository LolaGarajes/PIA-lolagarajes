<script>
export let data
</script>
<section class="principal">
  <div class="evento-container">
  {#each data.consulta as item}
    <h1>{item.nomevento}</h1>
    <p class="evento-fecha">{item.fechaevento} <p/>
      <div class="evento-imagen">
        <center>
        <img src="{item.urlimagen}" alt="img">
      </center>
      </div>
      <section class="evento-descripcion">
        <p>
       { item.descevento}
        </p>
      </section>
<label for="toggle">Detalles Evento</label>
<input type="checkbox" id="toggle" style="display: none;" />
<div class="hidden-info">
  <div class="evento-info">
    <div class="info-item">
      <h3>Jornada:</h3>
      <p>{item.nomjornada}</p>
    </div>
    <div class="info-item">
      <h3>Contacto:</h3>
      <p>https://lola.edu.co/</p>
    </div>
    <div class="info-item">
      <h3>Tipo De Evento:</h3>
      <p>{item.nomtipoevento}</p>
    </div>
  </div>
</div>
<hr>
  {/each}
  </div>
</section>