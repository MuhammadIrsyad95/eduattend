import { db } from '@/db'
import { users } from '@/db/schema'
import { deleteUser } from '@/lib/actions/users'
import EditUserModal from './EditUserModal'
export default async function UserTable() {
  const data = await db.select().from(users)

  return (
    <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm">
      {/* HEADER */}
      <div className="border-b border-zinc-100 p-6">
        <h2 className="text-[22px] font-bold text-zinc-900">
          User Management
        </h2>

        <p className="mt-1 text-[13px] text-zinc-500">
          Connected with Neon Database
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-100 bg-zinc-50/50">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                User
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Role
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => (
              <tr
                key={user.id}
                className="border-b border-zinc-100 hover:bg-zinc-50"
              >
                {/* USER */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />

                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {user.fullName}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                {/* ROLE */}
                <td className="px-6 py-5">
                  <div className="inline-flex rounded-xl bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                    {user.role}
                  </div>
                </td>

                {/* ACTION */}
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2">
                   <EditUserModal user={user} />

                    <form
                        action={async () => {
                        'use server'

                        await deleteUser(user.id)
                        }}
                    >
                        <button
                        type="submit"
                        className="rounded-xl bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                        >
                        Delete
                        </button>
                    </form>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}