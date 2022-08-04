import React, { useState, useEffect } from 'react'
import Cards from '../components/CardPokedok'
import Navbar from '../components/Navbar'
import axios from 'axios'
import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

const Home = () => {
    const Button = styled.button`  
   margin:auto;
   display: flex;
   background-color: blue;
   border: none;
   color:white;
   padding:10px;
   border-radius: 10%;
   cursor: pointer;
   
   
    `;
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [nextPage, setNextPage] = useState()
    const getData = () => {
        setLoading(true)
        axios.get("https://pokeapi.co/api/v2/pokemon/").then((datas) => {
            setData(datas.data.results)
            setNextPage(datas.data.next)
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })

    }

    const handleNextPage = () => {

        axios.get(`${nextPage}`).then((datas) => {
            setData([...data, ...datas.data.results])
            setNextPage(datas.data.next)

        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Layout className="layout">
                <Navbar />
                <Content>
                    {loading ? (<h1>Loading ...</h1>) : (<Cards pokemon={data} />)}
                    <Button onClick={handleNextPage} style={{ marginBottom: '10px', marginTop: '10px' }} size="middle" type="primary">NEXT</Button>
                </Content>
            </Layout>
        </>
    )
}





export default Home