import {Component,AfterViewInit,OnDestroy,ViewChild,ElementRef,Renderer} from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';

declare var jQuery: any;

@Component({
    selector: 'app-root',
    templateUrl: './main.component.html',
    animations: [
        trigger('submenu', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class MainComponent implements AfterViewInit,OnDestroy {

    public menuInactiveDesktop: boolean;
    
    public menuActiveMobile: boolean;
    
    public profileActive: boolean;
    
    public topMenuActive: boolean;
    
    public topMenuLeaving: boolean;
    
    public scroller: HTMLDivElement;
    
    documentClickListener: Function;
    
    menuClick: boolean;
    
    topMenuButtonClick: boolean;
    
    constructor(public renderer: Renderer) {}

    ngAfterViewInit() {
        //hides the overlay menu and top menu if outside is clicked
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', (event) => {
            if(!this.isDesktop()) {
                if(!this.menuClick) {
                    this.menuActiveMobile = false;
                }
                
                if(!this.topMenuButtonClick) {
                    this.hideTopMenu();
                }
            }
            
            this.menuClick = false;
            this.topMenuButtonClick = false;
        });
    }    
    
    toggleMenu(event: Event) {
        this.menuClick = true;
        if(this.isDesktop()) {
            this.menuInactiveDesktop = !this.menuInactiveDesktop;
            if(this.menuInactiveDesktop) {
                this.menuActiveMobile = false;
            }
        }
        else {
            this.menuActiveMobile = !this.menuActiveMobile;
            if(this.menuActiveMobile) {
                this.menuInactiveDesktop = false;
            }
        }
        
        if(this.topMenuActive) {
            this.hideTopMenu();
        }
        
        event.preventDefault();
    }
    
    toggleProfile(event: Event) {
        this.profileActive = !this.profileActive;
        event.preventDefault();
    }
    
    toggleTopMenu(event: Event) {
        this.topMenuButtonClick = true;
        this.menuActiveMobile = false;
        
        if(this.topMenuActive) {
            this.hideTopMenu();
        }
        else {
            this.topMenuActive = true;
        }
        
        event.preventDefault();
    }
    
    hideTopMenu() {
        this.topMenuLeaving = true;
        setTimeout(() => {
            this.topMenuActive = false;
            this.topMenuLeaving = false;
        }, 500);
    }
        
    onMenuClick() {
        this.menuClick = true;
        
        setTimeout(() => {
            jQuery(this.scroller).nanoScroller();
        }, 600);
    }
    
    isDesktop() {
        return window.innerWidth > 1024;
    }
    
    onSearchClick() {
        this.topMenuButtonClick = true;
    }
    
    ngOnDestroy() {
        if(this.documentClickListener) {
            this.documentClickListener();
        }
    }
}
