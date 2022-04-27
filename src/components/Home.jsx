import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="container my-3 border">
      <section className="border">
        <h1 className="home border">Cory Marker</h1>
        <p>Hello, I'm a Flatiron School graduate with training 
          in full-stack web development.
        </p>
        <p>I have knowledge in Ruby on Rails and ReactJS.</p>
      </section>
      <hr />
      <section className="border"><About /></section>
      <hr />
      <section className="border"><Projects /></section>
      <hr />
      <section className="border"><Contact /></section>
      <hr />
    </div>
  )
}

export default Home
