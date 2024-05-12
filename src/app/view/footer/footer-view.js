//import './footer.CssClasses';
import './footer.css';
import ElementCreator from '../../util/element-creator';
import View from '../view';

const CssClasses = {
    FOOTER: 'footer',
};
const TEXT = 'SPA example app';

export default class FooterView extends View {
    constructor() {
/**
 * @type {import ('../view').ViewParams}
 */
    const params = {
        tag: 'footer',
        classNames: [CssClasses.FOOTER],
        textContent: TEXT,
        callback: null,
    }
    super(params);
    }
}
