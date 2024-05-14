import '../style.css';
import FooterView from './view/footer/footer-view';
import HeaderView from './view/header/header-view';
import MainView from './view/main/main-view';

export default class App {
    constructor() {
        this.createView();
        console.log('In app');
    }

    createView() {
        const mainView = new MainView();
        const headerView = new HeaderView(mainView);
        const footerView = new FooterView();
        

        document.body.append(headerView.getHtmlElement(), mainView.getHtmlElement(), footerView.getHtmlElement());
    }
}

// let newDiv = document.createElement('div');
// newDiv.classList.add('newDive');
// document.body.append(newDiv);