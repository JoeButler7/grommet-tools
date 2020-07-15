import React from 'react';
import {
  Grommet,
  Header,
  Main,
  Footer,
  Anchor,
  TextInput,
  Text,
  Box,
  Paragraph,
  Grid,
  Card,
  Button,
  Image,
  Form,
  FormField,
  Heading
} from 'grommet'
import {
  Grommet as GrommetIcon,
  Search,
  ClearOption,
  Configure,
  Camera,
  CloudUpload,
  BarChart,
  FormNextLink,
  Selection,
  Slack,
  Github
} from 'grommet-icons'

import GridCard from './Components/GridCard'
import SmallCard from './Components/SmallCard'
import { grommetToolsTheme } from './theme.js';


function App() {


  return (
    <Grommet className="App" theme={grommetToolsTheme}>
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

      <Main>
        <Box
          margin={{
            top:'xlarge',
            left:'xlarge',
            right:'xlarge',
            bottom:'0px',
          }}
          width='medium'
          >
            <Heading
              margin='0px'
              size='100px'>
              Grommet
              Tools
            </Heading>
          </Box>
        <Box height='5px' background="linear-gradient(111.57deg, #FFF06C -6.47%, #FFCF50 22.58%, #FFA650 49.44%, #FFD8D8 77.04%, #49E2FF 106.08%, #75FFCE 132.95%)">
        </Box>
        <Box direction='row-responsive' justify='between'>
          <Box
            margin={{
              top:'small',
              left:'xlarge',
              right:'xlarge',
              bottom:'380px',
            }}
            width='medium'
            >
            <Text size='xlarge'>
              A suite of tools to create even more
              with&nbsp;
            <Text size='xlarge' color='brand'>
              Grommet&nbsp;
            </Text>
              components without
              the stress of handling code.
            </Text>
          </Box>
          <Box
            direction='row'
            margin={{
              top:'small',
              left:'xlarge',
              right:'xlarge',
            }}
            >
            <Box>
              <Card>
                <Box margin='small'>
                  <ClearOption color='DesignerYellow' size='60px'/>
                </Box>
              </Card>
            </Box>
            <Box>
              <Card>
                <Box margin='small'>
                  <CloudUpload color='PublisherPink' size='60px'/>
                </Box>
              </Card>
            </Box>
            <Box>
              <Card>
                <Box margin='small'>
                  <Configure color='ThemerOrange' size='60px'/>
                </Box>
              </Card>
            </Box>
            <Box>
              <Card>
                <Box margin='small'>
                  <BarChart color='TabularGreen' size='60px'/>
                </Box>
              </Card>
            </Box>
            <Box>
              <Card>
                <Box margin='small'>
                  <Camera color='ImagerOrange' size='60px'/>
                </Box>
              </Card>
            </Box>
            <Box>
            <Card>
              <Box margin='small'>
                <Selection color='SlidesBlue' size='60px'/>
              </Box>
            </Card>
          </Box>
          </Box>
        </Box>
        <Box
          margin={{
            top:'small',
            left:'xlarge',
            right:'xlarge',
            bottom:'380px',
          }}
          width='medium'>
          <Text size='xlarge'>
            A suite of tools to create even more
            with&nbsp;
          <Text size='xlarge' color='brand'>
            Grommet&nbsp;
          </Text>
            components without
            the stress of handling code.
          </Text>
        </Box>
        <Box>
          <Box
            background="linear-gradient(111.57deg,
              #FFF06C -6.47%, #FFCF50 22.58%,
              #FFA650 49.44%, #FFD8D8 77.04%,
              #49E2FF 106.08%, #75FFCE 132.95%)"
              >
            <Heading
              margin={{
                horizontal:'xlarge',
                top: 'large',
                bottom:'small'}}
              >
              Grommet Tool Suite
            </Heading>
            <Grid
              columns={{count: 3, size: "small"}}
              gap="medium"
              rows='auto'
              margin={{horizontal:'xlarge', vertical: 'small'}}
            >
            <GridCard
              icon={<ClearOption color='DesignerYellow' size='xlarge'/>}
              heading='Designer'
              buttonColor='DesignerYellow'
              text='Grommet web-based WSIWG component editor. Use
              pubilshed themes by entering the URL in the context
              of editing the design details.'
              />
            <GridCard
              icon={<Configure size='xlarge' color='ThemerOrange'/>}
              heading='Themer'
              buttonColor={{color: 'brand'}}
              text='Grommet web-based WSIWG component editor. Use
              pubilshed themes by entering the URL in the context
              of editing the design details.'
              />
            <GridCard
              icon={<Camera size='xlarge'color='ImagerOrange'/>}
              heading='Images'
              buttonColor='ImagerOrange'
              text='  Super simple image hosting for your Grommet-based
                projects. Works great with Publisher, Slides, and
                Designer.'
              />
            <GridCard
              icon={<CloudUpload size='xlarge'color='PublisherPink'/>}
              heading='Publisher'
              buttonColor='PublisherPink'
              text='Think one part lightweight CMS,
              one part Markdown, and some special sauce
              from Grommet to make it all come together.'
              />
            <GridCard
              icon={<Configure size='xlarge' color='SlidesBlue'/>}
              heading='Slides'
              buttonColor='SlidesBlue'
              text='Similar to the Grommet Publisher and using
              Markdown and some shortcuts to make presenting easy,
              Slides makes presentations a breeze.'
              />
            <GridCard
              icon={<BarChart size='xlarge' color='TabularGreen'/>}
              heading='Tabular'
              buttonColor='TabularGreen'
              text='  If you need a table and have an API or data source,
                choose your columns and create content that is integrated
                with Grommet and the Grommet Designer.'
              />
          </Grid>
        </Box>
        </Box>
        <Box
          margin={{
            top:'xlarge',
            left:'xlarge',
            right:'xlarge',
            bottom:'0px',
          }}
          direction='row'
          >
          <Box width='medium' margin={{bottom: 'xlarge'}}>
            <Heading>
              What are grommet Tools?
            </Heading>
            <Paragraph size='xlarge' margin={{top: 'small'}}>
              Grommet’s “No-Code” Tools assist your development
              experience by offering easy access to Grommet components
              with powerful branding capabilities.
            </Paragraph>
            <Box
              elevation='large'
              round='small'
              direction='row'
              width='medium'
              pad='medium'
              >
              <Paragraph
                margin={{
                  top:'medium',
                  left:'small',
                  right: 'medium'
                }}
                size='large'
                >
                Read about the power of Grommet and No Code Tools
              </Paragraph>
              <Anchor
                href="#"
                icon={<FormNextLink color='brand' size='large'/>}
                alignSelf='end'
                margin='xsmall'/>

            </Box>
          </Box>
          <Image src='RockinGremlin.svg' fit='fill'/>
        </Box>
        <Box background="linear-gradient(111.57deg,
          #FFF06C -6.47%, #FFCF50 22.58%,
          #FFA650 49.44%, #FFD8D8 77.04%,
          #49E2FF 106.08%, #75FFCE 132.95%)"
          height='20px'
          margin='0px'></Box>

          <Box
                background='noCodeBackground'
                direction='column'
                margin='0px'
                justify='center'
                height= '527px'
                >
                <Text margin={{
                  }}
                  size='xxlarge'
                  level='2'
                  alignSelf='center'
                  weight={6}
                  color='darkGrey'
                  >
                  Explore and Join the
                </Text>
                <Heading
                  alignSelf='center'
                  margin='xsmall'
                  size='xlarge'
                  color='darkGrey'
                  >
                  #nocodemovement.
                </Heading>
                <Box
                  justify='center'
                  align='center'
                  direction='row'
                  gap='large'
                  margin={{
                    'top': 'medium',
                    'bottom': 'medium'
                  }}
                  >
                  <SmallCard
                    text='Designer'
                    textColor='darkGrey'
                    icon={<ClearOption size='large' color='DesignerYellow'/>}/>
                  <SmallCard
                    text='Themer'
                    icon={<Configure size='large' color='ThemerOrange'/>}/>
                  <SmallCard
                    text='Images'
                    icon={<Camera size='large' color='ImagerOrange'/>}/>
                  <SmallCard
                    text='Publisher'
                    icon={<CloudUpload size='large' color='PublisherPink'/>}/>
                  <SmallCard
                    text='Slides'
                    icon={<Configure size='large' color='SlidesBlue'/>}/>
                  <SmallCard
                    text='Tabular'
                    icon={<BarChart size='large' color='TabularGreen'/>}/>
                </Box>
                <Box
                  justify='center'
                  direction='row'
                  gap='large'
                  >
                  <Anchor color='darkGrey' href="#" icon={<Slack/>} label="Grommet on Slack"/>
                  <Anchor color='darkGrey' href="#" icon={<Github/>} label="Share feedback on Github" />
                </Box>
              </Box>




      </Main>
      <Footer>
        Footer
      </Footer>
    </Grommet>
  );
}
export default App;
