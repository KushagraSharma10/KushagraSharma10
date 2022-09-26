import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import logo from './logo.svg';
function MyCard() {
  return (
      <div classname="container text-center">
        <div classname="row">
          <div classname="col">
            <div class="card">
              <img src="https://media.gettyimages.com/photos/joan-laporta-president-of-fc-barcelona-during-the-unveiling-of-marcos-picture-id1421293941?s=594x594" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div classname="row">
            <div class="card">
              <img src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/20/cb54b059-f075-48d0-a125-3e4f23b15482/2996851.jpg" class="card-img-top" alt="..."height="200px"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div classname="row">
            <div class="card">
              <img src="https://media.gettyimages.com/photos/lionel-messi-of-paris-saintgermain-applauds-the-fans-following-in-picture-id1344007051?s=612x612" class="card-img-top" alt="..." height="200px"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
       );
      }

      export default MyCard;
//      <div classname = "container">
//      <div classname = "row">
//      <div classname = "col-md-3">
//     <Card style={{ width: '20rem' }}>
//      <Card.Img variant="top" src="https://media.gettyimages.com/photos/joan-laporta-president-of-fc-barcelona-during-the-unveiling-of-marcos-picture-id1421293941?s=594x594"/>
//      <Card.Body>
//        <Card.Title>Joan Laporta</Card.Title>
//        <Card.Text>
//          He is a Spanish politician and current president of FC Barcelona.
//        </Card.Text>
//      </Card.Body>
//
//      <Card.Img variant="top" src="https://qph.cf2.quoracdn.net/main-qimg-02883003f98235fb941bbed468940938-lq"/>
//            <Card.Body>
//              <Card.Title>Pep Guardiola</Card.Title>
//              <Card.Text>
//                He is a Spanish Manager and Best Manager of FC Barcelona Till Now.
//              </Card.Text>
//            </Card.Body>
//
//            <Card.Img variant="top" src="https://w0.peakpx.com/wallpaper/199/346/HD-wallpaper-messi-2017-football-stars-barca-lionel-messi-fc-barcelona-footballers-fcb-soccer-leo-messi.jpg"/>
//                        <Card.Body>
//                          <Card.Title>Lionel Messi</Card.Title>
//                          <Card.Text>
//                            He is a Argentine Player and the Best Barcelona Player Ever Lived.
//                          </Card.Text>
//                        </Card.Body>
//      </Card>

//import React from "react";
//import ReactCardFlip from "react-card-flip";
//
//const CardStyle = {
//  border: "1px solid #03506f",
//  borderRadius: "30px",
//  padding: "20px",
//  margin: "20px",
//  width: "270px",
//  height: "170px",
//  backgroundColor: "#75cfb8"
//};
//
//function MyCard(props) {
//  const [isFlipped, setFlipped] = React.useState(false);
//
//  return (
//    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
//      <div
//        style={CardStyle}
//        className="CardFront"
//        onClick={() => setFlipped((prev) => !prev)}
//      >
//        <div>
//          <span className="emoji" role="img" aria-label="emojis">
//            {props.emoji}
//          </span>
//        </div>
//      </div>
//
//      <div
//        style={CardStyle}
//        onClick={() => setFlipped((prev) => !prev)
//         >
//                <div>
//                  <span className="emoji" role="img" aria-label="emojis">
//                    {props.emoji}
//                  </span>
//                </div>
//             </div>
//
//              <div
//                style={CardStyle}
//                onClick={() => setFlipped((prev) => !prev)}
//                className="CardBack"
//              >
//                <p>{props.back}</p>
//              </div>
//            </ReactCardFlip>
//          );
//        }
//
//        export default MyCard;