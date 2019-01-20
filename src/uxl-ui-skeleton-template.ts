import {html} from '@polymer/lit-element/lit-element';
import {repeat} from 'lit-html/directives/repeat';
import {guard} from 'lit-html/directives/guard';
import {UxlUiSkeleton} from "./uxl-ui-skeleton";

const getSkeletonTemplate = (props: UxlUiSkeleton) =>{
    switch (props.type) {
        case "list":
            return listSkeletonTemplate(props);
        case "single":
            return singleSkeletonTemplate(props);
        default:
            return listSkeletonTemplate(props);
    }
};

const listSkeletonTemplate = (props) => html `
<div class="list-sk ${props.animation} ${props.classifier}">
    ${repeat(props.items, item => html `
           <div class="sk">
                <div class="sk-title"></div>
                <div class="sk-content"></div>
           </div>
</div>`
)}`;

const singleSkeletonTemplate = (props) => html`
<div class="single-sk ${props.animation} ${props.classifier}">
    <div class="single-sk-title"></div>
    <div class="single-sk-content"></div>
</div>`;

export const template = (props) => guard(props.items, () => getSkeletonTemplate(props));
