import { SSNMaskPipe } from './ssnmask.pipe';

describe('SSNMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new SSNMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
