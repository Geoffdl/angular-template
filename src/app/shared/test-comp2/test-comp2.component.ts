import { Component, input } from '@angular/core';

@Component({
    selector: 'app-test-comp2',
    imports: [],
    template: ` <p>test-comp2 works!</p> `,
    styles: ``,
})
export class TestComp2Component {
    test = input.required<string>();
}
