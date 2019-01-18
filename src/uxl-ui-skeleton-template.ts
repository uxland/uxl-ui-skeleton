import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';
import {repeat} from 'lit-html/directives/repeat';
import {guard} from 'lit-html/directives/guard';

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

const innerTemplate = (props) => html `
${props.type == 'list' 
    ? guard(props.items, () => listSkeletonTemplate(props))
    : singleSkeletonTemplate(props)
}`;

export const template: (props: any) => TemplateResult = innerTemplate;
