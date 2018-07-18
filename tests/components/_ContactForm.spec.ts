import { shallow } from 'vue-test-utils';
import ContactForm from '../../src/components/ContactForm.vue';

describe('Card component', () => {
    let cmp;

    beforeEach(() => {
        cmp = shallow(ContactForm, {
            propsData: {
                person: {
                    id: 2,
                    first_name: 'Alex',
                    last_name: 'Jones'
                }
            }
        });
    });

    it('has the expected html structure', () => {
        expect(cmp.element).toMatchSnapshot();
    });
});
