interface IElementParams {
    tag: string;
    classNames: Array<string>;
    textContent: string;
    calback: Function;
}

interface ICardInfo {
id: string;
description: string;
}

export {IElementParams, ICardInfo }