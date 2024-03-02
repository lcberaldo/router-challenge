import React from 'react';
import { useParams } from 'react-router-dom';


interface SingleProductProps {
  nome: string,
  id: string,
  preco: number,
  descricao: string,
  fotos: [
  {
    src: string,
    titulo:string
  }
  ]
}

const ProductSingle = () => {
  const [product, setProduct] = React.useState<SingleProductProps>();
  const { id } = useParams();

  React.useEffect(() => {
    async function loadProduct(id : string | undefined) {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`,
      );
      const json = await response.json();
      setProduct(json);
    }
    loadProduct(id);
  }, []);
  return (
    <section className="container">
      <div>
        {product?.fotos &&
          product.fotos.map(({ titulo, src }) => (
            <img key={titulo} src={src} alt={titulo} />
          ))}
      </div>

      <div>
        <h1>{product?.nome}</h1>
        <p>R$ {product?.preco}</p>
        <p>{product?.descricao}</p>
      </div>
    </section>
  );
};

export default ProductSingle;
