import { useSetRecoilState } from 'recoil'
import { IEvento } from '../../interfaces/IEvento'
import { listaDeEventosState } from '../atom'

const useRemoverEvento = () => {
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

	return (evento: IEvento) => {
		return setListaDeEventos((listaAntiga: IEvento[]) => {
			return listaAntiga.filter((evt) => evt.id !== evento.id)
		})
	}
}

export default useRemoverEvento