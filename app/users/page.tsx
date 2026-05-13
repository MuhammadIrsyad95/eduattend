import MainLayout from '@/components/layout/MainLayout'
import UserTable from '@/components/users/UserTable'
import CreateUserModal from '@/components/users/CreateUserModal'

export default function UsersPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">
              Users
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Manage academic users
            </p>
          </div>

          <CreateUserModal />
        </div>

        {/* TABLE */}
        <UserTable />
      </div>
    </MainLayout>
  )
}