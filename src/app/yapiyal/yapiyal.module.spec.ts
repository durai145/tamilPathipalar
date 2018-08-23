import { YapiyalModule } from './yapiyal.module';

describe('YapiyalModule', () => {
  let yapiyalModule: YapiyalModule;

  beforeEach(() => {
    yapiyalModule = new YapiyalModule();
  });

  it('should create an instance', () => {
    expect(yapiyalModule).toBeTruthy();
  });
});
