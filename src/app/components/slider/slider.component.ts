import {Component, ElementRef, HostListener, Input, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SliderComponent,
      multi: true,
    },
  ],
})
export class SliderComponent implements ControlValueAccessor {

  @ViewChild('inputElement', {static: true}) inputElement!: ElementRef

  @HostListener('input', ['$event.target.valueAsNumber'])
  onInput = (_: any) => {
  };

  @Input()
  public label: string = '';

  constructor(private renderer: Renderer2) {
  }

  onTouch: any = () => {
  };

  // This will write the value to the view if the value changes occur on the model programmatically
  writeValue(value: any) {
    const _value = value || 0;

    this.renderer.setProperty(this.inputElement.nativeElement, 'value', _value)
  }

  /* When the value in the UI is changed, this method will invoke a callback function */
  registerOnChange(fn: any) {

    this.onInput = (value: number) => {
      fn(value);
    };
  }

  // When the element is touched, this method will get called
  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }

}
