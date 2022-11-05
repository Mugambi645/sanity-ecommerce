import { Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sanity ecommerce</title>
        <meta name="description" content="Ecommerce with sanity and next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Typography component="h1" variant="h1">
  Sanity ecommerce
</Typography>
    </div>
  )
}
