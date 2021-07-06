import React from 'react';

export default function PageableTable() {
    const [uri, setURI] = React.useState('https://swapi.dev/api/people');
    const [result, setResult] = React.useState(null);
    /* const header = ["h1", "h2", "h3"];
    const data = [["value1", "v2", "v3"], ["v1", "v2", "v3"], ["v1", "v2", "v3"]]; */
    React.useEffect(() => {
        fetch(uri)
            .then(response => response.json())
            .then(json => setResult(json));
    }, [uri]);



    console.log(result);

    // name, height, mass, birth_year, eye_color
    const [headers, data] = React.useMemo(() => {
        if (!result) return [null, null];
        
        const validTypes = ["bigint", "boolean", "number", "string"];

        const headers = Object.keys(result.results[0]).filter((value) => {
            const type = typeof result.results[0][value];

            // instead of switch case, could have a 'dictionary' of valid types
            return validTypes.includes(type);
            /* switch (type) {
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                    return true;
            }
            return false; */
        });
        /* const data = [];
    
        result.results.forEach(person => {
            const info = headers.map(property => person[property]);
    
            data.push(info);
        }); */
        const data = result.results.map(person => headers.map(prop => person[prop]));

        return [headers, data];
    }, [result]);

    if (!result) {
        return (
            <div>Loading from SWAPI...</div>
        );
    }
    console.log(result);

    return (
        <div>
            <Table header={headers} data={data} />
            <div>
                {/* <button disabled={index-1<0 ? false : true}>{'<'}</button> */}
                <button
                    disabled={result.previous ? false : true}
                    onClick={() => { setURI(result.previous); }}>
                    {'<'}
                </button>
                <button
                    disabled={result.next ? false : true}
                    onClick={() => { setURI(result.next); }}>
                    {'>'}
                </button>
            </div>
        </div>
    );
};


// header - array<stringable>
// body - array<array<stringable>>

// validate? - ensure the columns are the same length as the header if header is provided

/**
 * 
 * @param {Object} props
 * @param {Array<any> | undefined} props.header
 * @param {Array<Array<any>>} props.data
 * @returns 
 */
const Table = React.memo(({ header, data }) => {

    // need to validate ...

    return (
        <table style={{ borderCollapse: 'collapse' }}>
            {header && (
                <thead>
                    <tr>
                        {header.map((value, index) => <th style={{ border: '1px solid' }} key={index}>{value}</th>)}
                    </tr>
                </thead>
            )}
            <tbody>
                {data.map((row, rIndex) => (
                    <tr key={rIndex}>
                        {row.map((value, cIndex) => (
                            <td style={{ border: '1px solid' }} key={cIndex}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}, (prevProps, nextProps) => {
    /* const hashA = `${prevProps.header}.${prevProps.data}`;
    const hashB = `${nextProps.header}.${nextProps.data}`;
    return hashA === hashB ? true : false */
    return (prevProps.data.length !== nextProps.data.length) ? false : true;
});