import React,  {Component} from 'react';
import {
  Header,
  Anchor,
  TextInput,
  Box,
  Button,
  Form,
  FormField,
} from 'grommet'
import {
  Grommet as GrommetIcon,
  Search,
} from 'grommet-icons'

export default class SiteHeader extends Component{
  render(){
    return(
      <Header height='72px'>
        <Box
          justify='start'
          direction='row'
          gap='small'
          >
          <Box margin={{'left': 'medium'}}  align='center'>
            <GrommetIcon size='36px' color="brand"/>
          </Box>
          <Anchor margin='xsmall' href="#" label="Grommet Tools"/>
        </Box>
        <Form>
          <Box
            background='rgba(0, 0, 0, 0.04)'
            direction="row"
            justify='center'
            round
            height='36px'
            >
            <FormField margin={{'bottom': '0px', 'left': '2px', 'top': '0px'}} border={false} name="search input">
              <TextInput
                margin={{'bottom': '10px', 'left': '0px', 'top': '0px'}}
                a11yTitle ="search bar"
                placeholder="Search Tools"/>
            </FormField>
            <Button type="submit">
              <Search/>
            </Button>
          </Box>
        </Form>
        <Box
          margin={{'right': 'large'}}
          justify='end'
          direction='row'
          gap='medium'
          >
          <Anchor href="#" label="Grommet"/>
          <Anchor href="#" label="Feedback" />
        </Box>
      </Header>
    )
  }
}
