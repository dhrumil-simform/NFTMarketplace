import React from 'react'

export const CardHelp = ({ title, desc }) => {
    return (



        <div className="col">
            <div className="card h-100 rounded text-center p-3">
                <h3 className="title py-2">{title}</h3>
                <p className="text text-muted fw-light px-2">
                    {desc}
                </p>
            </div>
        </div>
    )
}
