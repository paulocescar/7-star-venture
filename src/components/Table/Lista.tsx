import React, { useState } from 'react' 
import {
    Grid,
    GridItem,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Image
  } from '@chakra-ui/react'
type props = {
    heads: Array<String>;
    items: Array<any>;
    margin?: any;
}


const Lista:React.FC<props> = ({margin, heads, items}) => (
    
    <Table style={{margin: margin, backgroundColor:'#FFF'}} 
    fontSize={'12px'}
    borderWidth={'1px'}
    borderColor={'#EFEFEF'}
    borderRadius={'10px'}>
        <Thead >
            {heads.map((h) => (
                <Th style={{color: '#A3A3A3'}}>{h}</Th>
            ))}
        </Thead>
        <Tbody>
            {items.map((i) => (
                <Tr key={i.title} onClick={i.goto} style={{cursor: 'pointer'}} _hover={{bg:'var(--chakra-colors-gray-100)'}}>
                    <Td>
                    <Grid 
                        h='72px'
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(5, 1fr)'
                        gap={0}
                        fontSize={'x-small'}>
                            
                        <GridItem rowSpan={4} colSpan={1} className="img">
                            <Image src={i.img}/>
                        </GridItem>
                        <GridItem colSpan={4} marginTop={'10px'} className="listContent">
                            <p className="description" style={{fontWeight: 600, textTransform: 'uppercase'}}>{i.title}</p>
                            <p className="description" >{i.model}</p>
                            <p className="description" >{i.fab} - {i.gas}</p>
                            <p className="description" > {i.km} - <span className="priceDesc">R$ {i.price.toFixed(3)}</span></p>
                        </GridItem>
                    </Grid>    
                    </Td> 
                    <Td>{i.ref}</Td> 
                    <Td>{i.placa}</Td> 
                    <Td>{i.data}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
)

export default Lista