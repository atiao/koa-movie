
const rp = require('request-promise-native')

async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`
    const res = await rp(url)

    return res
}

;(async () => {
    let movies = [{
        doubanId: 5300054,
        title: '波西米亚狂想曲8.7',
        rate: 0,
        poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549558913.jpg'
    },{ doubanId: 30164448,
        title: '海市蜃楼7.8',
        rate: 0,
        poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551172384.jpg' 
    }]

    movies.map(async movie => {
        let movieData = await fetchMovie(movie)
        try {
            movieData = JSON.parse(movieData)

            console.log(movieData.tags)
            console.log(movieData.summary)
        } catch (error) {
            console.log(error)   
        }
        // console.log(movieData)
    })
})()