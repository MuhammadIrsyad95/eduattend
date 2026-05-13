'use client'

import { useState } from 'react'
import { updateUser } from '@/lib/actions/users'

type Props = {
  user: {
    id: string
    fullName: string
    email: string
    role: string
  }
}

export default function EditUserModal({
  user,
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-200"
      >
        Edit
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[32px] bg-white p-8 shadow-2xl">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900">
                  Edit User
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Update academic user
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-zinc-400 hover:text-zinc-900"
              >
                ✕
              </button>
            </div>

            <form
              action={updateUser}
              className="space-y-5"
            >
              <input
                type="hidden"
                name="id"
                value={user.id}
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="full_name"
                  defaultValue={user.fullName}
                  className="h-12 w-full rounded-2xl border border-zinc-200 px-4 text-sm outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  className="h-12 w-full rounded-2xl border border-zinc-200 px-4 text-sm outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Role
                </label>

                <select
                  name="role"
                  defaultValue={user.role}
                  className="h-12 w-full rounded-2xl border border-zinc-200 px-4 text-sm outline-none focus:border-violet-500"
                >
                  <option>Student</option>
                  <option>Lecturer</option>
                  <option>Admin</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-11 rounded-2xl border border-zinc-200 px-5 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="h-11 rounded-2xl bg-violet-600 px-5 text-sm font-medium text-white hover:bg-violet-700"
                >
                  Update User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}