import React from 'react'
import Pokemon from '../Pokemon';
import { Col, Row } from 'antd';
import styled from "styled-components";



const CardPokedok = (props) => {

    const Container = styled.section`  
    display: grid;
    padding: 10px 50px;
    `;


    return (
        <Container>
            <Row gutter={[16, 16]} >
                {props.pokemon.map((pokemon, index) => {
                    return (
                        <Col style={{ padding: '5px' }} span={8} key={index}>
                            <center>
                                <Pokemon key={index} pokemon={pokemon} />
                            </center>
                        </Col>
                    )
                })}
            </Row>
        </Container>



    )
}



export default CardPokedok