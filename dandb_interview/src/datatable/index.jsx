import React from 'react';

export default function Datatable({ data }) {
    console.log("datatable" + data);
    if (data === undefined) return null;

    const columns = data[0] && Object.keys(data[0]).slice(0, 8);

    return <table cellPadding={10} cellSpacing={10}>
        <thead>
            <tr>{data[0] && columns.map((heading, hIndex) => <th key={hIndex}>{heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map((row, rIndex) =>
                <tr key={rIndex}>{columns.map((col, cIndex) =>
                    <td key={cIndex}>{row[col]}</td>
                )}</tr>
            )}
        </tbody>
    </table>;
}
