import React from "react";
import { Grid, GridItem, Select } from '@chakra-ui/react'
import Logo from '../../images/Logo.png';

import { RiHome2Line } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'

import "@fontsource/inter"

export default function Navbar(){
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={6} marginLeft={'29px'} marginTop={'20px'}>
            <GridItem w='100%' h='60px' display={'flex'} justifyContent={'flex-start'}>
                <img src={Logo} alt="logo" style={{width: 111, height: 32}} />

                <RiHome2Line size={18} color={'#0065FF'} style={{marginTop: 9, marginLeft: 20, marginRight: 0, borderWidth: '2px', borderColor: '#0065FF', borderRadius: 20, padding: 2}}/>
                <Select marginBottom={'26px'} p={0} h={'32px'} w={'185px'} borderColor={'rgba(0,0,0,0)'} fontWeight={600} fontSize={'12px'} fontFamily={'inter, open-sans'}>
                    <option value='option1'>Dryve - Ribeirão Preto</option>
                </Select>
            </GridItem>
            <GridItem w='100%' h='60px'>

            </GridItem> 
            <GridItem w='100%' h='60px' display={'flex'} justifyContent={'flex-end'}>
                <IoMdNotificationsOutline size={32}/>
                <AiOutlineSetting size={32}  style={{marginLeft: 20}}/>
                <BsPersonFill size={32} color={'#5E97F6'} style={{marginLeft: 20, marginRight: 20, borderWidth: '2px', padding: 2, outline: '1px solid #0065FF', borderRadius: 20, borderColor: '#fff', background: '#C6DAFC'}}/>
            </GridItem>
        </Grid>
    )
}