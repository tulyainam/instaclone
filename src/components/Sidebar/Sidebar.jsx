import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import {Avatar} from '../../components/ui/avatar';
import {Tooltip} from '../../components/ui/tooltip'
import { Box, Flex, Link } from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants';
import { BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: 'Home',
            link: "/"
        },
        {
            icon: <SearchLogo size={25} />,
            text: 'Search',
        },
        {
            icon: <NotificationsLogo size={25} />,
            text: 'Notifications',
        },
        {
            icon: <CreatePostLogo size={25} />,
            text: 'Create',
        },
        {
            icon: <Avatar size={"sm"} name="Tulya Özer" src="/profilepic.png" /> ,
            text: 'Profile',
            link: "/asap"
        },
    ]
    return (
        <Box height={"100vh"} bg={"gray.950"} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} py={8} position={"sticky"} top={0} left={0} px={{base: 2, md: 4}} >
            <Flex direction={'column'} gap={10} w={'full'} height={'full'} >
                <Link top={"/"} as={RouterLink} pl={2} display={{base: "none", md: "block"}} cursor={'pointer'} >
                    <InstagramLogo/>
                </Link>
                <Link  top={"/"} as={RouterLink} pl={2} display={{base: "block", md: "none"}} cursor={'pointer'}  >
                    <InstagramMobileLogo/>
                </Link>
            
                <Flex direction={'column'} gap={5} cursor={'pointer'}>
                    {sidebarItems.map((item, index) => (
                        <Tooltip showArrow content={item.text}  positioning={{ placement: "right" }} key={index} ml={1} openDelay={500} display={{base:"block", md:"none"}}>
                            <Link 
                                display={'flex'}
                                to={item.link || "#"}
                                as={RouterLink}
                                alignItems={'center'}
                                gap={4}
                                _hover={{bg: "whiteAlpha.400"}}
                                borderRadius={6}
                                p={2}
                                w={{base: 10, md: 'full'}}
                                justifyContent={{base: 'center', md: 'flex-start'}}
                            >
                                {item.icon}
                                <Box display={{base: "none", md: "block"}}>
                                    {item.text}
                                </Box>
                            </Link>
                        </Tooltip>
                    ))}
                </Flex>
                <Tooltip showArrow content={"Log out"}  positioning={{ placement: "right" }} ml={1} openDelay={500} display={{base:"block", md:"none"}}>
                            <Link 
                                display={'flex'}
                                to={"/auth"}
                                as={RouterLink}
                                alignItems={'center'}
                                gap={4}
                                _hover={{bg: "whiteAlpha.400"}}
                                borderRadius={6}
                                p={2}
                                w={{base: 10, md: 'full'}}
                                justifyContent={{base: 'center', md: 'flex-start'}}
                                mt={"auto"}
                            >
                                <BiLogOut size={25}/>
                                <Box display={{base: "none", md: "block"}}>
                                    Logout
                                </Box>
                            </Link>
                        </Tooltip>
            </Flex>
        </Box>
    )
}

export default Sidebar