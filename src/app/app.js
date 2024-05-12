import '../style.css';
import FooterView from './view/footer/footer-view';

export default class App {
    
    constructor(){
        this.createView();
        console.log('In app');
    }

    createView(){
        const footerView = new FooterView();

        document.body.append(footerView.getHtmlElement());
    }
    
}