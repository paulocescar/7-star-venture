import React from "react";
import './styles.css'
import { Grid, GridItem, Button } from '@chakra-ui/react'
import { MdOutlineDashboard } from 'react-icons/md'
import { VscTag } from 'react-icons/vsc'
import { AiOutlineCalendar, AiOutlineBank } from 'react-icons/ai'
import { BiCar, BiRocket } from 'react-icons/bi'
import { BsPerson, BsGraphUp } from 'react-icons/bs'
import { CgPushLeft, CgPushRight } from 'react-icons/cg'

var open = false;
function toggleMenu(){
    open = !open
    if(open){
        $('.menu').attr('style','grid-column: span 1/span 1!important;')
        $('.menu span').attr('style','display: none;')
        $('#iconLeft').attr('style','display: none;')
        $('#iconRight').attr('style','display: block;')
        $('.leftContent').attr('style','grid-column: span 29/span 29!important;')
    }else{
        $('.menu').attr('style','grid-column: span 6/span 6!important;')
        $('.menu span').attr('style','display: block;')
        $('#iconLeft').attr('style','display: block;')
        $('#iconRight').attr('style','display: none;')
        $('.leftContent').attr('style','grid-column: span 24/span 24!important;')

    }

}

export default function Menu(){
    
    return (
        <Grid
            h='auto'
            templateRows='repeat(10, 1fr)'
            templateColumns='repeat(1, 1fr)'
            gap={2}
            textAlign={'left'}
            marginTop={5}
            marginRight={5}
            >
            <GridItem colSpan={1} className="griditem" _hover={{bg:'primary', color:'white'}}>
                <MdOutlineDashboard size={24} className={'iconsStyle'}/>
                <span className={'iconText'}>Resumo</span>
            </GridItem>
            <GridItem colSpan={1} className="griditem"  _hover={{bg:'primary', color:'white'}}>
                <VscTag size={24} className={'iconsStyle'}/>
                <span className={'iconText'}>Oportunidades</span>
            </GridItem>
            <GridItem colSpan={1} className="griditem" _hover={{bg:'primary', color:'white'}}>
                <AiOutlineCalendar size={24} className={'iconsStyle'}/>
                <span className={'iconText'}>Agenda</span>
            </GridItem>
            <GridItem colSpan={1} className="griditem active" _hover={{bg:'primary', color:'white'}}>
                <BiCar size={24} className={'iconsStyle'}/>
                <span className={'iconText'}>Veículos</span>
            </GridItem>
            <GridItem colSpan={1} className="griditem" _hover={{bg:'primary', color:'white'}}>
                <BiRocket size={24} className={'iconsStyle'}/>
                <span className={'iconText'}>Publicação</span>
            </GridItem>
            <GridItem colSpan={1} className="griditem" _hover={{bg:'primary', color:'white'}}>
                <BsPerson size={24} className={'iconsStyle'} style={{borderWidth: '0.12rem', borderRadius: '20px', borderColor: '#444'}}/>
                <span className={'iconText'}>Contatos</span>
            </GridItem>
            <GridItem colSpan={1} className="griditem" _hover={{bg:'primary', color:'white'}}>
                <BsGraphUp size={24} className={'iconsStyle'}/>
                <span className={'iconText'}>Analytics</span>
            </GridItem>
            <GridItem colSpan={1} className="griditem" _hover={{bg:'primary', color:'white'}}>
                <AiOutlineBank size={24} className="iconsStyle"/>
                <span className="iconText">Financiamento</span>
            </GridItem>

            <div style={{width: '100%'}}>
                <div onClick={() => toggleMenu()}>
                    <CgPushLeft size={24} className="iconCollapse" id="iconLeft"/><CgPushRight size={24} className="iconCollapse" style={{display: 'none'}} id="iconRight"/>
                </div>
            </div>
        </Grid>
    )
}
