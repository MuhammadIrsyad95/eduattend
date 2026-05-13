'use server'

import { db } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { randomUUID } from 'crypto'
import { revalidatePath } from 'next/cache'

export async function createUser(formData: FormData) {
  const fullName = formData.get('full_name') as string

  const email = formData.get('email') as string

  const role = formData.get('role') as string

  await db.insert(users).values({
    id: randomUUID(),

    fullName,

    email,

    password: '123456',

    role,
  })

  revalidatePath('/users')
}

export async function deleteUser(id: string) {
  await db.delete(users).where(eq(users.id, id))

  revalidatePath('/users')
}

export async function updateUser(formData: FormData) {
  const id = formData.get('id') as string

  const fullName = formData.get('full_name') as string

  const email = formData.get('email') as string

  const role = formData.get('role') as string

  await db
    .update(users)
    .set({
      fullName,
      email,
      role,
    })
    .where(eq(users.id, id))

  revalidatePath('/users')
}