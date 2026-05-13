'use client'

import { useState } from 'react'
import { createUser } from '@/lib/actions/users'

export default function CreateUserModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="h-12 rounded-2xl bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-800"
      >
        Create User
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[32px] bg-white p-8 shadow-2xl">
            {/* HEADER */}
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900">
                  Create User
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Add new academic user
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-zinc-400 hover:text-zinc-900"
              >
                ✕
              </button>
            </div>

            {/* FORM */}
            <form
              action={createUser}
              className="space-y-5"
            >
              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="full_name"
                  required
                  className="h-12 w-full rounded-2xl border border-zinc-200 px-4 text-sm outline-none transition focus:border-violet-500"
                  placeholder="John Doe"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="h-12 w-full rounded-2xl border border-zinc-200 px-4 text-sm outline-none transition focus:border-violet-500"
                  placeholder="john@eduattend.com"
                />
              </div>

              {/* ROLE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Role
                </label>

                <select
                  name="role"
                  className="h-12 w-full rounded-2xl border border-zinc-200 px-4 text-sm outline-none transition focus:border-violet-500"
                >
                  <option>Student</option>
                  <option>Lecturer</option>
                  <option>Admin</option>
                </select>
              </div>

              {/* ACTION */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-11 rounded-2xl border border-zinc-200 px-5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="h-11 rounded-2xl bg-violet-600 px-5 text-sm font-medium text-white transition hover:bg-violet-700"
                >
                  Save User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}