import './App.scss';
import React, {useEffect, useState} from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import ReactFullpage from "@fullpage/react-fullpage";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import reactLogo from './img/reactjs.png';
import nodeLogo from './img/nodejs.png';
import bootstrapLogo from './img/bootstrapjs.png';
import phaserLogo from './img/phaserjs.png';
import portfolioLogo from './img/portfolio-logo.png';
import mongoLogo from './img/mongodb.png';
import angularLogo from './img/angularjs.png';
import phpLogo from './img/php.png';
import apacheLogo from './img/apache-feather-text2.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HoverVideoPlayer from 'react-hover-video-player';
import antGameClip from './video/antgame-clip.mp4';
import climateFlightClip from './video/climateflight-demo.mp4';
import dcfCalculatorClip from './video/dcf-calculator-clip.mp4';
import indeedLogo from './img/indeed-logo.png';
import linkedinLogo from './img/linked-in-logo.png';
import mernLogo from './img/MERN-logo.png';
import Typist from 'react-typist';


class FirstPage extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color1: 0x101959,
      color2: 0x4bcd4b,
      birdSize: 1.90,
      wingSpan: 40.00,
      speedLimit: 7.00,
      separation: 100.00,
      alignment: 100.00,
      cohesion: 100.00,
      quantity: 2.00
    })
  }
  //this.vantaRef.current
  // componentWillUnmount() {
  //   if(this.vantaEffect) this.vantaEffect.destroy();
  // }
  render() {
    return (
      <section id="section-1" className="section intro" ref={this.vantaRef}>
        <h1 className="intro-title">Hi, I'm Grant</h1>
        <div className="intro-container"> 
          <span className="intro-occupation">Full-Stack Web Developer</span>
        </div>
      </section>
    );
  }
}

