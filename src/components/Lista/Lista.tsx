import React from "react";
import { useHistory } from 'react-router-dom' 
import { Grid, GridItem, InputGroup, InputRightElement, Input, Button, ButtonProps } from '@chakra-ui/react'
import Menu from '../Menu/menu'
import Lista from '../Table/Lista'
import { FiSearch } from 'react-icons/fi'
import { AiOutlinePlus, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { MdTune } from 'react-icons/md'
import img from '../../images/Car_Picture.png'

import {
    Paginator,
    Container,
    Previous,
    Next,
    PageGroup,
    usePaginator
  } from "chakra-paginator";



export default function List(){
    const history = useHistory();

    const pagesQuantity = 5;
    const { currentPage, setCurrentPage } = usePaginator({
        initialState: { currentPage: 1 }
    });

    
    // styles
    const baseStyles: ButtonProps = {
        w: 7,
        fontSize: "sm"
    };

    const normalStyles: ButtonProps = {
        ...baseStyles,
        _hover: {
        bg: "blue.300"
        },
        bg: "none"
    };

    const activeStyles: ButtonProps = {
        ...baseStyles,
        _hover: {
        bg: "blue.300"
        },
        bg: "var(--chakra-colors-primary)",
        color: "white"
    };

    return(
        <Grid 
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(30, 1fr)'
            gap={0} 
            marginLeft={'29px'} 
            marginRight={'20px'}>
            <GridItem w='100%' h='auto' colSpan={6} float={'left'} className="menu">
                <Menu/>
            </GridItem>
            
            <GridItem w='100%' h='auto' padding={'20px'} colSpan={24} float={'left'} bg={'#F9F9F9'} className="leftContent">
                <Grid 
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={0} >
                    <GridItem w='100%' h='auto' colSpan={1} >
                        <h4 style={{width: 'auto', marginRight:'10px',fontSize: '24px', fontWeight: 600, fontStyle: 'semi-bold', float:'left'}}>Veículos</h4>
                        
                        <InputGroup float={'left'} w='50%'>
                            <Input placeholder='Buscar...' type="text"/>
                            
                            <InputRightElement
                            pointerEvents='none'
                            children={<FiSearch color='gray' />}
                            />
                        </InputGroup>
                    </GridItem>
                    <GridItem w='100%' h='auto' colSpan={1}>
                        <Button colorScheme='blue' float={'right'} marginLeft={'10px'}><AiOutlinePlus size={24} style={{marginRight:'10px'}}/>Adicionar</Button>
                        <Button colorScheme='blue' float={'right'} variant='outline'><MdTune size={24} style={{marginRight:'10px'}} />Filtrar</Button>
                    </GridItem>
                </Grid>
                <Lista margin={'20px 0 '} heads={[
                    'Dados do veículo', 'REF', 'Placa', 'Data'
                ]} items={[
                    {'goto': () => history.push('/detalhes'), 'img': img, 'title':'corsa sedan', 'model': '1.6 flex', 'fab':'2013/2014', 'gas':'gasolina/etanol', 'km': '70.000', 'price': 36.800, 'ref':'ABC1234', 'placa':'FHS0C99','data':'23/05/2022'},
                    {'goto': () => history.push('/detalhes'), 'img': img, 'title':'corsa sedan', 'model': '1.6 flex', 'fab':'2013/2014', 'gas':'gasolina/etanol', 'km': '70.000', 'price': 36.800, 'ref':'ABC1234', 'placa':'FHS0C99','data':'23/05/2022'}
                ]}/>
                
        <Paginator
            pagesQuantity={pagesQuantity}
            currentPage={currentPage}
            onPageChange={setCurrentPage}   
            normalStyles={normalStyles}
            activeStyles={activeStyles}
            >
            <Container align="center" w="full" p={4} className="paginator">
                <Previous style={{marginLeft: '10px', float:'left', background: 'none', padding: 0}}>
                    <AiOutlineLeft size={20} fontWeight={1000} color={'var(--chakra-colors-primary)'}/>
                </Previous>
                <PageGroup isInline align="center" />
                <Next style={{marginLeft: '10px', float:'left', background: 'none', padding: 0}}>
                    <AiOutlineRight size={20} fontWeight={1000} color={'var(--chakra-colors-primary)'}/>
                </Next>
            </Container>
        </Paginator>
            </GridItem>
        </Grid>
    )
}