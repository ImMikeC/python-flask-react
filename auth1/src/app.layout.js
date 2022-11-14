import React from 'react'
import auth from './auth'


export const AppLayout = (props) => {
    return(
        <>
        <h1>App Layout</h1>
        <button 
            onClick={()=> {
                auth.logout(()=> {
                    props.history.push('/')
                })
            }}
            >
                Logout
            </button>
        </>
    )
}