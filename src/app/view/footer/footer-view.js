//import './footer.CssClasses';
import './footer.css';
import ElementCreator from '../../util/element-creator';

const CssClasses = {
    FOOTER: 'footer',
};
const TEXT = 'SPA example app';

export default class FooterView {
    constructor() {
        this.elementCreator = this.createView();
    }

    /**
     *
     * @returns {HTMLElement}
     */
    getHtmlElement() {
        return this.elementCreator.getElement();
    }

    /**
     *
     * @returns {ElementCreator}
     */
    createView() {
        // element.textContent = TEXT;
        // element.classList.add(CssClasses.FOOTER);

        const params = {
            tag: 'footer',
            classNames: [CssClasses.FOOTER],
            textContent: TEXT,
            callback: null,
        };
        const elementCreator = new ElementCreator(params);

        return elementCreator;
    }
}
