export interface MenuInfo {
    name: string,
    path?: string,
    opened?: boolean,
    subMenu?: SubMenuInfo[],
}
//자기자신을 부르면 계속 하위메뉴를 부를수 있는거 아닌가?
export interface SubMenuInfo {
    name: string,
    path: string,
}

export interface Song {
    rank?: number,
    number: number,
    title: string,
    singer?: string,
    writer?: string,
    maker?: string,
}
