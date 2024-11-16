"use client"

import {useState, useEffect} from 'react';
import Image from 'next/image';

export default function Home() {

  const [data, setData] = useState(null)
  const access_key = "29b5a4268acf45175b23d0e26d8dd9a4"

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${access_key}`)
    .then((response) => response.json())
    .then((jsonConverted) => {
      console.log("json converted data: ", jsonConverted);
      setData(jsonConverted)
    })
  }, [])

  return (
    <div className="cont grid justify-end items-center px-28">
      <div className="rates grid grid-cols-1 w-[20rem] border-4">
        <div className="border-b-2 border-gray-300 p-4 py-5">BTC: {data?.rates?.BTC}</div>
        <div className="border-b-2 border-gray-300 p-4 py-5">BNB: {data?.rates?.BNB}</div>
        <div className="border-b-2 border-gray-300 p-4 py-5">ACP: {data?.rates?.ACP}</div>
        <div className="border-b-2 border-gray-300 p-4 py-5">BASH: {data?.rates?.BASH}</div>
        <div className="border-b-2 border-gray-300 p-4 py-5">AGI: {data?.rates?.AGI}</div>
        <div className="border-b-2 border-gray-300 p-4 py-5">BCD: {data?.rates?.BCD}</div>
        <div className="border-b-2 border-gray-300 p-4 py-5">BAT: {data?.rates?.BAT}</div>
      </div>
    </div>
  );
}
