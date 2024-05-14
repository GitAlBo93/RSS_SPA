import View from "../view";
import './main.css';

const CssClasses = {
    MAIN: 'main',
}; 

export default class MainView extends View {
    constructor(){
                /**
         * @type {import ('../../util/element-creator').ElementParams}
         */
                const params = {
                    tag: 'main',
                    classNames: [CssClasses.MAIN],
                    textContent: '',
                    callback: null,
                }
                super(params);
    }
}