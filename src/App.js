import BasicCard from "./components/BasicCard";
import { useEffect, useState } from "react";
import "./index.css";
import { Triangle } from "react-loader-spinner";




export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let [inputValue, setInputValue] = useState("");
    let [information, setInformation] = useState("");
    
    useEffect(() => {
    let url = `https://dev.to/api/articles?tag=${inputValue}`;

    function getArticles() {
        fetch(url)
            //This operation returns a promise that could either resolve or reject
            // we must resolve the Response object to JSON format using the json() method
            .then((response) => response.json())
            // This also returns a promise and from there, we can resolve to get the actual data that we need
            .then((articles) => {
                console.log(articles);
                setData(articles);
                setError(null);
            })
            // In case the promise rejects, we will handle the error using the catch()
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }

        getArticles();
    }, [inputValue]);

    const articlesArray = data?.map((article) => (
        <BasicCard
            key={article.id}
            alt={article.alt}
            date={article.created_at}
            description={article.description}
            imgPath={article.cover_image }
            link="Read more"
            title={article.title}
            url={article.url}
        />
    ));

      

      
        function handleSubmit(event) {
          event.preventDefault();
          setInputValue(event.target[0].value);
          console.log(inputValue, event)
          console.log("dentro do submit");
          if (event.target[0].value) {
            setInformation(`Find all about ${event.target[0].value}`);
          } else {
            setInformation("Please search for an article topic");
          }
        }

    if (!loading && !error) {
        return (
            <div className="App">
                <h1>Articles</h1>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search"  />
        <button type="submit">Search</button>
      </form>
      {inputValue && <h3>Search for {inputValue}</h3>}
      <h4>{information}</h4>
    </div>
 
                <div className="articles">{data && articlesArray}</div>
            </div>
        );
    } else if (error) {
        return <div>There is a problem fetching the post data - {error}</div>;
    } else {
        return (
            <div className="load">
                <Triangle
                    height="500"
                    width="500"
                    radius="9"
                    color="coral"
                />
            </div>
        );
    }
}
