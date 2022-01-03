import React from 'react';
import "./Chart.css"
import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function  Chart ({title, data, dataKey,gird }) {

   

    return (
        <div className="chart">
            <h3 className="chart-title">{title}</h3>

            <ResponsiveContainer width="100%" aspect={4/1}>

            <LineChart data={data}>
<XAxis dataKey ="name"/>
<YAxis dataKey ="amt"/>
<Line type ="monotone" dataKey={dataKey}/>
<Tooltip/>
<Legend/>
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

