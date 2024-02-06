import { useEffect } from "react";
import { HomeContainerStyled } from "./styled";

const Home = () => {

    return <HomeContainerStyled>
        <div className="child-container">
            <div className="img-parent">
                <img src={'picture.jpg'} />
            </div>
            
            <h1>Hi, I'm <span>&lt;/</span>Ubaid<span>/&gt;</span></h1>
            {/* <p>🚀😀</p> */}
            <div id="dots">...</div>
            <p>A software developer specializing in Python. Proficient with Django, DRF & React.js.
            Currently doing bachelor's in Computer Science from UIT University. I'm Passionate about coding and I like to read 📚</p>

            <h2>Top Skills</h2>
            <p>Python • Django + DRF • JavasScript • React.js • Docker • Git • Postgres • Bash Scripting • SQL</p>
            
            <div className="button-parent">
                <button>Say hello</button>
            </div>
        </div>
    </HomeContainerStyled>
    
}

export default Home;
