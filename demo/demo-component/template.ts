import {html} from 'lit-element';
import "src/uxl-ui-skeleton";

export const template = () => html`
<h3>List vertical uxl-ui-skeleton demo</h3>
<uxl-ui-skeleton id="sk-1" number="4" type="list" classifier="vertical"></uxl-ui-skeleton>
<h3>List horizontal uxl-ui-skeleton demo</h3>
<uxl-ui-skeleton id="sk-2" number="8" type="list" animation="disabled" classifier="horizontal"></uxl-ui-skeleton>
<h3>Single vertical uxl-ui-skeleton demo</h3>
<uxl-ui-skeleton type="single" animation="disabled" classifier="vertical"></uxl-ui-skeleton>
<h3>Single horizontal uxl-ui-skeleton demo</h3>
<uxl-ui-skeleton type="single" animation="disabled" classifier="horizontal"></uxl-ui-skeleton>
`;
