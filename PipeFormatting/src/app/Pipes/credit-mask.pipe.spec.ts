import { CreditMaskPipe } from './credit-mask.pipe';

describe('CreditMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
