const FooterContainer = (props)=>{
    return(
        <footer>
            <div className="footer">
                {props.mensaje}
            </div>
        </footer>
    );
};

export default FooterContainer;