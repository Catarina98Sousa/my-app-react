import BasicCard from "../../components/BasicCard";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";


function Home () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const[url, setUrl] = useState("https://dev.to/api/articles"); //quando fizer refresh voltar ao inicio 
  let [inputValue, setInputValue] = useState("");//barra de pesquisa 
  let [information, setInformation] = useState("");

   
    useEffect(() => {
    //let url = `https://dev.to/api/articles?tag=${inputValue}`;//?tag= ... é o usado para procurar o item especifico da api (network fecth api)
    //template literals string com uma variavel

    function getArticles() {
        setLoading(true)
        fetch(url)  
            .then((response) => response.json())
            .then((articles) => {
                console.log(articles);
                setData(articles);
            })
            .catch((err) => {
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }

        getArticles();
    }, [url]);//é o watch constante daquilo que acontece no inputvalue 
    //sem isto só corre uma vez !!!IMPORTANTE

    function handleSubmit(event) {
    event.preventDefault();
    setInputValue(event.target[0].value);
    console.log("dentro do submit");
    if (inputValue) {
      setUrl(`https://dev.to/api/articles?tag=${inputValue}`);//só queremos fazer a chamada do url quando o mudamos
      setInformation(`Find all about ${inputValue}`);
    } else {
      setInformation("Please search for an article topic");
    }
  }

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

    if(!loading)
     return (
            <div className="App">

                <h1>Articles</h1>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" />
        <button type="submit">Search</button>
      </form>
      <h3>Search for {inputValue}</h3>
      <h4>{information}</h4>
    </div>
                <div className="articles">{data && articlesArray}</div>
            </div>
        );
        else {
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

export default Home