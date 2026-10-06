import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_UMAMI_SRC: z.url().optional(),
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().optional(),
    NEXT_PUBLIC_UMAMI_ENABLE: z.coerce.boolean().default(true)
  },
  runtimeEnv: {
    NEXT_PUBLIC_UMAMI_SRC: process.env.NEXT_PUBLIC_UMAMI_SRC,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
    NEXT_PUBLIC_UMAMI_ENABLE: process.env.NEXT_PUBLIC_UMAMI_ENABLE
  },
  emptyStringAsUndefined: true,
  skipValidation: process.env.DOCKER_BUILD === '1'
})
