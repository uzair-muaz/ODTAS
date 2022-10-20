import React from 'react'
import { useState, useEffect } from "react"
import Videos from './Videos'
import { useRouter } from 'next/router'

function GetVideo() {

  const [videos, setVideos] = useState([])
  const router = useRouter();
  useEffect(() => {
    const fetchVideos = async () => {
      //   const response =  fetch("http://localhost:3000/video/getVideos", {
      //         method: 'GET',
      //         headers: {
      //           'auth-token': localStorage.getItem('token')
      //       }
      //   }).then(function (response) {
      //     console.log('response status of get video  = ' + response.status);
      //     if (response.status == 200) {
      //       console.log('in else')
      //       const data = response.json()
      //       console.log(data)
      //       setVideos(data)

      //     }
      //     else{
      //       console.log('redirecting to detection');
      //       router.push('/detection')
      //     }
      // })

      const response = await fetch("http://localhost:3000/video/getVideos", {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      })
      console.log(response.status);
      if (response.status != 200) {
        console.log('redirecting to detection');
        router.push('/detection')
      }
      else {
        const data = await response.json();
        setVideos(data)
      }
      // console.log(response.json()+" al")
      // const val=response.json();
      // console.log(val+" da")
      // console.log(val.status+" sjfnijn")
      //   then(function (response) {
      //     console.log('response status of get video' + response.status);
      //     if (response.status != 200) {
      //       console.log('redirecting to detection');
      //         router.push('/detection')
      //     }
      //     else{
      //       const data = response.json()
      //       console.log(data)
      //       setVideos(data)
      //     }
      // })

    }
    fetchVideos()
  }, [])

  //The array is added is useEffect to add dependency to just run the function only once on the first render in line 20 

  return (

    <div className="container mx-auto px-5 ">
      <h1 className="text-slate-800 font-bold text-3xl mt-[2%] mb-[2%] text-center">
        Videos saved By you
      </h1>

      {!videos ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <section className="grid gap-5 grid-cols-3 pb-20 container">
          {videos.map((video) => (
            <Videos key={video.id} {...video} />
          ))}
        </section>
      )}
    </div>

  )
}

export default GetVideo