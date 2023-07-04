import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class dropDownDirective {
    private isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    this.toggleDropdown();
  }

  

  private toggleDropdown() {
    if (this.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  private openDropdown() {
    this.renderer.addClass(this.elementRef.nativeElement, 'open');
    this.isOpen = true;
  }

  private closeDropdown() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    this.isOpen = false;
  }
    
}