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
			
			const ehOMesmoDia =
				filtro.data.toISOString().slice(0, 10) ===
				evento.inicio.toISOString().slice(0, 10)

			const ehNoMesmoStatus = filtro.status === 'completos' && evento.completo === true || filtro.status === 'incompletos' && evento.completo === false || filtro.status === 'ambos'
			console.log('ehOMesmoDia', ehOMesmoDia)
			console.log('status1', filtro.status === 'completos' && evento.completo === true)
			console.log('status2', filtro.status === 'incompletos' && evento.completo === false)
			console.log('status3', filtro.status === 'ambos')
			console.log('status4', ehNoMesmoStatus)
			return ehOMesmoDia && ehNoMesmoStatus
		})

		return eventos
	},
})