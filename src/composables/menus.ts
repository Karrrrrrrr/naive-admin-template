import { api } from '../utils'
import { Result, useRequest } from './request'

export interface Menu {
    id: string
    label: string
    icon?: string
    name?: string
    params?: { [key: string]: string }
    children?: Menu[]
}

export const useMenus = (type: 'main' | 'shortcut' = 'main'): Result<Menu[]> => {
    return useRequest(api.get('menus', { searchParams: { type } }).json<Menu[]>())
}
