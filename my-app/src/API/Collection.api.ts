export const fetchCollections = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                [
                    {
                        "colecao_id": 1,
                        "nome": "encantadas",
                        "imagem_url": "https://m.media-amazon.com/images/I/51Nalk3QhyL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 2,
                        "nome": "a maldicao do tigre",
                        "imagem_url": "https://m.media-amazon.com/images/I/5111it2ukyL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 3,
                        "nome": "a sensitiva",
                        "imagem_url": "https://m.media-amazon.com/images/I/41KJ4HD2OxL._SX342_SY445_.jpg"
                    },
                    {
                        "colecao_id": 4,
                        "nome": "a selecao",
                        "imagem_url": "https://m.media-amazon.com/images/I/510XEt4RMSL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 5,
                        "nome": "playboy",
                        "imagem_url": "https://m.media-amazon.com/images/I/51fYxBaeaWL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 6,
                        "nome": "redencao e submissao",
                        "imagem_url": "https://m.media-amazon.com/images/I/91dGME4FJkL._SY425_.jpg"
                    },
                    {
                        "colecao_id": 7,
                        "nome": "depois de voce",
                        "imagem_url": "https://m.media-amazon.com/images/I/41M-QPmjLRL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 8,
                        "nome": "sidney sheldon",
                        "imagem_url": "https://m.media-amazon.com/images/I/417752WSS2L._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 9,
                        "nome": "irmandade da adaga negra",
                        "imagem_url": "https://m.media-amazon.com/images/I/41Xip5hpyzL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 10,
                        "nome": "imperadores de roma",
                        "imagem_url": "https://m.media-amazon.com/images/I/51srfZkIbKS._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 11,
                        "nome": "trigesimo",
                        "imagem_url": "https://m.media-amazon.com/images/I/31Z-2YPTnuL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 12,
                        "nome": "sylvia day",
                        "imagem_url": "https://m.media-amazon.com/images/I/51Hl26cOfUL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 13,
                        "nome": "bella andre",
                        "imagem_url": "https://m.media-amazon.com/images/I/41jZsUmQVQL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 14,
                        "nome": "rush",
                        "imagem_url": "https://m.media-amazon.com/images/I/51bH6XN0FxL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 15,
                        "nome": "renegade angels",
                        "imagem_url": "https://m.media-amazon.com/images/I/41fLxFCEW0L._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 16,
                        "nome": "becca",
                        "imagem_url": "https://m.media-amazon.com/images/I/81e7PGyapQL._SY425_.jpg"
                    },
                    {
                        "colecao_id": 17,
                        "nome": "sempre foi voce",
                        "imagem_url": "https://m.media-amazon.com/images/I/51HXFdkmFxL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 18,
                        "nome": "stephen king",
                        "imagem_url": "https://m.media-amazon.com/images/I/51fu8akxwXL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 19,
                        "nome": "contornos do coracao",
                        "imagem_url": "https://m.media-amazon.com/images/I/51D0pelEqGL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 20,
                        "nome": "dezesseis luas",
                        "imagem_url": "https://m.media-amazon.com/images/I/71lX0Bl-pDL._SY425_.jpg"
                    },
                    {
                        "colecao_id": 21,
                        "nome": "ascencao",
                        "imagem_url": "https://m.media-amazon.com/images/I/4110MRZZU6L._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 22,
                        "nome": "lick",
                        "imagem_url": "https://m.media-amazon.com/images/I/51mMuSCjHyL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 23,
                        "nome": "tensao",
                        "imagem_url": "https://m.media-amazon.com/images/I/81xMT6LB6gS._SY425_.jpg"
                    },
                    {
                        "colecao_id": 24,
                        "nome": "gabriel",
                        "imagem_url": null
                    },
                    {
                        "colecao_id": 25,
                        "nome": "imperio",
                        "imagem_url": "https://m.media-amazon.com/images/I/41DgqNC-S+L._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 26,
                        "nome": "pecas infernais",
                        "imagem_url": "https://m.media-amazon.com/images/I/519SPxcHSBL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 27,
                        "nome": "instrumentos mortais",
                        "imagem_url": "https://m.media-amazon.com/images/I/516ZdYOkhDL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 28,
                        "nome": "after",
                        "imagem_url": "https://m.media-amazon.com/images/I/41SStGHQ2hL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 29,
                        "nome": "50 tons de cinza",
                        "imagem_url": "https://m.media-amazon.com/images/I/51CiNfvevDL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 30,
                        "nome": "assassin's creed",
                        "imagem_url": "https://m.media-amazon.com/images/I/41JUKfBWxhL._SY445_SX342_.jpg"
                    },
                    {
                        "colecao_id": 31,
                        "nome": "livros unicos",
                        "imagem_url": "https://m.media-amazon.com/images/I/412n4WidCWL.jpg"
                    }
                ]
            )
        }, 100)
    })
}