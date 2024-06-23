import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './listing.css';

const cards = [
  { title: 'People', icon: 'bi bi-people-fill', iconPath: 'M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5', text: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.', btnText: 'Connect', borderClr: "#8064A2" },
  { title: 'Place', icon: 'bi bi-geo-alt-fill', iconPath: 'M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6', text: 'Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.', btnText: 'Meet Up', borderClr: "#77933C" },
  { title: 'Product', icon: 'bi bi-cart-fill', iconPath: 'M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2', text: 'Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.', btnText: 'Get it', borderClr: "#C0504D" },
  { title: 'Program', icon: 'bi bi-calendar-check-fill', iconPath: 'M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708', text: 'Find events, meetups and workshops related to your hobby.  Register or buy tickets online.\n\n', btnText: 'Attend', borderClr: "#0096C8" },
];

function ListingSection() {
  return (
    <>
      <Container fluid className="md container">
        <Row xs={1} md={2} lg={2} className="g-4">
          {cards.map((cardData) => (
            <Col key={cardData.title} className="column">
              <Card className="listing-card" style={{ border: `solid 2px ${cardData.borderClr}`, '--hover-color': cardData.borderClr }}>
                <Card.Body className="listing-card-body">
                  <Card.Title style={{ fontWeight: 600 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={cardData.icon} viewBox="0 0 16 16" style={{ width: '8%', height: '8%', marginRight: '5%' }}>
                      <path d={cardData.iconPath} />
                    </svg>
                    {cardData.title}
                  </Card.Title>
                  <Card.Text style={{ fontWeight: 400 }}>{cardData.text}</Card.Text>
                  <button className="listing-card-btn">{cardData.btnText}</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ListingSection;
