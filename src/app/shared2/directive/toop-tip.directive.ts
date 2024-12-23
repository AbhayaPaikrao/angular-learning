import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToopTip]',
})
export class ToopTipDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @Input('appTooltip') tooltipContent: string = '';
  @Input() tooltipContent1: string = '';

  createToolTip() {
    const tooltip = this.renderer.createElement('div');
    const text = this.renderer.createText(this.tooltipContent);
    this.renderer.appendChild(tooltip, text);
    this.renderer.addClass(tooltip, 'toolTipMy');
    this.renderer.setStyle(tooltip, 'position', 'absolute');
    return tooltip;
  }

  @HostListener('mouseover')
  onMouseOver() {
    const toolTipMy = this.createToolTip();
    this.renderer.appendChild(this.elRef.nativeElement, toolTipMy);
    // console.log('on MouseOver');
  }
  @HostListener('mouseout')
  onMouseOut() {
    setTimeout(() => {
      const tooltip = this.elRef.nativeElement.querySelector('.toolTipMy');
      this.renderer.removeChild(this.elRef.nativeElement, tooltip);
    }, 300);

    //console.log('on MouseOut');
  }
}
