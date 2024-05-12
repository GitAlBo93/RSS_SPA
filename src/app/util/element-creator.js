/**
 * @typedef {{
 * tag: string,
 * classNames: Array<string>,
 * textContent: string,
 * callback: function,
 * }} ElementParams
 */
//import { IElementParams } from '../exportTS/export';

export default class ElementCreator {
    /**
     * 
     * @param {ElementParams} param 
     */
    constructor(param){
        this.element = null;
        this.createElement(param);
    }

    /**
     * @param {ElementParams} param 
     */
       createElement(param){
            this.element = document.createElement(param.tag);
            this.setCssClasses(param.classNames);
            this.setTextContent(param.textContent);
            this.setCallback(param.callback);
       }

       /**
        * 
        * @returns {HTMLElement}
        */
       getElement(){
        return this.element;
       }
       
       /**
        * @param {Array<string>} CssClasses
        */
       setCssClasses(CssClasses){
        CssClasses.forEach((className)=> this.element.classList.add(className));
       }
       
       /**
        * 
        * @param {string} text 
        */
       setTextContent (text){
        this.element.textContent = text;
       }

        /**
         * 
         * @param {function} callback 
         */
       setCallback(callback){
        if (typeof callback === 'function'){
            this.element.addEventListener('click', (event) => callback(event));
        }
    }
}