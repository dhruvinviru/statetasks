import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-content">
          <h1>Welcome to StateTasks</h1>
          <p>
            Manage your React state tasks with ease. Navigate to the task page to explore the
            calculator and see state updates in action.
          </p>
          <div className="home-cta">
            <Link to="/Cal1" className="home-button">
              Go to Task 1
            </Link>
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