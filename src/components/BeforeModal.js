// import _ from 'lodash'
import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import photo from '../images/andrea.JPG'

const ModalExampleScrollingContentForBefore = () => (
  <Modal trigger={<Button style={{backgroundColor: 'rgb(49,61,85)', color: 'white', margin: '2em 1em'}}>Before Her</Button>}>
    <Modal.Header>Before Her</Modal.Header>
    <Modal.Content image scrolling>
    <Image size='small' src={photo} alt="avatar" wrapped />

      <Modal.Description>
        <Header>Story</Header>
        <div>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
          </p>
          <p>
            Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
            orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
            eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
            Interdum praesent ut penatibus fames eros ad consectetur sed.
          </p>
        </div>

        {/* {_.times(8, (i) => (
          <Image
            key={i}
            src='/images/wireframe/paragraph.png'
            style={{ paddingBottom: 5 }}
          />
        ))} */}
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      {/* <Button primary>
        Proceed <Icon name='chevron right' />
      </Button> */}
    </Modal.Actions>
  </Modal>
)

export default ModalExampleScrollingContentForBefore;

