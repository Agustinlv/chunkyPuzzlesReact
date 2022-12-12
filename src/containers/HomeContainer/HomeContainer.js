import mainLogo from '../../img/chunky-logo.png';

const HomeContainer = ({props})=>{
    return(
        <main>
            <div className='welcomeHeader'>
                <h1 className='welcomeText'>{props.saludo}</h1>
                <h2 className='welcomeText'>a</h2>
                <h3 className='welcomeText' id='chunkyPuzzles'>{props.empresa}</h3>
            </div>
            <img className="mainLogo" src={mainLogo} alt="chunky puzzles logo"></img>
        </main>
    );
};

export default HomeContainer;