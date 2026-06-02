import React from 'react'
import { useState } from 'react'
const url = import.meta.env.VITE_URL
import Swal from 'sweetalert2'

const PaymentForm = () => {
  const [paymentDetails, setPaymentDetails] = useState({ name: '', email: '', amount: 0 })

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${url}/payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentDetails),
    })

    if (response.ok) {
      Swal.fire({
        title: 'Success!',
        text: 'Payment Successful',
        icon: 'success',
      })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Payment Failed',
        icon: 'error',
      })
    }
  }

  return (
    <div className="w-full">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <h1 className="rounded-2xl bg-slate-950 px-4 py-4 text-center text-xl font-bold text-white shadow-sm">
          Payment Form
        </h1>

        <label className="text-sm font-medium text-slate-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 "
        />

        <label className="text-sm font-medium text-slate-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 "
        />

        <label className="text-sm font-medium text-slate-700" htmlFor="amount">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          required
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 "
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg  hover:bg-blue-700 md:w-auto"
          >
            Click to Pay
          </button>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm