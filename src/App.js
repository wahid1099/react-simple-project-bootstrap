import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col, Card, Spinner} from 'react-bootstrap';
import {useEffect, useState} from "react";
import News from "./Components/News/News";
function App() {
    const [news,setNews]=useState([]);
    console.log(news)

    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=4614d5c0687b4801affd16529329bf17')
            .then(response=>response.json())
            .then(data => setNews(data.articles));

    },[])
  return (
    <div className="App">
        <h1>News of the world</h1>
        {  news.length===0 ? <Spinner animation="grow" />
            :
            <Row xs={4} md={4} className="g-4">
                {
                    news.map(nw =>

                        <News news={nw}></News>
                    )
                }

            </Row>
        }
    </div>
  );
}

export default App;
