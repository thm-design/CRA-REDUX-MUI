const server = [
    [
        {
            id: '1',
            timestamp: new Date(),
            payload: 'payload'
        },
        {
            id: '1',
            timestamp: new Date(),
            payload: 'payload'
        },
        {
            id: '1',
            timestamp: new Date(),
            payload: 'payload'
        }
    ],
    [
        {
            id: '1',
            timestamp: new Date(),
            payload: 'payload'
        },
        {
            id: '1',
            timestamp: new Date(),
            payload: 'payload'
        },
        {
            id: '1',
            timestamp: new Date(),
            payload: 'payload'
        }
    ],
    [
        {
            id: '1',
            timestamp: new Date(),
            payload: 'payload'
        },
        {
            id: '1',
            timestamp: new Date(),
            payload: 'payload'
        },
        {
            id: '1',
            timestamp: new Date(),
            payload: 'payload'
        }
    ]
];

const fecthServerData = endpoint => {
    const requestPromise = endPoint.fetch();

    requestPromise
        .then(response => {
            return response.json();
        })
        .then(data => {
            serverParser(data);
        });
};

// 1 level nesting only
export const flatten = array => [].concat(...array);

const serverParser = servers => {
    const flattendServers = flatten(servers);
    const uniqueData = new Map([flattendServers]);
    return uniqueData.sort((a, b) => {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
    });
};
