import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./CreateArticle.module.css";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/Textarea";
import axios from "axios";
function CreateArticle()
{

    const [articleTitle , setArticlTitle] = useState({
        title:"",
        data:"",
        readingTime:"",
        athor:"",
        message:"",
        imageUrl:""
    });

    const handleChangeArticle = (e) =>{
        setArticlTitle((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }));
        }
        
        const handleChangeArticleMessage = (e) =>{
                  setArticlTitle((prevState)=>({
            ...prevState,
            message:e.target.value
        }));
        }

        const handlCreatNewArticle = () =>{
            axios.post("http://localhost:8000/articles",{
    id: 9,
    imageUrl: articleTitle.imageUrl,
    title: articleTitle.title,
    readingTime: articleTitle.readingTime,
    data: articleTitle.data,
    athor: articleTitle.athor,
    content: articleTitle.message,
            })
        }

    

    return(
        <>
        <Navbar title="آتنا بلاگ" />
        <div className={styled.CreateArticlePage}>
        <div className="container">
           <h1>ساخت مقاله</h1>
           </div>
           </div>
        <Input labal="عنوان" name="title" handlechange={handleChangeArticle}/>
        <Input labal="تاریخ" name="data" handlechange={handleChangeArticle} />
        <Input labal="مدت زمان خواندن" name="readingTime" handlechange={handleChangeArticle}/>
        <Input labal="نویسنده" name="athor" handlechange={handleChangeArticle}/>
        <Input labal="آدرس عکس" name="imageUrl" handlechange={handleChangeArticle}/>
        <Textarea  handlechange={handleChangeArticleMessage}/>
        <div className={styled.buttonWrapper}>
            <button onClick={handlCreatNewArticle}>ساخت مقاله</button>
        </div>
        </>
    )
}
export default CreateArticle