import estrella2 from '../assets/images/estrella2.png'
import '../styles/estilos_home.css'

interface CajaProductoProps {
  isbn: string;                // Si - ISBN del libro  
  nombre: string;              // Si - Nombre del libro
  autor: string[];             // Si - Autor del libro (array de strings)
  precio: number;

}
function CajaProducto(props: CajaProductoProps) {

  return (
    <>
      <div className="cajaProductosHome">
          <a href="">
            <div className="fotoLibroHome">
              <img src={"https://placehold.co/400x400/c7c7c7/white?text=Imagen\nLibro&font=lato"}/* {props.libro.caratula} */ alt="imagen"/* {"imagen del libro " + props.libro.nombre} *//>
            </div>
          </a>
          <div className="textoLibroHome">
            <p>{props.nombre} </p>
            <p>{props.autor}</p>
          <div className='caja-estrellas'>
            {/* {estrellas según reseñas} */}
            <img src={estrella2} alt="casilifación según estrellas" />
            <img src={estrella2} alt="casilifación según estrellas" />
            <img src={estrella2} alt="casilifación según estrellas" />
            <img src={estrella2} alt="casilifación según estrellas" />
            <img src={estrella2} alt="casilifación según estrellas" />
          </div>
          <div className='caja-precio-boton'>
            <p>{props.precio}</p>
            <button type="button">Comprar</button>
          </div>
          </div>
      </div>
    </>
  )
}

export default CajaProducto