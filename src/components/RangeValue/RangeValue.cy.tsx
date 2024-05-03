import RangeValue from './RangeValue';

describe('<RangeValue />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <RangeValue
        min={1}
        max={100}
        originalMin={1}
        originalMax={100}
        rangeValue={50}
      />
    );
  });
});
