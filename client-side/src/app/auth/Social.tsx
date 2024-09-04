'use client'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { SERVER_URL } from '@/config/api.config';
import { FcGoogle } from 'react-icons/fc';
export const Social = () => {
    const router = useRouter();
  return (
      <div className='space-y-3 w-full mt-5'>
          <Button variant='outline' onClick={() => router.push(`${SERVER_URL}/auth/google`)} className='w-full'>
              <FcGoogle className='size-5 mr-2'/>
              Continue with Google
          </Button>
      </div>
  )
}
