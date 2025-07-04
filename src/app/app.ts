import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { Footer } from './shared/footer/footer';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Nav, Footer],
    template: `
        <app-nav></app-nav>
        <main class="page-content">
            <div class="w-full justify-center">
                <div class="hover:text-accent">
                    <h1 class="text-primary text-4xl">Angular TP</h1>
                    <br />
                    <br />
                    <p class="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolores eius amet culpa magni ipsam ad laudantium aut ipsum deleniti,
                        eos quam! Sed, expedita. Reiciendis numquam illum nostrum, aspernatur doloremque placeat molestias deserunt eveniet et quod doloribus
                        iusto libero aliquid accusantium nisi possimus itaque dolorem tempore maiores molestiae consequuntur. Ducimus aliquam eveniet alias,
                        sequi dolorem voluptatum autem unde minus, eius, aspernatur molestiae? Nulla,
                    </p>
                </div>
            </div>
            <app-footer />
            <router-outlet></router-outlet>
        </main>
    `,
    styles: ``,
})
export class App {
    protected title = 'simple-template';
}
