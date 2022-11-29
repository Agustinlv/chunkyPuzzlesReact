import mainLogo from '../../img/chunky-logo.png';

const ItemListContainer = (props)=>{
    return(
        <div className="homeContainer">
            <h1 style={{"text-transform": "uppercase","font-syle": "italic","user-select": "none"}}>{props.saludo}</h1>
            <img className="mainLogo" src={mainLogo} alt="chunky puzzles logo"></img>
        </div>
    );
};

export default ItemListContainer;