import { FaPhp, FaWordpress, FaReact, FaSass, FaLaravel } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Container } from './styles';
import { Tecnology } from '../Tecnology';

import js from '../../assets/img/icons/js.svg';
import dots from '../../assets/img/dots.svg';
import aws from '../../assets/img/icons/aws.svg';
import next from '../../assets/img/icons/next.svg';

export const Tecnologies = () => (
  <Container>
    <div className="container content">
      <div className="title">
        <img src={dots} alt="info" />
        <h1>
          Tecnologia que <br />
          utilizamos
        </h1>
      </div>
      <div className="tecnologies">
        <Tecnology icon={<FaPhp className="icon" />} title="PHP" />
        <Tecnology
          icon={<FaWordpress className="icon wordpress" />}
          title="Wordpress"
        />
        <Tecnology
          title="Javascript"
          icon={<img src={js} alt="JS icon" className="icon" />}
        />
        <Tecnology icon={<FaReact className="icon react" />} title="React JS" />
        <Tecnology
          icon={<img src={aws} alt="AWS icon" className="icon" />}
          title="Plataforma de serviços AWS"
        />
        <Tecnology
          icon={<img src={next} alt="NextJS icon" className="icon" />}
          title="Next JS"
        />
        <Tecnology icon={<FaSass className="icon sass" />} title="SCSS" />
        <Tecnology
          icon={<FaLaravel className="icon laravel" />}
          title="Laravel"
        />
      </div>

      <Swiper className="swiper-tecnologies">
        <SwiperSlide>
          <Tecnology icon={<FaPhp className="icon" />} title="PHP" />
        </SwiperSlide>
        <SwiperSlide>
          <Tecnology
            icon={<FaWordpress className="icon wordpress" />}
            title="Wordpress"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tecnology
            title="Javascript"
            icon={<img src={js} alt="JS icon" className="icon" />}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tecnology
            icon={<FaReact className="icon react" />}
            title="React JS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tecnology
            icon={<img src={aws} alt="AWS icon" className="icon" />}
            title="Plataforma de serviços AWS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tecnology
            icon={<img src={next} alt="NextJS icon" className="icon" />}
            title="Next JS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tecnology icon={<FaSass className="icon sass" />} title="SCSS" />
        </SwiperSlide>
        <SwiperSlide>
          <Tecnology
            icon={<FaLaravel className="icon laravel" />}
            title="Laravel"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </Container>
);
