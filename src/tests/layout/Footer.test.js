import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../layout/footer/Footer';

test('should test Footer component', () => {
    const component = renderer.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});