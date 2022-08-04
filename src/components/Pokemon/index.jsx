import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import axios from 'axios'
const { Meta } = Card

const Pokemon = (props) => {
    const [detailPokemon, setDetailPokemon] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getDetail = () => {
            setLoading(true)
            axios.get(props.pokemon.url).then((data) => {
                setDetailPokemon(data.data)
                setLoading(false)
            }).catch((err) => {
                console.log(err);
            })
        }

        getDetail();
    }, [props.pokemon.url])


    return (
        <div style={{}}>
            {loading ? (<h1>Loading ...</h1>) : (
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt={props.pokemon.name} src={detailPokemon?.sprites?.front_default} />}
                >
                    <Meta title={props.pokemon.name} />
                </Card>
            )}

        </div>
    )
}

export default Pokemon