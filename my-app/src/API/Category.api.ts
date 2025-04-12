export const fetchCategory = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id_categoria: 1,
                    nome: "fantasia"
                },
                {
                    id_categoria: 2,
                    nome: "drama"
                },
                {
                    id_categoria: 3,
                    nome: "ficcao"
                },
                {
                    id_categoria: 4,
                    nome: "teatro"
                },
                {
                    id_categoria: 5,
                    nome: "vampiro"
                },
                {
                    id_categoria: 6,
                    nome: "romance"
                },
                {
                    id_categoria: 7,
                    nome: "religiao"
                },
                {
                    id_categoria: 8,
                    nome: "historia"
                },
                {
                    id_categoria: 9,
                    nome: "psicologia"
                },
                {
                    id_categoria: 10,
                    nome: "poesia"
                },
                {
                    id_categoria: 11,
                    nome: "conto de fadas"
                },
                {
                    id_categoria: 12,
                    nome: "anjo"
                },
            ])
        }, 100)
    })
}