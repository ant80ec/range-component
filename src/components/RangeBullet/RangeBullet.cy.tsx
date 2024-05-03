import RangeBullet from './RangeBullet';

describe('<RangeBullet />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RangeBullet draggingBullet={'left'} />);
  });
});
