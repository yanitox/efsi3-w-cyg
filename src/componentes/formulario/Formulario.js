import './Formulario.css';
function Formulario() {
    return(
    <form className="padre-formulario">
        <label>Nombre Mascota</label>
        <input className='input-class' id="mascota" type="text" name="mascota" placeholder="Nombre mascota"></input>

        <label>Nombre Dueño</label>
        <input className='input-class' id="dueño" type="text" name="dueño" placeholder="Nombre dueño de la mascota"></input>

        <label>Fecha</label>
        <input className='input-class' id="fecha" type="date" name="fecha"></input>

        <label>Hora</label>
        <input className='input-class' id="hora" name="hora" type="time"></input>

        <label>Sintomas</label>
        <textarea id="sintomas" name="sintomas"></textarea>
        <div className='botonjs'>
        <button className='botonFormulario' type="submit">AGREGAR CITA</button>
        </div>
        
    </form>
    )
}

export default Formulario