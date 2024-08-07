import React from 'react'

export interface MuiButtonProps {
    variant:'text' | 'outlined' | 'contained'
    onClick:()=> void,
    title:string,
    icon:React.ReactNode
}

export interface MuiFormControlProps {
    variant:'filled'|'outlined'|'standard',
    fullWidth:boolean,
    children:React.ReactNode
}

export interface MuiInputLabelProps {
    className:string,
    id:string,
    htmlFor:string,
    children:React.ReactNode
}

export interface MuiOutlinedInputProps {
    id:string,
    fullWidth:boolean,
    type:'text',
    startAdornment:React.ReactNode,
    label:string
}