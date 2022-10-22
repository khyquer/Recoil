import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { IFiltros } from '../../interfaces/IFiltros'
import { filtroDeEventos } from '../../state/atom'
import style from './Filtro.module.scss'

const Filtro: React.FC = () => {
	const [data, setData] = useState('')

	const setFiltroDeEvento = useSetRecoilState<IFiltros>(filtroDeEventos)

	const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault()
		if (!data) {
			return setFiltroDeEvento({data: null})
		}
		
		setFiltroDeEvento({
			data: new Date(data)
		})
	}

	return (
		<form className={style.Filtro} onSubmit={submeterForm}>
			<h3 className={style.titulo}>Filtrar por data</h3>
			<input
				type='date'
				name='data'
				className={style.input}
				onChange={(evento) => setData(evento.target.value)}
				placeholder='Por data'
				value={data}
			/>

			<button className={style.botao}>Filtrar</button>
		</form>
	)
}

export default Filtro
