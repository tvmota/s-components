import { Component, h, Prop } from '@stencil/core';
import { CssClassMap } from '../../utils/intefaces';

@Component({
  tag: 's-button',
  styleUrl: './s-button.css',
  shadow: true,
})
export class SButton {
  @Prop({ reflectToAttr: true })
  disabled: boolean;

  @Prop() 
  type: 'button' | 'reset' | 'submit' = 'button';

  @Prop()
  color: 'primary' | 'primary-outline' | 'secondary' | 'light' | 'danger' | 'warn' = 'primary';

  @Prop()
  shape: 'square' | 'round' = 'square';

  @Prop()
  size: 'sx' | 'sm' | 'md' | 'lg' | 'xl' = 'md';


  private getCssClassMap(): CssClassMap {
    return {
      ['s_button']: true,
      [this.color]: true,
      [this.shape]: true,
      [this.size]: true,
    };
  }

  render() {
    const classMap = this.getCssClassMap();

    return (
      <button
        class={classMap}
        disabled={this.disabled}
        type={this.type}>
          <slot/>
      </button>
    );
  }
}

