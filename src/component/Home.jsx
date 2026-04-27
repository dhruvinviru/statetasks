import React from 'react'
import { Link } from 'react-router-dom'

function Home({ page = [] }) {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-content">
          <h1>Welcome to StateTasks</h1>
          <p>
            My name is Dhruvin and this is a collection of React state management and routing tasks. Explore the different pages to see various examples of React components in action!
          </p>
          <div className="home-cta">
            {page
              .filter((item) => item.name !== 'Home')
              .map((item) => (
                <Link key={item.path} to={item.path} className="home-button">
                  Go to {item.name}
                </Link>
              ))} 
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="feature-card">
          <h2>Easy Navigation</h2>
          <p>Use the header menu to switch between Home and Task pages quickly.</p>
        </div>
        <div className="feature-card">
          <h2>React Router</h2>
          <p>Enjoy a clean page flow and dynamic routing using React Router.</p>
        </div>
        <div className="feature-card">
          <h2>State Example</h2>
          <p>View state-driven UI behavior in the calculator task component.</p>
        </div>
      </section>
    </main>
  )
}

export default Home