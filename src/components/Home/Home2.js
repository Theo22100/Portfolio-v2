import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home/avatar.webp";
import Tilt from "react-parallax-tilt";
import { useInView } from 'react-intersection-observer';
import Reseaux from "./Reseaux";

function Home2() {
  const { t } = useTranslation();

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="d-flex align-items-center"> 
          <Col md={8} className="home-about-description">
            <div className={`${titleInView ? 'slide-in-left' : ''} `}>
              <h1
                style={{ fontSize: "2.6em" }}
                ref={titleRef}
              >
                <span className="blue-title " style={{ fontFamily: 'Permanent Marker, cursive' }}>
                  {t('introduction')}
                </span>

              </h1>
              <p
                className={`home-about-body mt-4 ${paragraphInView ? 'slide-in-left text-justify' : 'text-justify'} background-box` } // Ajout de la classe text-justify
                ref={paragraphRef}
              >
                {t('description')}
                <br />
                <br />{t('classic_technologies')}
                <b className="blue"> {t('technologies')} </b>
                <br />
                <br />
                {t('interests')}
                <b className="blue"> {t('projects_and_discovery')}</b>
                <br />
                <br />
                {t('passion')} <b className="blue">{t('nodejs')}</b> {t('reactjs')}
              </p>
            </div>
          </Col>
          <Col md={4} className="atar d-flex justify-content-center"> 
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Mon Avatar" style={{ height: "16em" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Reseaux/>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