function SecondPage(){
  return(
    <>
      <section className="section what" id="section-2">
       {/* <h2 className="sub-heading sub-heading-what">What I Do</h2> */}
        <Row>
        <Col sm={11} md={8} xs={10} className="container what-container">
          <div className="headshot-container">
            <div className='headshot'></div>
          </div>
          <div className="what-text">
            <div className="intro-container"><TypistRotation/></div>
            <p className="body-text about-me">
              First and foremost a problem-solver, I've always loved the way software engineering can 
              marry functionality and puzzle breaking. Although my tenure in web development is relatively short, 
              I've discovered ways to bring my own fresh perspective into the field.
            </p>
          </div>
         </Col>
       </Row>
       <div className='what-skills'>
          <div className='what-skills_title'>
            <h2>Skills</h2></div>
            <Row className="libraries justify-content-md-center libraries_what">
              <Row className="libraries_wrapper">
                <Col md={3} className="libraries_icon small">
                <img src={reactLogo} alt="reactJS" />
                </Col>
                <Col md={3} className="libraries_icon small node">
                <img src={nodeLogo} alt="bootstrap-CSS"></img>
                </Col>
                <Col md={3} className="libraries_icon small">
                <img src={mongoLogo} alt="bootstrap-CSS"></img>
                </Col>
                <Col md={3} className="libraries_icon small apache">
                <img src={apacheLogo} alt="bootstrap-CSS"></img>
                </Col>
                <Col md={3} className="libraries_icon small angular">
                <img src={angularLogo} alt="bootstrap-CSS"></img>
                </Col>
              </Row>
            </Row>
        </div>
      </section>
    </>
  );
}
function ThirdPage(){
  return(
  <section className="section portfolio" id="section-3">
    <Row className='project ant-simulation'>
      <Col className='project-title' md={10} sm={10} xs={10}>Ant Simulation</Col>
        <div className='divider'>
          <div className='div-one'></div>
          <div className='div-two'></div>
        </div>
      <Col className='project-picture antsim-picture' sm={7} md={6} xs={10}>
      <HoverVideoPlayer
      videoSrc={antGameClip}
      pausedOverlay={
        <img
          src="./img/antgame-clip-thumbnail.png"
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
      />
      </Col>
      <Col className='project-description body-text' sm={10} md={8} xs={10}>
        In pursuit of modeling ant behavior with Phaser.JS, this project uses data structures - specifically linked lists - to represent ant pheromone paths.
        Enapsulating the project is a time-betting mechanic which allows the player to compete against others. Once finished with the game, the app
        makes a call to a MongoDB server using Express.JS to create the leaderboard.  
      </Col>
      <Row className="libraries justify-content-md-center">
        <Row className="libraries_wrapper">
          <Col md={3} className="libraries_icon">
          <img src={phaserLogo} alt="bootstrap-CSS"></img>
          </Col>
          <Col md={3} className="libraries_icon node">
          <img src={nodeLogo} alt="bootstrap-CSS"></img>
          </Col>
          <Col md={3} className="libraries_icon">
          <img src={mongoLogo} alt="bootstrap-CSS"></img>
          </Col>
        </Row>
      </Row>
      <div className='project-link-container'>
        <form action="https://ant-game.herokuapp.com/">
          <Button type="submit" variant="dark" className="libraries_button">Launch</Button>
        </form>
      </div>
    </Row>
  </section>
  );
}
function FourthPage(){
  return(
    <section className="section portfolio" id="section-4">
      <Row className='project climate-flight'>
        <Col className='project-title' sm={10} md={10} xs={10}>ClimateFlight</Col>
        <div className='divider'>
          <div className='div-one'></div>
          <div className='div-two'></div>
        </div>
        <Col className='project-picture climateflight-picture' sm={7} md={4} xs={10}>
        <HoverVideoPlayer
          videoSrc={climateFlightClip}
          pausedOverlay={
            <img
              src="./img/climateflight-clip-thumbnail.png"
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          }
        />
        </Col>
        <Col className='project-description body-text' sm={10} md={6} xs={10}>
          In pursuit of modeling ant behavior with Phaser.JS, this project uses data structures - specifically linked lists - to represent ant pheromone paths.
          Enapsulating the project is a time-betting mechanic which allows the player to compete against others. Once finished with the game, the app
          makes a call to a MongoDB server using Express.JS to create the leaderboard.  
        </Col>
        <Row className="libraries justify-content-md-center">
          <Row className="libraries_wrapper">
            <Col md={3} className="libraries_icon">
            <img src={phpLogo} alt="bootstrap-CSS"></img>
            </Col>
            <Col md={3} className="libraries_icon angular">
            <img src={angularLogo} alt="bootstrap-CSS"></img>
            </Col>
            <Col md={3} className="libraries_icon apache">
            <img src={apacheLogo} alt="bootstrap-CSS"></img>
            </Col>
          </Row>
        </Row>
        <div className='project-link-container'>
          <form action="http://climateflight.org/">
            <Button type="submit" variant="dark" className="libraries_button">Launch</Button>
          </form>
        </div>
      </Row>
    </section>
    );
}
function FifthPage(){ 
  return(
    <section className="section portfolio" id="section-5">
      <Row className='project dcf-calculator'>
      <Col className='project-title' sm={10} md={10} xs={10}>DCF Calculator</Col>
        <div className='divider'>
          <div className='div-one'></div>
          <div className='div-two'></div>
        </div>
        <Col className='project-picture dcf-calculator-picture' sm={7} md={4} xs={10}>
        <HoverVideoPlayer
          videoSrc={dcfCalculatorClip}
          pausedOverlay={
            <img
              src="./img/dcf-calculator-thumbnail.png"
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          }
        />
        </Col>
        <Col className='project-description body-text' sm={10} md={6} xs={10}>
          In pursuit of modeling ant behavior with Phaser.JS, this project uses data structures - specifically linked lists - to represent ant pheromone paths.
          Enapsulating the project is a time-betting mechanic which allows the player to compete against others. Once finished with the game, the app
          makes a call to a MongoDB server using Express.JS to create the leaderboard.  
        </Col>
        <Row className="libraries justify-content-md-center">
          <Row className="libraries_wrapper">
            <Col md={3} className="libraries_icon">
              <img src={reactLogo} alt="reactJS" />
            </Col>
            <Col md={3} className="libraries_icon node">
              <img src={nodeLogo} alt="nodeJS"></img>
            </Col>
            <Col md={3} className="libraries_icon">
              <img src={bootstrapLogo} alt="bootstrap-CSS"></img>
            </Col>
          </Row>
        </Row>
        <div className='project-link-container'>
          <form action="https://grant-sobkowski.github.io/dcf-calculator/">
            <Button type="submit" variant="dark" className="libraries_button">Launch</Button>
          </form>
        </div>
      </Row>
    </section>
    );
}
function SixthPage(){
  return(
  <section className="section" id="section-6">
    <Row>
      <Col md={6} sm={6} className="contact-container contact-left">
        <div className="contact-header-container">        
          <div className="contact-header">Contact</div>
        </div>
        <div className="contact-left-container">
          <div className="contact-box">
            <div className="contact-wrapper">
              <div className="contact-links-wrapper">
                <div className="contact-linkedin">
                  <a href="https://www.linkedin.com/in/grant-sobkowski/">
                    <img src={linkedinLogo} alt=""></img>
                  </a>
                </div>
                <div className="contact-indeed">
                  <a href="https://my.indeed.com/p/grants-4f6n4ag">
                    <img src={indeedLogo} alt=""></img>
                  </a>
                </div>
              </div>
              <span className="contact-email">GRANT.SOBKOWSKI@GMAIL.COM</span>
            </div>
          </div>
        </div>
      </Col>
      <Col md={6} sm={6} className="contact-container contact-right">
        <div className="contact-text-container">
          <div className="contact-text-wrapper">
            <span className="contact-text">
              I'm looking for work!  
              Feel free to reach out to me with any inquiries or questions. 
              I'm open to new opportunites and making new connections.
            </span>
          </div>
        </div>
      </Col>
      <Row className="footer">
        <p className="fp-attribution">Made with Fullpage.js</p>
      </Row>
    </Row>
  </section>
  );
}
class TypistRotation extends React.Component {
  constructor() {
    super();
    this.state = { textIdx: 0, isTypistUpdate: false};
    this.textArray = ['Web Developer', 'Investor', 'Tree Hugger', 'Pilot'];
  }
  componentDidMount(){
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      let newIdx;
      if(currentIdx+1==this.textArray.length){
        newIdx = 0;
      }
      else{
        newIdx=currentIdx+1;
      }
      this.setState({ textIdx: newIdx});
      this.setState({isTypistUpdate: true});
    }, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let text = this.textArray[this.state.textIdx];
    if(this.state.isTypistUpdate){
      text = this.textArray[this.state.textIdx];
      this.setState({isTypistUpdate: false});
      return(<Typist><span></span></Typist>);
    }
    return (
      <RenderTypistText text={text}></RenderTypistText>
    );
  }
}
function RenderTypistText({text}){
  return(
    <Typist>
      <span className="intro-occupation">{text}</span>
      <Typist.Backspace count={text.length} delay={3000} />
    </Typist>
  )
}

