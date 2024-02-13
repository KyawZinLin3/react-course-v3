import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    const fetchTours = async () => {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setTours(data);
    };
    fetchTours();
  }, []);
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="title-underline"></div>
        </div>
        <div className="tours">
          {tours.map((tour) => {
            return (
              <div className="single-tour" key={tour.id}>
                <img src={tour.image} alt={tour.name} className="img" />
                <span className="tour-price">${tour.price}</span>
                <div className="tour-info">
                  <h5>{tour.name}</h5>
                  <p>
                    {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
                    <button
                      className="info-btn"
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  <button type="button" className="delete-btn btn-block btn">
                    Not Interested
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default App;
