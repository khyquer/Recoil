import { useRecoilValue } from 'recoil'
import { IEvento } from '../../interfaces/IEvento'
import { listaDeEventosState } from '../atom'

const useListarEventos = () => {
	return useRecoilValue<IEvento[]>(listaDeEventosState)
}

export default useListarEventos