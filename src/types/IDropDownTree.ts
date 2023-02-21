type IDropDownTree  = {
    title: string,
    childs?: IDropDownTree[],
    icon?: JSX.Element,
    id: number
}

export default IDropDownTree