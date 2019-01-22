import {html} from 'lit-element/lit-element';
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
<div class="wrapper ${props.animation} ${props.classifier}">
    ${repeat(props.items, item => html `
           <div class="skeleton">
                <div class="skeleton__header"></div>
                <div class="skeleton__body"></div>
           </div>
</div>`
)}`;

const singleSkeletonTemplate = (props) => html`
<div class="single-skeleton ${props.animation} ${props.classifier}">
    <div class="single-skeleton__header"></div>
    <div class="single-skeleton__body"></div>
</div>`;

export const template = (props) => guard(props.items, () => getSkeletonTemplate(props));
