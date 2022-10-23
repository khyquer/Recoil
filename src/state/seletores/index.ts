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
			return ehOMesmoDia && ehNoMesmoStatus
		})

		return eventos
	},
})

export const eventosAsync = selector({
	'key': 'eventosAsync',
	get: async () => {
		const respostaHttp = await fetch('http://localhost:8080/eventos')

		const eventosJson: IEvento[] = await respostaHttp.json()

		return eventosJson.map(evento => ({
			...evento,
			inicio: new Date(evento.inicio),
			fim: new Date(evento.fim)
		}))
	}
})