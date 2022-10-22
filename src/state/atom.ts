import { atom } from 'recoil'
import { IEvento } from '../interfaces/IEvento'
import { IFiltros } from '../interfaces/IFiltros'

export const listaDeEventosState = atom<IEvento[]>({
	key: 'listaDeEventosState',
	default: [
		{
			descricao: 'Estudar React',
			inicio: new Date('2022-10-15T09:00'),
			fim: new Date('2022-10-15T13:00'),
			completo: false,
			id: 1642342747,
		},
		{
			descricao: 'Estudar Recoil',
			inicio: new Date('2022-10-16T09:00'),
			fim: new Date('2022-10-22T11:00'),
			completo: false,
			id: 1642342959,
		},
		{
			descricao: 'Estudar Recoil 2',
			inicio: new Date('2022-10-21T09:00'),
			fim: new Date('2022-10-21T11:00'),
			completo: true,
			id: 1642342958,
		}
	],
})

export const filtroDeEventos = atom<IFiltros>({
	key: 'filtroDeEventos',
	default: {
		data: null,
		status: 'completos'
	}
})