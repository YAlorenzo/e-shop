import StoreLayout from '@/components/layouts/store-layout/StoreLayout'
import type { PropsWithChildren } from 'react'


export default function layout({childern}: PropsWithChildren<unknown>) {
  return <StoreLayout>{ childern }</StoreLayout>
}