import React from 'react';
import Menu from './Menu';

const Base = ({
    title = "My Title",
    description = "My description",
    className = "text-white p-4",
    children
}) => {
    return(
        <div class="special-color pt-4" style={{position:"absolute",padding:'0',width:'100%',height:'100%'}}>
            <Menu/>
            <div class="special-color pt-4" style={{marginBottom:'2rem'}}>
            <div className="jumbotron text-white text-center special-color pt-4">
                    <h2 className="display-5">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>

            <footer class="page-footer font-small special-color-dark" style={{position:'fixed',bottom:'0',left:'0',right:'0'}}>
                    <div class="footer-copyright text-center py-3">© TshirtExpress:
                        <a href=""> tshirtExpress@shop.com</a>
                    </div>
            </footer>
        </div>
    );
}
export default Base;