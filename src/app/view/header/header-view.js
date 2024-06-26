import './header.css';
//import ElementCreator from '../../util/element-creator';
import View from '../view';
import ElementCreator from '../../util/element-creator';
import LinkView from './link/link-view';
import IndexView from '../main/index/index-view';
import MainView from '../main/main-view';
//import { start } from 'repl';

const CssClasses = {
    HEADER: 'header',
    NAV: 'nav',
}

const NamePages = {
    INDEX: 'Главная',
    PRODUCT: 'Карточки',
}
const START_PAGE_INDEX = 0;

export default class HeaderView extends View{
    /**
     * 
     * @param {import ('../main/main-view').default} mainComponent 
     */
    constructor(mainComponent){
        /**
         * @type {import ('../../util/element-creator').ElementParams}
         */
        const params = {
            tag: 'header',
            classNames: [CssClasses.HEADER],
            textContent: '',
            callback: null,
        }
        super(params);

        this.linkElement=[];
        this.configureView(mainComponent);

    }
    /**
     * @param {import ('../main/main-view').default} mainComponent 
     */
    configureView(mainComponent){
        const paramsNav = {
            tag: 'nav',
            classNames: [CssClasses.NAV],
            textContent: '',
            callback: null,
        };
    const creatorNav = new ElementCreator (paramsNav);
    
    this.elementCreator.addInnerElement(creatorNav);
    
    const indexView = new IndexView();
    const pages = [
        {
            name: NamePages.INDEX,
            callback: ()=>mainComponent.setContent(indexView),
        },
        {
            name: NamePages.PRODUCT,
            callback: ()=>{
    
            },
        }
    ];

    pages.forEach((item, index)=>{
        const linkElement = new LinkView(item.name, this.linkElement);
        creatorNav.addInnerElement(linkElement.getHtmlElement());

        this.linkElement.push(linkElement);

        if (index === START_PAGE_INDEX) {
            linkElement.setSelectedStatus();
        }

    });
    }
}