// function TypistRotation({textArray, count}){
//   //Takes Array of String elems, returns <Typist/> elements for blinking text
//   return(
//     <>
//     <Typist>
//       <span>foobark</span>
//       <Typist.Backspace count={7} delay={2000} />
//     </Typist>
//       {textArray[count]}
//     </>
//   )
// }

const anchors = ["home", "what-i-do", "Ant-Simulation", "ClimateFlight", "DCF-Calculator", "contact"];

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#E9D5CA", "#827397", "#4D4C7D"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    responsiveWidth={1100}
    afterResponsive={function(isResponsive){

    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <FirstPage></FirstPage>
          <SecondPage></SecondPage>
          <ThirdPage></ThirdPage>
          <FourthPage></FourthPage>
          <FifthPage></FifthPage>
          <SixthPage></SixthPage>
        </div>
      );
    }}
  />
);

function App(){
  return(
    <>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container className="navbar-container">
        <Navbar.Brand href="#home">
          <img className="header-logo" src={portfolioLogo} alt="GS">
          </img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Ant-Simulation">Ant Game</NavDropdown.Item>
              <NavDropdown.Item href="#ClimateFlight">ClimateFlight</NavDropdown.Item>
              <NavDropdown.Item href="#DCF-Calculator">DCF Calculator</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <FullpageWrapper/>
    </>
  )
}

/* Portfolio Section
         <section className="section portfolio">
          <h1 className="sub-heading sub-heading-portfolio">Portfolio</h1>
          <div className="divider">
            <div className="div-one"></div>
            <div className="div-two"></div>
          </div>
          
         </section>
         <div className='project climateflight'>
            <div className='project-title climateflight-title'>ClimateFlight</div>
            <div className='project-picture climateflight-picture'></div>
            <div className='project-description body-text climateflight-body'>
              Using the TravelPayouts API, ClimateFlight returns each user flights ranked by their respective carbon emissions. ClimateFlight's backend is powered by PHP and Yii2,
              while the frontend uses AngularJS. This project emphasizes navigating around existing API's and outputting the results in a user-friendly manner. 
            </div>

            <div className='project-link-container'>
              <form action="https://github.com/grant-sobkowski/ClimateFlight2">
                <input type="submit" value="Repo" className='project-link'/>
              </form>
            </div>
          </div>
          <div className='bottom-info'>
          <div className="divider-white">
            <div className="div-one-white"></div>
            <div className="div-two-white"></div>
          </div>
            <p className='bottom-email'>grant.sobkowski@gmail.com</p>
            <p className='copyright'>© 2022 Grant Sokowski</p>
          </div>
*/

export default App;
