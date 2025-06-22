'use client'

import { useSearchParams } from 'next/navigation'
import ResetPasswordForm from './form'

export default function ResetPasswordWrapper() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ''

  return <ResetPasswordForm token={token} />
}
