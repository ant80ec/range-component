import RangeBar from './RangeBar';

describe('<RangeBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RangeBar min={1} max={100} />);
  });
});
