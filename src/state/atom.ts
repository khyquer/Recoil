import { atom } from 'recoil'
import { IEvento } from '../interfaces/IEvento'
import { IFiltros } from '../interfaces/IFiltros'
import { eventosAsync } from './seletores'

export const listaDeEventosState = atom<IEvento[]>({
	key: 'listaDeEventosState',
	default: eventosAsync
})

export const filtroDeEventos = atom<IFiltros>({
	key: 'filtroDeEventos',
	default: {
		data: null,
		status: 'completos'
	}
})