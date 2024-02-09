import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        setTours(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <h3>Loading ....</h3>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  console.log("test", tours);
  const { image } = tours;
  return (
    <>
      {" "}
      <div className="tours">
        <div className="single-tour">
          <div className="tour-price">$5000</div>
          <img
            src="https://www.course-api.com/images/tours/tour-1.jpeg"
            alt=""
          />
          <div className="tour-info">
            <h5>Title</h5>
            <p>
              "Paris is synonymous with the finest things that culture can offer
              — in art, fashion, food, literature, and ideas. On this tour, your
              Paris-savvy Rick Steves guide will immerse you in the very best of
              the City of Light: the masterpiece-packed Louvre and Orsay
              museums, resilient Notre-Dame Cathedral, exquisite
              Sainte-Chapelle, and extravagant Palace of Versailles. You'll also
              enjoy guided neighborhood walks through the city's historic heart
              as well as quieter moments to slow down and savor the city's
              intimate cafés, colorful markets, and joie de vivre. Join us for
              the Best of Paris in 7 Days!"
              <button type="button" className="info-btn">
                Read More
              </button>
            </p>
          </div>
          <button type="button" className="delete-btn">
            Not Interested
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
