import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about/about.webp";
import Toolstack from "./Toolstack";
import LevelCircle from "./Utils/LevelCircle"; 

function About() {
  const { t } = useTranslation();

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="d-flex align-items-center justify-content-center py-4">
          <Col md={7} className="text-center text-md-left">
            <h1 className="pb-3 title-font" style={{ fontSize: "2.5em" }}>
              {t('about_me')} <strong className="blue-title">{t('i_am')}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="d-flex justify-content-center align-items-center about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading text-center mt-5 title-font mb-5">
          <strong className="blue-title">{t('professional_skills')}</strong> {t('skills')}
        </h1>
        
        {/* Section des niveaux */}
        <Row className="text-center mt-5 mb-4">
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-center">
              <LevelCircle color="rgb(255, 145, 0, 0.8)" /> {/* Boule orange */}
              <span>{t('novice')}</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-center">
              <LevelCircle color="rgba(255, 255, 0, 0.8)" /> {/* Boule jaune */}
              <span>{t('intermediate')}</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-center">
              <LevelCircle color="rgba(0, 190, 0, 0.8)" /> {/* Boule verte */}
              <span>{t('advanced')}</span>
            </div>
          </Col>
        </Row>
        <Techstack />

        <h1 className="project-heading text-center mt-5 title-font mb-5">
          <strong className="blue-title">{t('tools')}</strong> {t('i_use')}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
