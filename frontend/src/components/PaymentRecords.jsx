import React from 'react'
import { useState } from 'react'
const url = import.meta.env.VITE_URL
import Swal from 'sweetalert2'

const PaymentRecords = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' })
  const [records, setRecords] = useState(null)

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${url}/payments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        name: userInfo.name,
        email: userInfo.email,
      },
    })
    const data = await response.json()
    if (data) {
      setRecords(data)
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Enter valid name and email to fetch records',
        icon: 'error',
      })
    }
  }

  return (
    <div className="w-full">
      <form
        className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 "
        onSubmit={handleSubmit}
      >
        <label className="block text-sm font-medium text-slate-700" htmlFor="name">
          Enter Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handleChange}
          className="w-full rounded-2xl border  bg-white px-4 py-3 text-slate-900  focus:border-blue-500 "
        />

        <label className="block text-sm font-medium " htmlFor="email">
          Enter Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
          className="w-full rounded-2xl border  bg-white px-4 py-3 text-slate-900  focus:border-blue-500 focus:ring-2"
        />

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white  hover:bg-blue-700  sm:w-auto"
        >
          Get Payment Records
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {records && records.length > 0 ? (
          records.map((record) => (
            <div
              key={record._id}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Name:</span> {record.name}
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Email:</span> {record.email}
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Amount:</span> {record.amount}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-sm text-slate-500">No records to display</p>
        )}
      </div>
    </div>
  )
}

export default PaymentRecords