import '../style.css';
import FooterView from './view/footer/footer-view';
import HeaderView from './view/header/header-view';
import MainView from './view/main/main.view';

export default class App {
    constructor() {
        this.createView();
        console.log('In app');
    }

    createView() {
        const headerView = new HeaderView();
        const footerView = new FooterView();
        const mainView = new MainView();

        document.body.append(headerView.getHtmlElement(), mainView.getHtmlElement(), footerView.getHtmlElement());
    }
}

// let newDiv = document.createElement('div');
// newDiv.classList.add('newDive');
// document.body.append(newDiv);