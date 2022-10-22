import { selector } from 'recoil'
import { IEvento } from '../../interfaces/IEvento'
import { filtroDeEventos, listaDeEventosState } from '../atom'

export const eventosFiltradosState = selector({
	key: 'eventosFiltradosState',
	get: ({ get }) => {
		const filtro = get(filtroDeEventos)

		const todosOsEventos = get(listaDeEventosState)

		const eventos = todosOsEventos.filter((evento: IEvento) => {
			if (!filtro.data) {
				return true
			}
			console.log(filtro)
			
			const ehOMesmoDia =
				filtro.data.toISOString().slice(0, 10) ===
				evento.inicio.toISOString().slice(0, 10)

			return ehOMesmoDia
		})

		return eventos
	},
})