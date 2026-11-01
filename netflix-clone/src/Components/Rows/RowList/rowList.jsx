import React from 'react'
import Row from '../Row/row'
import requests from '../../../utils/requests'

const  rowList = () =>{
    return (
    <>
        <Row title = "NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated"fetchUrl={requests.fetchTopRatedMovies}/>
        <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
        <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Tv Show"fetchUrl={requests.fetchTvShow}/>
        <Row title="Documenteries"fetchUrl={requests.fetchDocumentaries}/>
        
    </>
    )
}

export default rowList
