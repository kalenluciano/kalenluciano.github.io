import './index.css';
import './App.css';
import './styles/NavBar.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className="app-container">
			<header>
				<NavBar />
				<div className="nav-bar-line"></div>
			</header>
			<main>
				<Landing />
				<About />
				<Projects />
				<Skills />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}

export default App;
