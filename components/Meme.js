import React from 'react'
import memesData from "../memesData.js"

export default function Meme () {

    //set state as an object with 3 variables
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    
    return (
        <main>
            <div className='form'>
                <input 
                    type='text'
                    className='form--input'
                    placeholder='Top Text'
                />
                <input 
                    type='text'
                    className='form--input'
                    placeholder='Bottom Text'
                />
                <button
                    className='form--button'
                    onClick={getRandomMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className='meme--image'/>
        </main>
    )
}