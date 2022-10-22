import { useRecoilValue } from 'recoil'
import { IEvento } from '../../interfaces/IEvento'
import { eventosFiltradosState } from '../seletores'

const useListarEventos = () => {
	return useRecoilValue<IEvento[]>(eventosFiltradosState)
}

export default useListarEventos