import { Livro } from "../../types/livro";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/carousel/carousel.css';

const SliderLivro = ({livros}: {livros: Livro[]}) => {
  const configuracoes = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-livro">
      <div className="title">
        livros
      </div>
      <Slider {...configuracoes}>
        {livros.map((livro, index) => (
          <div key={index} className="slider-livro-item">
            <img src={livro.imagem_url} alt={livro.titulo} />
            <div className="titulo">{livro.titulo}</div>
            <p className="categoria">{livro.categoria_nome}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderLivro;