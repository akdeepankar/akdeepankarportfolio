import Head from 'next/head'
import { Card, Row, Button, Col, Text, Grid, Badge, Avatar, Switch, Modal, Image } from "@nextui-org/react";
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';
import { UserIcon } from '../UserIcon';
import { useState } from 'react'
import {a, flat, primary, secondary, success, warning, error, social, project, poster, intro} from '../content'
import Link from 'next/link';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div className={darkMode ? "dark" : ""} >
      <Head>
        <title>AK DEEPANKAR</title>
        <meta name="description" content="Site by AK Deepankar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-5 pt-5 pb-5 dark:bg-black' style={{ zIndex:'-1', backgroundImage:`url(${'https://nextui.org/gradient-left-dark.svg'})`, backgroundPosition: '-100px'  }}> 
        <section className='max-h-screen'>
          <nav className='flex justify-end'>
          <Switch
          onChange={() => setDarkMode(!darkMode)}
          className='z-50'
          checked={false}
          size="sm"
          shadow color ="warning"
          iconOn={<SunIcon filled />}
          iconOff={<MoonIcon filled />}
        />
          </nav>  
          <div className='flex justify-center -mt-24'>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player src={intro.introlottie}  background="transparent" speed="1"  style={{width: 500, height: 500}}  loop  autoplay ></lottie-player>
          </div>
          <div className='text-center -mt-20' >
            <h3 className='text-1xl md:text-4xl dark:text-white'>{intro.greet}</h3>
            <div className='flex justify-center '>
              <Text
              className='dark:text-white'
              color="black"
              h1
              size={30}
              weight="bold"
               >
               {intro.intro}
            </Text>
            <Text
              className='ml-3'
              h1
              size={30}
              css={{
                textGradient: "45deg, $blue600 -20%, $yellow600 50%",
              }}
              weight="bold"
               >
               {intro.name}
            </Text>
            
            </div>
            <h3 className='text-gray-800 md:text-2xl md:pt-5 max-w-xl mx-auto dark:text-white'>{intro.desc}<em>{intro.desc2}</em>  <br></br> {intro.desc3} <em>{intro.desc4}</em> {intro.desc5} <em className='bg-green-100 dark:text-black'>{intro.desc6}</em></h3>
          </div>

          

          <div className='flex justify-center pt-5 '>
          <Grid>
          <Card className='border-none' css={{
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }} >
           <Card.Body>
            <Row className='flex justify-between' >    
             {social.map(i => {
                return(
                  <Link scroll={false} href={i.link}><i.icon className='cursor-pointer text-2xl ml-3 mr-3 dark:text-white'/></Link>
                )  
                })}
           </Row>        
           </Card.Body>
          </Card>
          </Grid>
          </div>
          
    </section>



<section className='pt-5 flex justify-center md:text-2xl md:pt-5 max-w-xl mx-auto' >
              <Grid>
            <Card className='border-none' css={{
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }} >
              <Card.Header className='flex justify-between'>
                <div>
                <h1 className='text-3xl text-black-600 pt-5 font-bold -mt-4 dark:text-white '>Skills</h1>
                </div>
                <div className='-mt-2 ml-2'>
              <lottie-player src={intro.skilllottie}  background="transparent"  speed="1"  style={{width: 50, height: 50}}  loop  autoplay></lottie-player>
              </div>
              </Card.Header>
              <Card.Divider className='dark:bg-white' />
              <Card.Body css={{ py: "$10" }} >
                <div>
                <h1 className='pl-3 pb-2 dark:text-white'>Programming / Frameworks / Libraries / Tools</h1>
                <Grid.Container gap={1}>
              <div className='pl-2'>
                {flat.map(i => {
                return(
                  <Badge color="flat" variant="flat" className='p-1 dark:text-white'>
                      {i}
                    </Badge>
                )  
                })}
                {primary.map(i => {
                return(
                  <Badge color="primary" variant="flat" className='p-1'>
                      {i}
                    </Badge>
                )  
                })}
                {secondary.map(i => {
                return(
                  <Badge color="secondary" variant="flat" className='p-1'>
                      {i}
                    </Badge>
                )  
                })}
                {success.map(i => {
                return(
                  <Badge color="success" variant="flat" className='p-1'>
                      {i}
                    </Badge>
                )  
                })}
                {warning.map(i => {
                return(
                  <Badge color="warning" variant="flat" className='p-1'>
                      {i}
                    </Badge>
                )  
                })}
                {error.map(i => {
                return(
                  <Badge color="error" variant="flat" className='p-1'>
                      {i}
                    </Badge>
                )  
                })}
              </div>
            </Grid.Container>

            <h1 className='pl-3 pt-2 dark:text-white'>Design - Graphic / UI UX</h1>
            <div className='flex justify-between pl-2 pt-2'>
            {a.map(i => {
            return <Avatar
            size="md"
            src={i}
            squared
            />;
            })}
            </div>
            </div>
        </Card.Body>
        </Card>
        </Grid>
</section>

<section className='pt-2 flex justify-around md:text-2xl md:pt-5 max-w-xl mx-auto' >

            <div className=''>
            <Card className='border-none' css={{
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }} >
                <Card.Header className='flex justify-between'>
                  <div>
                  <h1 className='text-2xl text-black-600 pt-5 font-bold -mt-4 dark:text-white '>Apps</h1>
                  </div>
                  <div className='-mt-2 ml-2'>
                <lottie-player src={intro.appslottie}  background="transparent"  speed="1"  style={{width: 50, height: 50}}  loop  autoplay></lottie-player>
                </div>
                </Card.Header>
                <Card.Divider className='dark:bg-white' />
                <Card.Body css={{ py: "$10" }} >
                  <div className=''>
                    <Image width={60} className='rounded-xl' src="https://play-lh.googleusercontent.com/fH_k4XeB6HsbQJp3AuMjJ3PTDgeMX45mkNEZO4bGs6CoCgSnjmlHG0dzQwK6SVCU1Q=w240-h480-rw" alt=""></Image> 
                    <div className='flex justify-center'>
                    <h1 className='text-xs pt-1 font-semibold'>BUDDHA TUNES</h1>
                    </div> 
                    <div className='p-1'>
                    <Link scroll={false} href={'https://play.google.com/store/apps/details?id=ak.buddhatunes'}>
                                    <Image width={90} className='rounded-xl pt-2 pb-2' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Google_Play_2022_logo.svg" alt=""></Image>  
                  </Link>
                    </div>
                  </div>
          </Card.Body>
          </Card>
          <div className='pt-2 md:p-5'>
          <Image width={140} className='rounded-xl' src='pandasleeping.png' alt=''></Image>
          </div>
            </div>
            <div>
                <Card className='border-none ' css={{
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }} >
                  <Card.Header className='flex justify-between'>
                    <div>
                    <h1 className='text-2xl text-black-600 pt-5 font-bold -mt-4 dark:text-white '>Books</h1>
                    </div>
                    <div className='-mt-2 ml-2'>
                  <lottie-player src={intro.bookslottie}  background="transparent"  speed="1"  style={{width: 50, height: 50}}  loop  autoplay></lottie-player>
                  </div>
                  </Card.Header>
                  <Card.Divider className='dark:bg-white' />
                  <Card.Body css={{ py: "$5" }} >
                    <Link scroll={false} href="https://www.amazon.in/Palace-Ghost-AK-Deepankar-ebook/dp/B08818WX6L">

                      <div className='justify-center'>
                      <Image width={100} className='rounded-xl' src="https://m.media-amazon.com/images/I/41RIrW0+GWL.jpg" alt=""></Image>  
                      <Image width={100} className='rounded-xl p-1' src="https://m.media-amazon.com/images/I/21EzREA+0yL.svg" alt=""></Image>  
                      <h1 className='pl-2 dark:text-white text-sm '>or Ping For Free Copy.</h1>
                      </div>

                    </Link>
                    
            </Card.Body>
            </Card>
            </div>

  
            
      
 



</section>


<section className='mt-5 flex justify-center md:text-2xl md:pt-5 max-w-xl mx-auto' style={{ zIndex:'1', backgroundImage:`url(${'https://nextui.org/gradient-right-dark.svg'})`, backgroundPosition: 'center', backgroundSize:'500px'  }}  >
<Grid>
        <Card className='border-none' css={{
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }} >
        <Card.Header className='flex justify-between'>
                <div>
                <h1 className='text-3xl text-black-600 pt-5 font-bold -mt-10 dark:text-white'>Projects</h1>
                </div>
                <div className='-mt-4 ml-2'>
              <lottie-player src={intro.projectlottie}  background="transparent"  speed="1"  style={{width: 70, height: 80}}  loop  autoplay></lottie-player>
              </div>
              </Card.Header>
          <Card.Divider className='dark:bg-white -mt-6' />
          <Card.Body css={{ py: "$10" }}>
            <div>

            {project.map(i => {
            return <Card css={{ w: "100%", h: "200px" }} className='mb-2'>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                     {i.head1}
                </Text>
                <Text h3 color="white">
                    {i.head2}
                </Text>
              </Col>
            </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                    src={i.background}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                    />
                </Card.Body>
          <Card.Footer
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: "#ffffff66",
                      borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                      bottom: 0,
                      zIndex: 1,
                    }}
                    >
            <Row>
                <Col>
                    <Text color="#000" size={12}>
                      {i.foot1}
                    </Text>
                    <Text color="#000" size={12}>
                      {i.foot2}
                    </Text> 
                </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="white">
                    <Text
                      css={{ color: "black" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      {i.techstack}
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
            })}

            </div>
          </Card.Body>
        </Card>
      </Grid>


</section>



<section className='mt-5 mb-5 md:text-2xl md:pt-5 max-w-xl mx-auto'>

{poster.map(i => {
            return <Card className=' border-none h-40 mb-2'>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text className='bg-black' size={16} weight="bold" transform="uppercase" color="#ffffff">
                  {i.head1}
                </Text>
                <Text className='bg-black' h4 color="white">
                  {i.head2}
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src={i.background}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Card image background"
            />
          </Card>
            })}

</section>
</main>
</div>
  )
}
