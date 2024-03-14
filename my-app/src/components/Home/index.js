import { FaWhatsapp } from "react-icons/fa";

import './index.css'

const Home =()=>(
    <div className="main-container">
    <div className="banner-container">
        <div>
        <h1 className='main-heading'>Mobishaala</h1>
        <p className="description">Create your <span>Digital classroom</span> in 5 mins for <span>Free</span> & connect 1+ Million Students.</p>
        <div className='mobile-video-container'>
                <iframe height='315' src="https://www.youtube.com/embed/jg5d59ligW4?si=uA-GrTv3XWQaNXNq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   className='video'></iframe>
            <button>Buy</button>
        </div>
        <ul>
            <li>No technical knowledge required.</li>
            <li>Quickly setup live class,tests,notes,ebooks and more.</li>
            <li>Reach out to millions of students anywhere,anytime.</li>
        </ul>
        <div>
            <p>Institute/Teacher</p>
            <button >Get Started</button>
        </div>
        <div>
            <p>Student</p>
            <button>Download App</button>
        </div>
        <div className="talk-container">
        
        <button className="talk-btn">
            <FaWhatsapp className="whatsapp-icon"/> Talk to Us
        </button>

        </div>
        </div>
        <div className='desktop-video-container'>
                <iframe  src="https://www.youtube.com/embed/jg5d59ligW4?si=uA-GrTv3XWQaNXNq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   className='video'></iframe>
            <button>Buy</button>
        </div>
        

    </div>
    <footer>
            <h1>
                Mobishaala
            </h1>
            <div>
                <h1>Vision</h1>
                <p>Empower Institutions & Teachers with state of the art digital classroom Technology.</p>
            </div>

            <div>
                <h1>Address</h1>
                <p><span>Registered Office: </span>804,5th Cross,9th main,4th BlockKoramangala,Bangalore,Karnataka 560034</p>
                <p><span>Corporate Office: </span>293,Westend Marg,near Saket,Saidulajab,Saket,New Delhi,110030</p>
            </div>
            <div>
                <h1>Quick Links</h1>
                <p>Blog</p>
                <p>Android App</p>
                <p>IOS App</p>
            </div>

            
        </footer>
    </div>
)

export default Home