import React from "react";
import { useHistory } from 'react-router-dom' 
import { Grid, GridItem, Stack, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Select, List, FormControl, FormErrorMessage, FormHelperText, FormLabel,
    Tag,
    TagLabel,
    Radio, RadioGroup,
    Image,
    Button, } from '@chakra-ui/react'

import { AiOutlinePlus, AiOutlineLeft, AiOutlineClose } from 'react-icons/ai'

import Menu from '../Menu/menu'
import veiculo from '../../images/veiculo.png'
import c8 from '../../images/Rectangle 8.png'
import c9 from '../../images/Rectangle 9.png'
import c10 from '../../images/Rectangle 10.png'
import c11 from '../../images/Rectangle 11.png'
import c12 from '../../images/Rectangle 12.png'
import c13 from '../../images/Rectangle 13.png'
import c14 from '../../images/Rectangle 14.png'
import c15 from '../../images/Rectangle 15.png'
import c16 from '../../images/Rectangle 16.png'
import c17 from '../../images/Rectangle 17.png'
import c18 from '../../images/Rectangle 18.png'
import c19 from '../../images/Rectangle 19.png'
import c20 from '../../images/Rectangle 20.png'
import c21 from '../../images/Rectangle 21.png'
import c22 from '../../images/Rectangle 22.png'

function radio(){
    if($('.radio').attr('data-checked')) {
        $('.radio').attr('style','border: 1px solid var(--chakra-colors-primary)')
    } else {
        $('.radio').attr('style','border: 0px')
    }
}

let cars = [
    {'car_image': c9},
    {'car_image': c10},
    {'car_image': c11},
    {'car_image': c12},
    {'car_image': c13},
    {'car_image': c14},
    {'car_image': c15},
    {'car_image': c16},
    {'car_image': c17},
    {'car_image': c18},
    {'car_image': c19},
    {'car_image': c20},
    {'car_image': c21},
    {'car_image': c22}
]

