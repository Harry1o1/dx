<!-- 1. ai
2. backend
3. benchmark
4. blockchain
5. clean-architecture // changelog
6. cloud
7. config
8. contubution
9. database
10. design-pattern
11. documentation
12. external
13. frontend
14. infrastucture
15. internal
16. media
17. microservice
18. observability
19. package
20. payment
21. platform
22. privacy
23. roadmap
24. script
25. security
26. solid-principle // generator
27. template
28. test
29. theory
30. tool
31. trend
32. ui
33. ux
34. workflow
35. trend -->

<!--
ai
algorithm
backend
blockchain
config
database
design-pattern
documentation
frontend
media
observability
package
payment
privacy
roadmap
script
security
test
theory
ui
ux
-->

<!--
In this project I am trying to build a platform to make developer experience (as dx is the shortform) better. By using this developers will manage huge website project more efficiently.It is a huge project so I have devided it in smaller component's like:

1. dx-authflow[having trouble to integrate authentication in your website? you need dx-authflow this thing got -: 536 social login options, all blockchain wallets supported in the world and 3 more awesome feature I just can't explain this project's features in this short description. I sure wasted so many time in this project. but the final results just make this hard work paid off 😊. I can promise you have never seen so much features in an authentication package!!! there is many things to say so just check the github repo -> https://github.com/beingofexistence/dx-authflow.git (status:COMPLETED-@1.0.0)
]

2. dx-ai[by using this package you can use any ai models strait from huggingface,openai or any ai models providers to your own website ->  https://github.com/beingofexistence/dx-ai.git (status:ALMOST_COMPLETED)]

3. dx-blockchain[will asemble all ethreum,solana and cosmos based blockchain in only place means you can intregate your website to any of this blockchain providers by using this package ->  https://github.com/beingofexistence/dx-blockchain.git (status:ALMOST_COMPLETED)]

4. dx-frontend[will solve the headache of JavaScript frontend frameworks -> https://github.com/beingofexistence/dx-frontend.git (status:FAR_FROM_COMPLETED)]

5. dx-backend[will give you a changce to use different backend backups for more sucurity of your users -> https://github.com/beingofexistence/dx-backend.git (status:FAR_FROM_COMPLETED)]

6. dx-database[will assemble all 465 databases in the world and make your applications user's data more accessible in fast and efficient way ->  https://github.com/beingofexistence/dx-database.git (status:FAR_FROM_COMPLETED)]

7. dx-ui[by using this one ui library you can use most popular ui libraries like material-ui,ant-design,nextui,chakra-ui... total 30+ libraries at once ->  https://github.com/beingofexistence/dx-ui.git (status:ALMOST_COMPLETED)]

8. dx-ux[there are like millions of javascript libraries that are great but not no one is literally not even aware of. that's why I maded this project to assemble them all keeping in mind optimization website and provide an ai to search for the right libraries for right 👍 not the most popular ones ->  https://github.com/beingofexistence/dx-ux.git (status:FAR_FROM_COMPLETED)]

9. dx-animeflow [this project will manage your website's icon - target to cover 5million icons in glassmorphisum,neon,rainbow,animated,sharp,fill,outlined and water-colored 💦 flavors,fonts,dom + window + canvas,animated svg and browser consoles and animations ->  https://github.com/beingofexistence/dx-animeflow.git (status:FAR_FROM_COMPLETED)]

10. dx-paymentflow[ will provide you all payment dealing providers -> https://github.com/beingofexistence/dx-paymentflow.git (status:FAR_FROM_COMPLETED)]
-->


<!-- Dx’s Frontend Cloud provides the developer experience and infrastructure to build, scale, and secure a faster, more personalized Web. -->

<!-- hello old github repo. -->

<!--
old shadcn-ui code.
```
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button"
import MailPage from "@/app/(app)/examples/mail/page"
import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

export default function IndexPage() {
  return (
    <div className="container relative">
      {/* <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <MailPage />
        </div>
      </section> */}
      {/* <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] mt-16">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Use any of these method below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="#" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block rounded-md">
          <Image
            src="/placeholder.svg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div> */}

      <Card className="mx-auto max-w-sm mt-32">
        <CardHeader>
          <CardTitle className="text-2xl">Signin</CardTitle>
          <CardDescription>
            Access your account via the methods below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="text">Email or Username</Label>
              <Input
                id="email_or_username"
                type="text"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Conform Email or Username
            </Button>


            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
```
-->
hello world!