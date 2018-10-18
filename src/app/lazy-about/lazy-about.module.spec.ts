import { LazyAboutModule } from './lazy-about.module';

describe('LazyAboutModule', () => {
  let lazyAboutModule: LazyAboutModule;

  beforeEach(() => {
    lazyAboutModule = new LazyAboutModule();
  });

  it('should create an instance', () => {
    expect(lazyAboutModule).toBeTruthy();
  });
});
