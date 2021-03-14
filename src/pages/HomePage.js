import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  return (
    <>
      <div id="home">
        <div id="eventsPage" className="">
          <div id="eventsDiv">
            <h1 id="eventsHeader" className="fancy-font">
              EVENTS
            </h1>
          </div>
          <div id="featuredEventsDiv">
            <h2 id="featuredEventsHeader" className="fancy-font">
              FEATURED EVENTS
            </h2>
            <Carousel>
              <Carousel.Item className="eventD">
                <img
                  className="d-block w-100 img-fluid"
                  src={`${process.env.PUBLIC_URL}/img/Creature_Power.jpg`}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Wild Kratts - Creature Power</h3>
                  <p>
                    Get ready for an extraordinary adventure! Building on
                    children’s natural interest in animals.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="eventD">
                <img
                  className="d-block w-100 img-fluid"
                  src={`${process.env.PUBLIC_URL}/img/Food_And_Wine.jpg`}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Food and Wine Festival</h3>
                  <p>
                    Taste buds will bloom this spring with a delicious menu of
                    dishes and drinks as dynamic and unique as the park’s
                    thrilling roller coaster collection.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="eventD">
                <img
                  className="d-block w-100 img-fluid"
                  src={`${process.env.PUBLIC_URL}/img/Yoga.jpg`}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Yoga In the Park</h3>
                  <p>
                    Every Thursday 5:30pm in the Rotary Pavilion, rain or shine.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div id="todaysEventsDiv">
            <h2 id="todaysEventsHeader" className="fancy-font">
              TODAY'S EVENTS
            </h2>
            <div id="filterSection">
              <select
                name="venue-category"
                id="select-venue-category"
                class="col-10 col-sm-5 mx-sm-2 my-1 my-md-0 p-2"
              >
                Select Event Category
                <option value="Select Event Category">
                  Select Event Category
                </option>
                <option value="Reggae">Reggae</option>
                <option value="Country">Country</option>
                <option value="Rock">Rock</option>
                <option value="Hip Hop">Hip Hop</option>
              </select>

              <select
                name="venue-area"
                id="select-venue-area"
                class="col-10 col-sm-5 my-1 my-md-0 mx-sm-2 p-2"
              >
                Select Event Area
                <option value="Event Area">Select Event Area</option>
                <option value="Town n Country">Town n Country</option>
                <option value="New Tampa">New Tampa</option>
                <option value="Brandon">Brandon</option>
                <option value="Hyde Parke">Hyde Parke</option>
              </select>
            </div>
            <div id="todaysEventsContainer">
              <div className="event col-11">
                <h3 className="eventHeader">Universoul Circus</h3>
                <div className="eventDescription">
                  The UniverSoul Circus is a world-class, live entertainment
                  attraction that has captured the hearts and imaginations of a
                  new generation of families.
                </div>
              </div>
              <div className="event col-11">
                <h3 className="eventHeader">Cuban Sandwhich Festival</h3>
                <div className="eventDescription">
                  FREE family & community festival features LIVE Entertainment,
                  Food & Cultural Vendors
                </div>
              </div>
              <div className="event col-11">
                <h3 className="eventHeader">Indian Festival Tampa</h3>
                <div className="eventDescription">
                  TIndia Festival Tampa is a unique annual event presented by
                  the Gujarati Samaj of Tampa Bay, Inc.
                </div>
              </div>
              <div className="event col-11">
                <h3 className="eventHeader">United Bikerz Jamboree</h3>
                <div className="eventDescription">
                  This is a Multi-Cultural, family-oriented event for all to
                  attend.
                </div>
              </div>
              <div className="event col-11">
                <h3 className="eventHeader">Conga Caliente</h3>
                <div className="eventDescription">
                  Get the whole family dancing at Conga Caliente Festival, a
                  Latino music and cultural celebration.
                </div>
              </div>
              <div className="event col-11">
                <h3 className="eventHeader">
                  Tampa Bay Black Heritage Festival
                </h3>
                <div className="eventDescription">
                  The Tampa Bay Black Heritage Festival (TBBHF/The Festival) is
                  a ten-day cultural event that features speakers, musicians,
                  artists, poets and craftspeople locally and nationally.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bottomLinksDiv">
          <ul id="bottomLinks">
            <li className="col-12 col-sm-6 col-md-3">
              <a href="#" className="bottom-link">
                Restaurants
              </a>
            </li>
            <li className="col-12 col-sm-6 col-md-3">
              <a href="#" className="bottom-link">
                Bars
              </a>
            </li>
            <li className="col-12 col-sm-6 col-md-3">
              <a href="#" className="bottom-link">
                Lounges
              </a>
            </li>
            <li className="col-12 col-sm-6 col-md-3">
              <a href="#" className="bottom-link">
                Activities
              </a>
            </li>
          </ul>
        </div>
        <div id="footer" className="">
          <div id="aboutDiv" className="col-12 col-md-6 footer-section">
            <h2>ABOUT</h2>
            <div id="aboutText">
              We are here to inform the people of tampa on their options for
              going out.
            </div>
          </div>
          <div id="contactDiv" className="col-12 col-md-6 footer-section">
            <h2>CONTACT</h2>
            <div id="aboutText">
              <p>813-276-4020</p>
              <p>11234 Main Blvd Tampa, FL</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
