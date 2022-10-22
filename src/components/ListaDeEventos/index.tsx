import React from 'react'
import { useRecoilValue } from 'recoil'
import { IEvento } from '../../interfaces/IEvento'
import { filtroDeEventos, listaDeEventosState } from '../../state/atom'
import { eventosFiltradosState } from '../../state/seletores'
import Evento from '../Evento'
import Filtro from '../Filtro'
import style from './ListaDeEventos.module.scss'

const ListaDeEventos: React.FC = () => {
	
	const eventos = useRecoilValue(eventosFiltradosState)
	
	return (
		<section>
			<Filtro  />
			<div className={style.Scroll}>
				{eventos.map((evento: IEvento) => (
					<Evento evento={evento} key={evento.id} />
				))}
			</div>
		</section>
	)
}

export default ListaDeEventos

