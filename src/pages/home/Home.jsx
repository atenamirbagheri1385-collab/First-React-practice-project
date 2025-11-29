import { useEffect,useState } from "react";
import Article from "../../components/article/article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import {Link, Route , Routes} from "react-router-dom";
import Loader from "../../components/loader/loader";

function Home()
{
    const [articles , setArticles] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
     



    useEffect(()=>{

        //api call
        setIsLoading(true);
        axios.get("http://localhost:8000/articles")
        .then(result=>{
            setArticles(result.data);
            setIsLoading(false);
        }).catch((error)=>{
            console.log(error);
            setIsLoading(false);
            
        })
            
    } , [])

    return(
        <>
<div className={styled.homeWrapper}>
    <Navbar title="آتنا بلاگ"/>
    <div className="container">
        <h2>
            مقالات جدید
        </h2>

        {
            isLoading ?  (
             
        <Loader />
            )
      :
        (

            <div className={styled.articles}>
                {
              articles.map(article => (
      <Link key={article.id} to={`/articlePage/${article.id}`}>
        <Article article={article} />
      </Link>
    ))}
        </div>
 
        )
        }
</div>



            
    <Footer />
   
</div>
</>
    )
}
export default Home