import '../styles/estilos_home.css'
import CajaProducto from './CajaProducto.tsx'
import Filtros from './Filtros.tsx'
import { ILibro } from '../interfaces/ILibro.ts'
import { useEffect, useState } from 'react';


/* interface LibrosBusquedaProps{
  genero: string
} */

 function LibrosBusqueda() {
  const [libros, setLibros] = useState<ILibro[]>([]);

  const [librosExist, setLibrosExist] = useState<boolean>(false);

  useEffect(() => {

    async function getLibros(){
      try {
        const response = await fetch('/products-back', {
          method: 'GET'
        });
        console.log(response.status);
        if(!response.statusText){
          console.log('No pudimos obtener los productos');
          setLibrosExist(false);

        }
        const librosJson = await response.json();
        console.log(librosJson);
        setLibros(librosJson);
        setLibrosExist(true);

      } catch (error) {
        console.log('Error al obtener los productos');
        setLibrosExist(false);
      }
    }

    getLibros();
  }, []);

  return (
    <>
      <main className='contenido-central'>
        <Filtros />
        <hr/>
        <section id="seccionNovedades">
          <h3 id="tituloNovedades">Aventura{/* {props.genero} */}</h3>

          <div id="productosHome">
          { librosExist ?  libros.map( libro => (
                      <CajaProducto key={libro.isbn} nombre={libro.nombre} autor={libro.autor} precio={libro.precio} isbn={libro.isbn}  ></CajaProducto>
                  )) 
                  :
                  <h3>Ups, no encontramos libros disponibles!!</h3>
                  }
          </div>
        </section>
      </main>
    </>
  )
}

export default LibrosBusqueda