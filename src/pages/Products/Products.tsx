import styles from './Products.module.css';
import { Link } from 'react-router-dom';


interface SingleProductProps {
  nome: string,
  id: string,
  fotos: [
  {
    src: string,
    titulo:string
  }
  ]
}

interface ProductsProps {
  productsArray: SingleProductProps[]
}


const Products = ({ productsArray } : ProductsProps) => {
  return (
    <>
      <section className={`container ${styles.container}`}>
        {productsArray.map(({ nome, id, fotos }) => (
          <Link key={id} to={'product/' + id}>
            <img src={fotos[0].src} alt="" />
            <h2>{nome}</h2>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Products;
