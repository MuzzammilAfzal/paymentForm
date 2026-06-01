import React from 'react'
import PaymentForm from '../components/PaymentForm'
import PaymentRecords from '../components/PaymentRecords'

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 md:px-6 md:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row lg:items-start">
        <section className="w-full rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 lg:w-[58%]">
          <PaymentForm />
        </section>

        <section className="w-full rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 lg:w-[42%]">
          <PaymentRecords />
        </section>
      </div>
    </div>
  )
}

export default Home