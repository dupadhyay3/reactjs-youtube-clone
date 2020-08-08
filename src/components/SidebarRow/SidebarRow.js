import React from 'react';
import './SidebarRow.scss';

function SidebarRow({ Icon, label, selected }) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__label">{label}</h2>
        </div>
    )
};

export default SidebarRow;