export default function Details(){
    const [value, setValue] = React.useState('1')

    return (
        <Grid 
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(30, 1fr)'
            gap={0} 
            marginLeft={'29px'} 
            marginRight={'20px'}
            >
            <GridItem w='100%' colSpan={6} float={'left'} className="menu">
                <Menu/>
            </GridItem>
            
            <GridItem w='100%' h='260%' padding={'20px'} colSpan={24} float={'left'} bg={'#F9F9F9'} className="leftContent">
                
                <Grid 
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={0} h={'50px'} >
                    <GridItem w='100%' colSpan={2} mb={5}>
                        <AiOutlineLeft size={12} style={{float:'left', marginTop: '11px', marginRight: '20px', color: 'var(--chakra-colors-primary)'}}/>
                        <h4 style={{width: 'auto', marginRight:'10px',fontSize: '24px', fontWeight: 600, fontStyle: 'semi-bold', float:'left'}}>Editar veículo</h4>
                        
                    </GridItem>
                    
                    <GridItem w='100%' h='auto' rowSpan={1} mr={5} borderColor="#eee" bg={'white'} borderWidth="1px" borderRadius={'10px'}>   
                        
                        <span style={{fontSize:'14px', fontWeight: 600, margin: '10px'}}>Informações</span>
                        <hr/>
                        <Tabs>
                            <TabList>
                                <Tab  _selected={{ color: 'var(--chakra-colors-primary)', borderBottomWidth: '4px', borderColor: 'var(--chakra-colors-primary)' }}>Dados do veículo</Tab>
                                <Tab  _selected={{ color: 'var(--chakra-colors-primary)', borderBottomWidth: '4px', borderColor: 'var(--chakra-colors-primary)' }}>Preço Médio</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p className="subtitle" style={{ fontSize: '16px'}}>Dados do veículo</p>
                                    
                                    <RadioGroup onChange={setValue} value={value} style={{margin: '10px 0'}}>
                                        <Stack direction='row'>
                                            <Radio value='1'>0 Km</Radio>
                                            <Radio value='2' style={{marginLeft:'20px'}}>Seminovo</Radio>
                                        </Stack>
                                    </RadioGroup>
                                    <Grid 
                                        templateRows='repeat(25, 1fr)'
                                        templateColumns='repeat(4, 1fr)'
                                        gap={0} h={'50px'}
                                        
                                        >
                                        
                                        <GridItem w='100%' rowSpan={1} colSpan={1}>
                                            <FormControl variant='floating' id='placa' float='left' className="formControl">
                                                <Input placeholder=' ' />
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Placa</FormLabel>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={1}>
                                            <FormControl variant='floating' id='renavam' float='left' className="formControl">
                                                <Input placeholder=' ' />
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Renavam</FormLabel>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={2}>  </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={2}> 
                                            <FormControl variant='floating' id='marca' float='left' className="formControl">
                                                <Select placeholder=' ' >
                                                    <option value="0" selected>Nissan</option>
                                                </Select>
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Marca</FormLabel>
                                            </FormControl> 
                                        </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={2}> 
                                            <FormControl variant='floating' id='modelo' float='left' className="formControl">
                                                <Select placeholder=' ' >
                                                    <option value="0" selected>March</option>
                                                </Select>
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Modelo</FormLabel>
                                            </FormControl> 
                                        </GridItem>
                                        
                                        <GridItem w='100%' rowSpan={1} colSpan={4}> 
                                            <FormControl variant='floating' id='versao' float='left' className="formControl">
                                                <Select placeholder=' ' >
                                                    <option value="0" selected>S 1.6 16V FLEX 111CV 4x2 4P</option>
                                                </Select>
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Versão</FormLabel>
                                            </FormControl> 
                                        </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={2}> 
                                            <FormControl variant='floating' id='combustivel' float='left' className="formControl">
                                                <Select placeholder=' ' >
                                                    <option value="0" selected>Etanol/Gasolina</option>
                                                    <option value="1" >Gasolina</option>
                                                    <option value="2" >Etanol</option>
                                                </Select>
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Combustível</FormLabel>
                                            </FormControl> 
                                        </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={2}> 
                                            <FormControl variant='floating' id='cambio' float='left' className="formControl">
                                                <Select placeholder=' ' >
                                                    <option value="0" selected>Manual</option>
                                                    <option value="1" >Automático</option>
                                                </Select>
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Câmbio</FormLabel>
                                            </FormControl> 
                                        </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={2}> 
                                            <FormControl variant='floating' id='quilometragem' float='left' className="formControl">
                                                <Input placeholder=' ' />
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Quilometragem</FormLabel>
                                            </FormControl> 
                                        </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={2}> 
                                            <FormControl variant='floating' id='cor' float='left' className="formControl">
                                                <Select placeholder=' ' >
                                                    <option value="0" selected>Cinza</option>
                                                    <option value="1" >Preto</option>
                                                    <option value="2" >Branco</option>
                                                </Select>
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Cor</FormLabel>
                                            </FormControl> 
                                        </GridItem>
                                        
                                        <GridItem w='100%' rowSpan={1} colSpan={4}>
                                            <p className="subtitle" style={{ fontSize: '16px', marginTop: '10px' }}>Acessórios</p>
                                        </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={4}> 
                                        
                                            <FormControl variant='floating' id='cor' float='left' className="formControl">
                                                <Select placeholder=' ' >
                                                    <option value="0" selected>Cinza</option>
                                                    <option value="1" >Preto</option>
                                                    <option value="2" >Branco</option>
                                                </Select>
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Cor</FormLabel>
                                            </FormControl> 
                                        </GridItem>
                                        
                                        <GridItem w='100%' rowSpan={1} colSpan={4}>
                                            <p className="subtitle" style={{ fontSize: '16px', marginTop: '10px' }}>Características</p>
                                        </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={4}> 
                                        
                                            
                                            <FormControl variant='floating' id='cor' float='left' className="formControl">
                                                <Select placeholder=' ' >
                                                    <option value="0" selected>Cinza</option>
                                                    <option value="1" >Preto</option>
                                                    <option value="2" >Branco</option>
                                                </Select>
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Cor</FormLabel>
                                            </FormControl> 
                                        </GridItem>

                                        <GridItem w='100%' rowSpan={1} colSpan={4}>
                                            <p className="subtitle" style={{ fontSize: '16px', marginTop: '10px' }}>Localização</p>
                                        </GridItem>

                                        <GridItem w='100%' rowSpan={1} colSpan={1}>
                                            <FormControl variant='floating' id='estado' float='left' className="formControl">
                                                <Select placeholder=' ' >
                                                    <option value="SP" selected>São Paulo</option>
                                                    <option value="MG" >Minas Gerais</option>
                                                    <option value="RJ" >Rio Janeiro</option>
                                                </Select>
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Estado</FormLabel>
                                            </FormControl>
                                        </GridItem>

                                        <GridItem w='100%' rowSpan={1} colSpan={3}> 
                                            <FormControl variant='floating' id='cor' float='left' className="formControl">
                                                <Select placeholder=' ' >
                                                    <option value="0" selected>Cinza</option>
                                                    <option value="1" >Preto</option>
                                                    <option value="2" >Branco</option>
                                                </Select>
                                                <FormLabel style={{backgroundColor: '#F9F9F9'}}>Cor</FormLabel>
                                            </FormControl> 
                                        </GridItem>

                                        <GridItem w='100%' rowSpan={1} colSpan={2}>
                                            <p className="subtitle" style={{ fontSize: '16px', marginTop: '10px' }}>Classificação</p>
                                        </GridItem>
                                        
                                        <GridItem w='100%' rowSpan={1} colSpan={2}>
                                            <p className="subtitle" style={{ fontSize: '16px', marginTop: '10px' }}>Condição geral do veículo</p>
                                        </GridItem>

                                        <GridItem w='100%' rowSpan={1} colSpan={2}>
                                            <RadioGroup name="form-classification">
                                                <Radio value="1">A</Radio>
                                                <Radio value="2">B</Radio>
                                                <Radio value="3">C</Radio>
                                                <Radio value="4">D</Radio>
                                            </RadioGroup>
                                        </GridItem>
                                        <GridItem w='100%' rowSpan={1} colSpan={2}>
                                            <RadioGroup name="form-condition">
                                                <Radio value="1">Razoável</Radio>
                                                <Radio value="2">Bom</Radio>
                                                <Radio value="3">Excelente</Radio>
                                            </RadioGroup>
                                        </GridItem>
                                        
                                        <GridItem w='100%' rowSpan={1} colSpan={4}>
                                            <p className="subtitle" style={{ fontSize: '16px', marginTop: '10px' }}>Tags</p>
                                        </GridItem>

                                        <GridItem w='100%' rowSpan={1} colSpan={4}>
                                            <Tag size={'lg'} variant='outline' colorScheme='blue'>
                                                <AiOutlinePlus size={24}/>
                                                <TagLabel>Adicionar</TagLabel>
                                            </Tag>

                                            
                                            <Tag size={'lg'} variant='subtitle' colorScheme='gray'>
                                                <AiOutlineClose size={24}/>
                                                <TagLabel>Particular</TagLabel>
                                            </Tag>

                                            
                                            <Tag size={'lg'} variant='subtitle' colorScheme='gray'>
                                                <AiOutlineClose size={24}/>
                                                <TagLabel>Super Oferta</TagLabel>
                                            </Tag>  
                                        </GridItem>
                                        <GridItem w='100%' h='auto' rowSpan={1} colSpan={4} mt={'20px'} >
                                            <Tabs>  
                                                <TabList>
                                                    <Tab style={{fontSize: '12px'}} _selected={{ color: 'var(--chakra-colors-primary)', borderBottomWidth: '4px', borderColor: 'var(--chakra-colors-primary)' }}>Avaliação de venda</Tab>
                                                    <Tab style={{fontSize: '12px'}} _selected={{ color: 'var(--chakra-colors-primary)', borderBottomWidth: '4px', borderColor: 'var(--chakra-colors-primary)' }}>Avaliação de revenda</Tab>
                                                    <Tab style={{fontSize: '12px'}} _selected={{ color: 'var(--chakra-colors-primary)', borderBottomWidth: '4px', borderColor: 'var(--chakra-colors-primary)' }}>Preço desejado</Tab>
                                                    
                                                </TabList>

                                                <TabPanels >
                                                    <TabPanel>
                                                        <Grid 
                                                            templateRows='repeat(2, 1fr)'
                                                            templateColumns='repeat(4, 1fr)'
                                                            gap={0} h={'50px'}
                                                            >
                                            
                                                            
                                                            <GridItem w='100%' rowSpan={1} colSpan={2}>
                                                                <FormControl variant='floating' id='placa' float='left' className="formControl">
                                                                    <Input placeholder=' ' value="R$ 30.900" />
                                                                    <FormLabel style={{backgroundColor: '#F9F9F9'}}>Placa</FormLabel>
                                                                </FormControl>
                                                            </GridItem>
                                                            <GridItem w='100%' rowSpan={2} colSpan={2}>
                                                                <div style={{height: '50%', width: '100%', color: 'white', flexDirection: 'row', textAlign: 'center', backgroundColor: 'var(--chakra-colors-success)', alignItems: 'flex-end', borderTopLeftRadius: '10px', borderTopRightRadius: '10px',borderWidth:'1px', borderColor: '#ccc'}}>
                                                                    <p><span style={{fontSize:"12px"}}>Faixa de Preço KBB</span><br/>
                                                                    <span style={{fontSize:"14px", fontWeight: 600}}>R$ 69.298 - R$ 69.298</span></p>
                                                                </div>
                                                                <div style={{height: '50%', width: '100%', flexDirection: 'row', textAlign: 'center', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px',borderWidth:'1px', borderColor: '#ccc'}}>
                                                                    <p><span style={{fontSize:"12px", justifyContent: 'center'}}>Preço para circular</span><br/>
                                                                    <span style={{fontSize:"14px", fontWeight: 600}}>R$ 67.264</span></p>
                                                                </div>
                                                            </GridItem>
                                                            
                                                            <GridItem w='100%' rowSpan={1} colSpan={2}>
                                                                <FormControl variant='floating' id='placa' float='left' className="formControl">
                                                                    <Input placeholder=' '  value="R$ 30.900"/>
                                                                    <FormLabel style={{backgroundColor: '#F9F9F9'}}>Placa</FormLabel>
                                                                </FormControl>
                                                            </GridItem>
                                                        </Grid>
                                                    </TabPanel>

                                                    <TabPanel>
                                                    </TabPanel>
                                                    
                                                    <TabPanel>
                                                    </TabPanel>
                                                </TabPanels>
                                            </Tabs>  
                                        </GridItem>
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                <p>two!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </GridItem>

                    <GridItem w='100%' h='auto' rowSpan={1} ml={5}>
                        
                        <Grid 
                            templateRows='repeat(3, 1fr)'
                            templateColumns='repeat(1, 1fr)'
                            gap={4} 
                            bg={'white'}
                            borderColor="#eee" 
                            borderWidth="1px" 
                            borderRadius={'10px'}
                            h={'1150px'}>
                                <GridItem w='100%' h='auto' rowSpan={1} pr={'10px'} bg={'white'} borderColor="#eee" borderWidth="1px" borderRadius={'10px'}>
                                    
                                <span style={{fontSize:'14px', fontWeight: 600, margin: '10px'}}>Notas de inspeção</span>
                                    <hr/>
                                    <Image src={veiculo} />
                                </GridItem>

                                
                                <GridItem w='100%' h='auto' rowSpan={1} pr={'10px'}  bg={'white'} borderColor="#eee" borderWidth="1px" borderRadius={'10px'}>
                                <Grid 
                                    templateRows='repeat(50, 1fr)'
                                    templateColumns='repeat(4, 1fr)'
                                    gap={0} h={'50px'} >
                                        <GridItem w='100%' h='auto' colSpan={4} pr={'10px'} bg={'white'} onClick={() => alert('Adicionar')}>
                                            <span style={{fontSize:'14px', fontWeight: 600, margin: '10px'}}>Fotos do veículo</span>
                                            <hr/>
                                        </GridItem>
                                        <GridItem w='100%' h='auto' rowSpan={1} pr={'10px'} bg={'white'} onClick={() => alert('Adicionar')}>
                                            
                                            <div style={{width:'100%', height:'100%', backgroundColor: '#EAF9FF',display:'flex', justifyContent: 'center', alignItems: 'center',textAlign: 'center'}}>
                                                
                                                <p style={{fontSize:'10px', color:'var(--chakra-colors-primary)'}}> <span style={{fontSize:'18px'}}>+</span> <br/>Adicionar fotos</p>
                                            </div>
                                        </GridItem>
                                        {cars.map(c =>
                                            <GridItem w='100%' h='auto' rowSpan={1} pr={'10px'} bg={'white'}>
                                                <Image src={c.car_image} style={{padding: '5px'}}/>
                                            </GridItem>
                                        )}
                                </Grid>
                                </GridItem>
                                
                                <GridItem w='100%' h='auto' rowSpan={1} pr={'10px'} mt={'20px'} bg={'white'} borderColor="#eee" borderWidth="1px" borderRadius={'10px'}>
                                    <span style={{fontSize:'14px', fontWeight: 600, margin: '10px'}}>Contatos vinculados</span>
                                    <hr/>
                                    
                                    <div className='scrolly'>
                                        
                                        <div  className="box">
                                            <div style={{textAlign: 'center', display:'flex',alignItems:'center', justifyContent: 'center', height: '60px',width: '60px',borderWidth: '1px', borderRadius:'30px', borderColor:'var(--chakra-colors-primary)', color:'var(--chakra-colors-primary)', background:'#EAF9FF', float: 'left' }}>
                                                <span>AB</span>
                                            </div>
                                            <div style={{textAlign: 'left'}}>
                                                <p style={{fontSize: '14px', fontWeight: 600}}>Alfa Bravo</p>
                                                <p style={{fontSize: '12px'}}>email@domainname.com</p>
                                                <p style={{fontSize: '12px'}}>(16) 99999-9999</p>
                                            </div>
                                        </div>

                                        
                                        <div  className="box">
                                            <div style={{textAlign: 'center', display:'flex',alignItems:'center', justifyContent: 'center', height: '60px',width: '60px',borderWidth: '1px', borderRadius:'30px', borderColor:'var(--chakra-colors-primary)', color:'var(--chakra-colors-primary)', background:'#EAF9FF', float: 'left' }}>
                                                <span>CD</span>
                                            </div>
                                            <div style={{textAlign: 'left'}}>
                                                <p style={{fontSize: '14px', fontWeight: 600}}>Charlie Delta</p>
                                                <p style={{fontSize: '12px'}}>email@domainname.com</p>
                                                <p style={{fontSize: '12px'}}>(16) 99999-9999</p>
                                            </div>
                                        </div>

                                        
                                        <div  className="box">
                                            <div style={{textAlign: 'center', display:'flex',alignItems:'center', justifyContent: 'center', height: '60px',width: '60px',borderWidth: '1px', borderRadius:'30px', borderColor:'var(--chakra-colors-primary)', color:'var(--chakra-colors-primary)', background:'#EAF9FF', float: 'left' }}>
                                                <span>EF</span>
                                            </div>
                                            <div style={{textAlign: 'left'}}>
                                                <p style={{fontSize: '14px', fontWeight: 600}}>Echo Foxtrot</p>
                                                <p style={{fontSize: '12px'}}>email@domainname.com</p>
                                                <p style={{fontSize: '12px'}}>(16) 99999-9999</p>
                                            </div>
                                        </div>
                                        
                                       
                                    </div>
                                    
                                </GridItem>
                                
                        </Grid>
                        
                    </GridItem>
                
                </Grid>
            </GridItem>
        </Grid>
    )
}