import axios from 'axios'
import React from 'react'

const user = JSON.parse(localStorage.getItem('userId'));
const userId = user?.id

const api = axios.create({
baseURL:'https://www.yummytruck.store'
//  baseURL: 'http://localhost:5000'
})

export function main(lat,lng,level){
  // return api.get(`/calculate?latitude=${lat}&longitude=${lng}?distance=${level}`)
  return api.get(`/calculate?latitude=${lat}&longitude=${lng}&distance=${level}`)
}

export function infoRegister(data){
  return api.post('/storeRegister',{
    data: data
  })
}

export function menuRegister(data){
  return api.post('/itemRegister',{
    data: data
  })
}

//푸드트럭 상세페이지 API
export function truckData(storeno){
  return api.get(`/truck/detail/${storeno}`)
}

export function truckReview(id, storeno, storecontent, storerate){
  return api.post(`/truck/review`,{
    id: userId,
    storeno: storeno,
    storecontent: storecontent,
    storerate: storerate
  })
}

export function truckComplain(id, storeno){
  return api.post('/truck/complain',{
    id :userId,
    storeno: storeno
  })
}

export function truckGood(id, storeno){
  return api.post('/truck/good',{
    id : userId,
    storeno, storeno
  })
}

export function inputAccount(id, menu){
  return api.post('/account/menu',{
    id: userId,
    iteminformation: menu
  })
}

//가계부
export function accountData(id){
  return api.get(`/account/${userId}`)
}

export function accountModify(id, date, menu, factor){
  return api.patch('/account/menu/modify',{
    id:userId,
    date:date,
    iteminformation:menu,
    factor:factor
  })
}

export function accountDelete(id,date,menu){
  return api.delete(`account/delete?id=${userId}&date=${date}&menu=${menu}`)
}

//마이페이지
export function myPageData(id){
  return api.get(`/member?id=${userId}`)
}

export function myPageReview(id){
  return api.get(`memberApi?id=${userId}&option=review`)
}

export function myPageRegister(id){
  return api.get(`memberApi?id=${userId}&option=store`)
}

export function myPageLike(id){
  return api.get(`memberApi?id=${userId}&option=like`)
}

export function myPageLocation(id){
  return api.get(`memberApi?id=${userId}&option=favorite`)
}


//여기 수정
export function myPageLocationPost(id, lat, lng, type){
  return api.post(`favoriteRegister`)
}

export function myPageLocationDelete(id, lat, lng, type){
  return api.post(`/favoriteRegister?id=${userId}&favoriteLatitude=${lat}&favoriteLongitude=${lng}&location_code=${type}`)
}

export function myPageUpdate(id, lat, lng, type){
  return api.post(`/favoriteUpdate?id=${userId}&favoriteLatitude=${lat}&favoriteLongitude=${lng}&location_code=${type}`)
}

export function myPageNickName(id, name){
  return api.put(`/memberUpdage?id=${userId}`,{
    name : name
  })
}

export function Login(code){
  return api.get(`/auth/kakao/callback?code=${code}`,{
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}
