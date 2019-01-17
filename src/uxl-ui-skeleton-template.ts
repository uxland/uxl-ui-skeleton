import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';
import {repeat} from 'lit-html/directives/repeat';
import {guard} from 'lit-html/directives/guard';

const skeletonTemplate = (props) => html `
<div class="skeletons">
    ${repeat(props.items, item => html `
           <div class="skeleton">
                <div class="skeleton-title"></div>
                <div class="skeleton-content"></div>
           </div>
</div>`
)}`;

const innerTemplate = (props) => html `
    ${guard(props.items, () => skeletonTemplate(props))}`;

export const template: (props: any) => TemplateResult = innerTemplate;
