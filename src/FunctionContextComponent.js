import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextComponent() {
    const darkTheme = useTheme
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
            <button onClick={useThemeUpdate}>Theme Toggle</button>
            <div style={themeStyles}>
                Function Theme
            </div>
        </>
    )
}