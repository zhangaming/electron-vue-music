import axios from './base.js'

/*
banner
说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据

可选参数 :

type:资源类型,对应以下类型,默认为 0 即PC

0: pc

1: android

2: iphone

3: ipad
接口地址 : /banner

调用例子 : /banner, /banner?type=2
*/
export const getBanner = () => axios.get('/banner?type=0')


/*
推荐歌单
说明 : 调用此接口 , 可获取推荐歌单

可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)

接口地址 : /personalized

调用例子 : /personalized?limit=1
*/
export const getRecommendSongListWithoutLogin = (limit = 30) => axios.get('/personalized', {params: {limit: limit}})


/*
### 获取每日推荐歌单

说明 : 调用此接口 , 可获得每日推荐歌单 ( 需要登录 )

**接口地址 :** `/recommend/resource`

**调用例子 :** `/recommend/resource`
*/


export const getRecommendSongListWithLogin = () => axios.get('/recommend/resource')


/*
### 独家放送

说明 : 调用此接口 , 可获取独家放送

**接口地址 :** `/personalized/privatecontent`
*/

export const getPersonalizedContent = () => axios.get('/personalized/privatecontent')
