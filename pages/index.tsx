import Head from 'next/head';
import { useState } from 'react';

import {
	Header,
	OrderedList,
	UnorderedList,
	Button,
	IconButton,
	Switch,
	Radio,
	Checkbox,
	Select,
	Pagination,
	CrumbsList,
	CrumbsItem,
	Label,
	Alert,
	Input,
	TextArea,
	Range,
} from '../components';

export default function Home() {
	const [switch1, setSwitch1] = useState(false);
	const [switch2, setSwitch2] = useState(true);
	const [switch3, setSwitch3] = useState(false);
	const [switch4, setSwitch4] = useState(true);
	const [switch5, setSwitch5] = useState(false);
	const [switch6, setSwitch6] = useState(true);
	const [switch7, setSwitch7] = useState(false);
	const [switch8, setSwitch8] = useState(true);
	const [switch9, setSwitch9] = useState(false);
	const [switch10, setSwitch10] = useState(true);
	const [switch11, setSwitch11] = useState(false);
	const [switch12, setSwitch12] = useState(true);

	const [radio1, setRadio1] = useState(true);
	const [radio2, setRadio2] = useState(false);
	const [radio3, setRadio3] = useState(false);

	const [checkbox1, setCheckbox1] = useState(true);
	const [checkbox2, setCheckbox2] = useState(false);
	const [checkbox3, setCheckbox3] = useState(false);

	return (
		<div>
			<Head>
				<title>Uniasselvi Next JS Styleguide</title>
				<link rel='shortcut icon' href='/img/favicon.png' />
				<link rel='stylesheet' href='https://use.typekit.net/tdl4wcy.css' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
				/>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Rubik&display=swap'
				/>
			</Head>
			<main>
				{/*Headers*/}
				<Header className='header-1' size='h1'>
					Header 1 - 60px
				</Header>
				<Header className='header-2' size='h2'>
					Header 2 - 48px
				</Header>
				<Header className='header-3' size='h3'>
					Header 3 - 40px
				</Header>
				<Header className='header-4' size='h4'>
					Header 4 - 30px
				</Header>
				<Header className='header-5' size='h5'>
					Header 5 - 24px
				</Header>
				<Header className='header-6' size='h6'>
					Header 6 - 18px
				</Header>
				<div className='grid-2'>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloremque voluptatibus officia aliquam accusamus, quasi tenetur
							eum id magni quod, deserunt dolorum praesentium, obcaecati
							perferendis. Repudiandae commodi aliquam explicabo voluptatum
							alias!
						</p>
					</div>
				</div>
				{/* Listas */}
				<div className='grid-2' id='lists'>
					<div>
						<UnorderedList>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						</UnorderedList>
						<br />
						<OrderedList>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						</OrderedList>
					</div>
				</div>
				<br />
				<br />
				{/* Botões quadrados sem preenchimento */}
				<div className='grid-6' id='botoes_quadrados_sem_preenchimento_small'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						onClick={() => {
							console.log('clicked');
						}}
						style='warning'
						size='small'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='right'
						size='small'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='wrong'
						size='small'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='prime'
						size='small'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='second'
						size='small'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='third'
						size='small'
					>
						Terciário
					</Button>
				</div>
				<div className='grid-6' id='botoes_quadrados_sem_preenchimento_default'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='warning'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='right'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='wrong'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='prime'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='second'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='third'
					>
						Terciário
					</Button>
				</div>
				<div className='grid-6' id='botoes_quadrados_sem_preenchimento_large'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='warning'
						size='large'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='right'
						size='large'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='wrong'
						size='large'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='prime'
						size='large'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='second'
						size='large'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='third'
						size='large'
					>
						Terciário
					</Button>
				</div>
				<div
					className='grid-6'
					id='botoes_quadrados_sem_preenchimento_large_disabled'
				>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='warning'
						size='large'
						disabled={true}
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='right'
						size='large'
						disabled={true}
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='wrong'
						size='large'
						disabled={true}
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='prime'
						size='large'
						disabled={true}
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='second'
						size='large'
						disabled={true}
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						style='third'
						size='large'
						disabled={true}
					>
						Terciário
					</Button>
				</div>
				<br />
				<br />
				{/* //Botões quadrados com preenchimento */}
				<div className='grid-6' id='botoes_quadrados_com_preenchimento_small'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='warning'
						size='small'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='right'
						size='small'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='wrong'
						size='small'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='prime'
						size='small'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='second'
						size='small'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='third'
						size='small'
					>
						Terciário
					</Button>
				</div>
				<div className='grid-6' id='botoes_quadrados_com_preenchimento_default'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='warning'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='right'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='wrong'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='prime'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='second'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='third'
					>
						Terciário
					</Button>
				</div>
				<div className='grid-6' id='botoes_quadrados_com_preenchimento_large'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='warning'
						size='large'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='right'
						size='large'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='wrong'
						size='large'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='prime'
						size='large'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='second'
						size='large'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='third'
						size='large'
					>
						Terciário
					</Button>
				</div>
				<div
					className='grid-6'
					id='botoes_quadrados_com_preenchimento_large_disabled'
				>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='warning'
						size='large'
						disabled={true}
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='right'
						size='large'
						disabled={true}
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='wrong'
						size='large'
						disabled={true}
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='prime'
						size='large'
						disabled={true}
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='second'
						size='large'
						disabled={true}
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						filled={true}
						style='third'
						size='large'
						disabled={true}
					>
						Terciário
					</Button>
				</div>
				<br />
				<br />
				{/* Botões quadrados com ícones */}
				<div className='grid-8' id='botoes_quadrados_com_icones_small'>
					<IconButton
						src='/img/ico/search.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='prime'
						size='small'
					></IconButton>
					<IconButton
						src='/img/ico/check_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='third'
						size='small'
					></IconButton>
					<IconButton
						src='/img/ico/help_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='right'
						size='small'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='wrong'
						size='small'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='wrong'
						size='small'
						textAfter='Deletar'
					></IconButton>
					<IconButton
						src='/img/ico/add.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='prime'
						size='small'
						textAfter='Upload'
					></IconButton>
					<IconButton
						src='/img/ico/expand_more_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='second'
						size='small'
						textBefore='Down'
					></IconButton>
					<IconButton
						src='/img/ico/reload_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='third'
						size='small'
						wide={true}
					></IconButton>
				</div>
				<div className='grid-8' id='botoes_quadrados_com_icones_default'>
					<IconButton
						src='/img/ico/search.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='prime'
					></IconButton>
					<IconButton
						src='/img/ico/check_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='third'
					></IconButton>
					<IconButton
						src='/img/ico/help_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='right'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='wrong'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='wrong'
						textAfter='Deletar'
					></IconButton>
					<IconButton
						src='/img/ico/add.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='prime'
						textAfter='Upload'
					></IconButton>
					<IconButton
						src='/img/ico/expand_more_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='second'
						textBefore='Down'
					></IconButton>
					<IconButton
						src='/img/ico/reload_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='third'
						wide={true}
					></IconButton>
				</div>
				<div className='grid-8' id='botoes_quadrados_com_icones_large'>
					<IconButton
						src='/img/ico/search.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='prime'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/check_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='third'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/help_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='right'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='wrong'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='wrong'
						size='large'
						textAfter='Deletar'
					></IconButton>
					<IconButton
						src='/img/ico/add.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='prime'
						size='large'
						textAfter='Upload'
					></IconButton>
					<IconButton
						src='/img/ico/expand_more_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='second'
						size='large'
						textBefore='Down'
					></IconButton>
					<IconButton
						src='/img/ico/reload_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						style='third'
						size='large'
						wide={true}
					></IconButton>
				</div>
				<div className='grid-8' id='botoes_quadrados_com_icones_large_disabled'>
					<IconButton
						src='/img/ico/search.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						style='prime'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/check_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						style='third'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/help_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						style='right'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						style='wrong'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						style='wrong'
						size='large'
						textAfter='Deletar'
					></IconButton>
					<IconButton
						src='/img/ico/add.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						style='prime'
						size='large'
						textAfter='Upload'
					></IconButton>
					<IconButton
						src='/img/ico/expand_more_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						style='second'
						size='large'
						textBefore='Down'
					></IconButton>
					<IconButton
						src='/img/ico/reload_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						style='third'
						size='large'
						wide={true}
					></IconButton>
				</div>
				<br />
				<br />
				{/* //Botões redondos sem preenchimento */}
				<div className='grid-6' id='botoes_redondos_sem_preenchimento_small'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='warning'
						size='small'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='right'
						size='small'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='wrong'
						size='small'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='prime'
						size='small'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='second'
						size='small'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='third'
						size='small'
					>
						Terciário
					</Button>
				</div>
				<div className='grid-6' id='botoes_redondos_sem_preenchimento_default'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='warning'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='right'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='wrong'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='prime'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='second'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='third'
					>
						Terciário
					</Button>
				</div>
				<div className='grid-6' id='botoes_redondos_sem_preenchimento_large'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='warning'
						size='large'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='right'
						size='large'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='wrong'
						size='large'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='prime'
						size='large'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='second'
						size='large'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='third'
						size='large'
					>
						Terciário
					</Button>
				</div>
				<div
					className='grid-6'
					id='botoes_redondos_sem_preenchimento_large_disabled'
				>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='warning'
						size='large'
						disabled={true}
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='right'
						size='large'
						disabled={true}
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='wrong'
						size='large'
						disabled={true}
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='prime'
						size='large'
						disabled={true}
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='second'
						size='large'
						disabled={true}
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='third'
						size='large'
						disabled={true}
					>
						Terciário
					</Button>
				</div>
				<br />
				<br />
				{/* //Botões redondos com preenchimento */}
				<div className='grid-6' id='botoes_redondos_com_preenchimento_small'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='warning'
						size='small'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='right'
						size='small'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='wrong'
						size='small'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='prime'
						size='small'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='second'
						size='small'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='third'
						size='small'
					>
						Terciário
					</Button>
				</div>
				<div className='grid-6' id='botoes_redondos_com_preenchimento_default'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='warning'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='right'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='wrong'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='prime'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='second'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='third'
					>
						Terciário
					</Button>
				</div>
				<div className='grid-6' id='botoes_redondos_com_preenchimento_large'>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='warning'
						size='large'
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='right'
						size='large'
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='wrong'
						size='large'
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='prime'
						size='large'
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='second'
						size='large'
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='third'
						size='large'
					>
						Terciário
					</Button>
				</div>
				<div
					className='grid-6'
					id='botoes_redondos_com_preenchimento_large_disabled'
				>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='warning'
						size='large'
						disabled={true}
					>
						Aviso
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='right'
						size='large'
						disabled={true}
					>
						Acerto
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='wrong'
						size='large'
						disabled={true}
					>
						Erro
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='prime'
						size='large'
						disabled={true}
					>
						Primário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='second'
						size='large'
						disabled={true}
					>
						Secundário
					</Button>
					<Button
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						filled={true}
						style='third'
						size='large'
						disabled={true}
					>
						Terciário
					</Button>
				</div>
				<br />
				<br />
				{/* Botões redondos com ícones */}
				<div className='grid-8' id='botoes_redondos_com_icones_small'>
					<IconButton
						src='/img/ico/search.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='prime'
						size='small'
					></IconButton>
					<IconButton
						src='/img/ico/check_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='third'
						size='small'
					></IconButton>
					<IconButton
						src='/img/ico/help_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='right'
						size='small'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='wrong'
						size='small'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='wrong'
						size='small'
						textAfter='Deletar'
					></IconButton>
					<IconButton
						src='/img/ico/add.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='prime'
						size='small'
						textAfter='Upload'
					></IconButton>
					<IconButton
						src='/img/ico/expand_more_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='second'
						size='small'
						textBefore='Down'
					></IconButton>
					<IconButton
						src='/img/ico/reload_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='third'
						size='small'
						wide={true}
					></IconButton>
				</div>
				<div className='grid-8' id='botoes_redondos_com_icones_default'>
					<IconButton
						src='/img/ico/search.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='prime'
					></IconButton>
					<IconButton
						src='/img/ico/check_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='third'
					></IconButton>
					<IconButton
						src='/img/ico/help_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='right'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='wrong'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='wrong'
						textAfter='Deletar'
					></IconButton>
					<IconButton
						src='/img/ico/add.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='prime'
						textAfter='Upload'
					></IconButton>
					<IconButton
						src='/img/ico/expand_more_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='second'
						textBefore='Down'
					></IconButton>
					<IconButton
						src='/img/ico/reload_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='third'
						wide={true}
					></IconButton>
				</div>
				<div className='grid-8' id='botoes_redondos_com_icones_large'>
					<IconButton
						src='/img/ico/search.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='prime'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/check_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='third'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/help_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='right'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='wrong'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='wrong'
						size='large'
						textAfter='Deletar'
					></IconButton>
					<IconButton
						src='/img/ico/add.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='prime'
						size='large'
						textAfter='Upload'
					></IconButton>
					<IconButton
						src='/img/ico/expand_more_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='second'
						size='large'
						textBefore='Down'
					></IconButton>
					<IconButton
						src='/img/ico/reload_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						rounded={true}
						style='third'
						size='large'
						wide={true}
					></IconButton>
				</div>
				<div className='grid-8' id='botoes_redondos_com_icones_large_disabled'>
					<IconButton
						src='/img/ico/search.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						rounded={true}
						style='prime'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/check_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						rounded={true}
						style='third'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/help_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						rounded={true}
						style='right'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						rounded={true}
						style='wrong'
						size='large'
					></IconButton>
					<IconButton
						src='/img/ico/close_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						rounded={true}
						style='wrong'
						size='large'
						textAfter='Deletar'
					></IconButton>
					<IconButton
						src='/img/ico/add.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						rounded={true}
						style='prime'
						size='large'
						textAfter='Upload'
					></IconButton>
					<IconButton
						src='/img/ico/expand_more_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						rounded={true}
						style='second'
						size='large'
						textBefore='Down'
					></IconButton>
					<IconButton
						src='/img/ico/reload_w.svg'
						onClick={() => {
							console.log('clicked');
						}}
						disabled={true}
						rounded={true}
						style='third'
						size='large'
						wide={true}
					></IconButton>
				</div>
				<br />
				<br />
				{/* Switches quadrados */}
				<div className='grid-4' id='switches_quadrados_small'>
					<Switch
						onChange={() => {
							setSwitch1(!switch1);
						}}
						size='small'
						checked={switch1}
					></Switch>
					<Switch
						onChange={() => {
							setSwitch2(!switch2);
						}}
						size='small'
						checked={switch2}
					></Switch>
					<Switch size='small' disabled={true}></Switch>
					<Switch size='small' checked={true} disabled={true}></Switch>
				</div>
				<div className='grid-4' id='switches_quadrados_default'>
					<Switch
						onChange={() => {
							setSwitch3(!switch3);
						}}
						checked={switch3}
					></Switch>
					<Switch
						onChange={() => {
							setSwitch4(!switch4);
						}}
						checked={switch4}
					></Switch>
					<Switch disabled={true}></Switch>
					<Switch checked={true} disabled={true}></Switch>
				</div>
				<div className='grid-4' id='switches_quadrados_large'>
					<Switch
						onChange={() => {
							setSwitch5(!switch5);
						}}
						checked={switch5}
						size='large'
					></Switch>
					<Switch
						onChange={() => {
							setSwitch6(!switch6);
						}}
						size='large'
						checked={switch6}
					></Switch>
					<Switch size='large' disabled={true}></Switch>
					<Switch size='large' checked={true} disabled={true}></Switch>
				</div>
				{/* Switches redondos */}
				<div className='grid-4' id='switches_redondos_small'>
					<Switch
						onChange={() => {
							setSwitch7(!switch7);
						}}
						checked={switch7}
						size='small'
						rounded={true}
					></Switch>
					<Switch
						onChange={() => {
							setSwitch8(!switch8);
						}}
						size='small'
						rounded={true}
						checked={switch8}
					></Switch>
					<Switch size='small' rounded={true} disabled={true}></Switch>
					<Switch
						size='small'
						rounded={true}
						checked={true}
						disabled={true}
					></Switch>
				</div>
				<div className='grid-4' id='switches_redondos_default'>
					<Switch
						onChange={() => {
							setSwitch9(!switch9);
						}}
						checked={switch9}
						rounded={true}
					></Switch>
					<Switch
						onChange={() => {
							setSwitch10(!switch10);
						}}
						checked={switch10}
						rounded={true}
					></Switch>
					<Switch disabled={true} rounded={true}></Switch>
					<Switch checked={true} rounded={true} disabled={true}></Switch>
				</div>
				<div className='grid-4' id='switches_redondos_large'>
					<Switch
						onChange={() => {
							setSwitch11(!switch11);
						}}
						checked={switch11}
						size='large'
						rounded={true}
					></Switch>
					<Switch
						onChange={() => {
							setSwitch12(!switch12);
						}}
						size='large'
						rounded={true}
						checked={switch12}
					></Switch>
					<Switch size='large' rounded={true} disabled={true}></Switch>
					<Switch
						size='large'
						rounded={true}
						checked={true}
						disabled={true}
					></Switch>
				</div>
				<br />
				<br />
				{/* Checbox e Radio Input */}
				<div className='grid-4' id='checkbox_e_radio_input'>
					<div className='radio-group'>
						<Radio
							onChange={() => {
								setRadio1(!radio1);
							}}
							id='radio1'
							name='rg-1'
							checked={radio1}
						>
							Input type radio
						</Radio>
						<Radio
							onChange={() => {
								setRadio2(!radio2);
							}}
							id='radio2'
							name='rg-1'
							checked={radio2}
						>
							Input type radio
						</Radio>
						<Radio
							onChange={() => {
								setRadio3(!radio3);
							}}
							id='radio3'
							name='rg-1'
							checked={radio3}
						>
							Input type radio
						</Radio>
					</div>
					<div className='radio-group'>
						<Radio id='radio4' name='rg-2' disabled={true} checked={true}>
							Input type radio
						</Radio>
						<Radio id='radio5' name='rg-2' disabled={true}>
							Input type radio
						</Radio>
						<Radio id='radio6' name='rg-2' disabled={true}>
							Input type radio
						</Radio>
					</div>
					<div className='check-group'>
						<Checkbox
							onChange={() => {
								setCheckbox1(!checkbox1);
							}}
							id='check1'
							checked={checkbox1}
						>
							Input type checkbox
						</Checkbox>
						<Checkbox
							onChange={() => {
								setCheckbox2(!checkbox2);
							}}
							id='check2'
							checked={checkbox2}
						>
							Input type checkbox
						</Checkbox>
						<Checkbox
							onChange={() => {
								setCheckbox3(!checkbox3);
							}}
							id='check3'
							checked={checkbox3}
						>
							Input type checkbox
						</Checkbox>
					</div>
					<div className='check-group'>
						<Checkbox id='check4' disabled={true} checked={true}>
							Input type checkbox
						</Checkbox>
						<Checkbox id='check5' disabled={true}>
							Input type checkbox
						</Checkbox>
						<Checkbox id='check6' disabled={true}>
							Input type checkbox
						</Checkbox>
					</div>
				</div>
				<br />
				<br />
				{/* Selects */}
				<div className='grid-3' id='selects_sem_optgroup'>
					<Select placeHolder='Selecione uma opção'>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
					</Select>
					<Select>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
					</Select>
					<Select>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
					</Select>
				</div>
				<br />
				<br />
				{/* Pagination */}
				<div id='pagination'>
					<Pagination
						size='large'
						paginationNumber={4}
						paginationMin={1}
						paginationMax={7}
					/>
					<Pagination
						paginationNumber={4}
						paginationMin={1}
						paginationMax={7}
					/>
					<Pagination
						size='small'
						paginationNumber={4}
						paginationMin={1}
						paginationMax={7}
					/>
				</div>
				<br />
				<br />
				{/* Crumbs */}
				<div className='grid-2' id='crumbs'>
					<div className='crumbList'>
						<CrumbsList>
							<CrumbsItem href='/'>Início</CrumbsItem>
						</CrumbsList>
						<CrumbsList>
							<CrumbsItem href='/'>Início</CrumbsItem>
							<CrumbsItem href='/'>Categorias</CrumbsItem>
						</CrumbsList>
						<CrumbsList>
							<CrumbsItem href='/'>Início</CrumbsItem>
							<CrumbsItem href='/'>Categorias</CrumbsItem>
							<CrumbsItem href='/'>Ciências Exatas</CrumbsItem>
						</CrumbsList>
					</div>
					<div className='crumbList' style={{ fontSize: '24px' }}>
						<CrumbsList>
							<CrumbsItem href='/'>Início</CrumbsItem>
						</CrumbsList>
						<CrumbsList>
							<CrumbsItem href='/'>Início</CrumbsItem>
							<CrumbsItem href='/'>Categorias</CrumbsItem>
						</CrumbsList>
						<CrumbsList>
							<CrumbsItem href='/'>Início</CrumbsItem>
							<CrumbsItem href='/'>Categorias</CrumbsItem>
							<CrumbsItem href='/'>Ciências Exatas</CrumbsItem>
						</CrumbsList>
					</div>
				</div>
				<br />
				{/* Label */}
				<div className='grid-2' id='labels'>
					<div className='grid-2'>
						<Label style='prime'>Desabilitado</Label>
						<Label style='prime' single={true}>
							10
						</Label>
						<Label style='warning'>Aviso</Label>
						<Label style='warning' single={true}>
							32
						</Label>
						<Label style='right'>Acerto</Label>
						<Label style='right' single={true}>
							2
						</Label>
						<Label style='wrong'>Erro</Label>
						<Label style='wrong' single={true}>
							15
						</Label>
						<Label style='second'>Info</Label>
						<Label style='second' single={true}>
							11
						</Label>
					</div>

					<div className='grid-2' style={{ fontSize: '24px' }}>
						<Label style='prime'>Desabilitado</Label>
						<Label style='prime' single={true}>
							10
						</Label>
						<Label style='warning'>Aviso</Label>
						<Label style='warning' single={true}>
							32
						</Label>
						<Label style='right'>Acerto</Label>
						<Label style='right' single={true}>
							2
						</Label>
						<Label style='wrong'>Erro</Label>
						<Label style='wrong' single={true}>
							15
						</Label>
						<Label style='second'>Info</Label>
						<Label style='second' single={true}>
							11
						</Label>
					</div>
				</div>
				<br />
				<br />
				{/* Alerts */}
				<div className='alerts' id='alerts'>
					<Alert title='Atenção' message='Mensagem de aviso' style='warning' />
					<br />
					<Alert
						title='Muito bem!'
						message='Mensagem de sucesso'
						style='right'
					/>
					<br />
					<Alert title='Ah não :(' message='Mensagem de erro' style='wrong' />
					<br />
					<Alert
						title='Bem-vindo!'
						message='Mensagem informativa'
						style='prime'
					/>
					<br />
				</div>
				<br />
				{/* Ranges */}
				<div className='grid-2' id='input_ranges'>
					<div className='ranges'>
						<Range style='prime' />
						<Range style='second' />
						<Range style='third' />
						<Range style='right' />
						<Range style='wrong' />
					</div>
					<div className='ranges'>
						<Range filled={true} style='prime' />
						<Range filled={true} style='second' />
						<Range filled={true} style='third' />
						<Range filled={true} style='right' />
						<Range filled={true} style='wrong' />
					</div>
				</div>
				<br />
				{/* Inputs */}
				<div className='grid-2' id='text_fields'>
					<div className='input-group' id='text_fields_sem_icone'>
						<Input placeHolder='texto' /> <br />
						<Input placeHolder='texto' disabled={true} /> <br />
						<Input defaultValue='Completo' style='done' /> <br />
						<Input defaultValue='Aviso' style='warning' /> <br />
						<Input defaultValue='Acerto' style='right' /> <br />
						<Input defaultValue='Erro' style='wrong' /> <br />
					</div>
					<div className='input-group' id='text_fields_com_icone'>
						<Input icon='/img/ico/user.svg' placeHolder='texto' /> <br />
						<Input
							icon='/img/ico/user.svg'
							placeHolder='texto'
							disabled={true}
						/>{' '}
						<br />
						<Input
							icon='/img/ico/user.svg'
							defaultValue='Completo'
							style='done'
						/>{' '}
						<br />
						<Input
							icon='/img/ico/user.svg'
							defaultValue='Aviso'
							style='warning'
						/>{' '}
						<br />
						<Input
							icon='/img/ico/user.svg'
							defaultValue='Acerto'
							style='right'
						/>{' '}
						<br />
						<Input
							icon='/img/ico/user.svg'
							defaultValue='Erro'
							style='wrong'
						/>{' '}
						<br />
					</div>
				</div>
				<br />
				{/* TextAreas */}
				<div className='grid-3' id='text_areas'>
					<TextArea
						cols={30}
						rows={5}
						maxLenght={100}
						placeHolder='Escreva algo aqui...'
					/>

					<TextArea
						style='wrong'
						cols={30}
						rows={5}
						maxLenght={100}
						placeHolder='Escreva algo aqui...'
						defaultValue='Algo deu errado!'
					/>

					<TextArea
						style='done'
						cols={30}
						rows={5}
						maxLenght={100}
						placeHolder='Escreva algo aqui...'
						defaultValue='Completo'
					/>
				</div>
				<br />
			</main>
		</div>
	);
}
