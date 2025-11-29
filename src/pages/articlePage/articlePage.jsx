import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import styled from "./articlePaghe.module.css";
import { useEffect , useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/loader";

function ArticlePage()
{
    const [article , setArticle] = useState([]);
    const params=useParams();
    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);

    axios.get( `http://localhost:8000/articles/${params.id}`).then((result)=>{
        setArticle(result.data);
        setIsLoading(false);
    }).catch((error)=>{
        console.log(error);
        setIsLoading(false);
    })

},[]);
    
    return(
        <>
    <Navbar title="آتنا بلاگ"/>

            <div className={styled.articlePage}>
          <div className="container">
                {
            isLoading ?  (
     <Loader/> 
            ):
        (
            <>
                <h3>{article.title}</h3>
                <div className={styled.articlePageData}>
                    <span>{article.data} :تاریخ</span>
                    <span>نویسنده : {article.athor}</span>
                    <span> مدت زمان خواندن : {article.readingTime} دقیقه</span>

                </div>
                <img src={article.imageUrl} alt="" />
                <p>
                    {article.content}
                </p>
                </>
            )}
            </div>
                <Footer />
            </div>  
   
        </>
    )
}
export default ArticlePage