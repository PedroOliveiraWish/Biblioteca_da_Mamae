import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ColecaoLivro } from "../../types/colecaoLivro";
import '../../styles/carouselColecao/carouselColecao.css'

const SliderColecao = ({colecoes}: {colecoes: ColecaoLivro[]}) => {
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
        colecoes
      </div>
      <Slider {...configuracoes}>
        {colecoes.map((colecao, index) => (
          <div key={index} className="slider-colecao-item">
            <img src={colecao.imagem_url} alt={colecao.nome} />
            <div className="titulo">{colecao.nome}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderColecao;