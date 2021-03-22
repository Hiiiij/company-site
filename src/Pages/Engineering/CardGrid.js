import React from 'react'
import { ContainerWithLayoutPadding } from '../../Components/StyledComponents'


export function CardGrid({ projectCardData }) {
    return (
        <ContainerWithLayoutPadding style={{
            backgroundColor: '#000',
            color: "#fff"
        }}>
            <h2>Projects</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                gap: '50px',
                width: '100%',
                height: '100%'
            }}>
                {projectCardData.map((item, index) => (
                    <div key={index} style={{
                        width: '100%',
                        height: '100%',
                        minWidth: '200px',
                        // width: '500px', height: '500px'
                    }}>
                        <img src={item.img} style={{ backgroundColor: 'pink', width: '100%' }} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </ContainerWithLayoutPadding>
    )
}
