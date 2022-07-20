import React from 'react'

export default function Header () {
    return (
        <Header className='header'>
            <img 
                src='./images/Troll_Face.png'  
                className='header--image'
            />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </Header>
    )
}