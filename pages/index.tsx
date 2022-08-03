import { Footer } from 'common/Footer'
import { Header } from 'common/Header'
import { pubKeyUrl, shortPubKey } from 'common/utils'
import { useAllStakePools } from 'hooks/useAllStakePools'
import { useStats } from 'hooks/useStats'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEnvironmentCtx } from 'providers/EnvironmentProvider'
import { FaQuestion } from 'react-icons/fa'

export function Placeholder() {
  return (
    <div className="h-[300px] animate-pulse rounded-lg bg-white bg-opacity-5 p-10"></div>
  )
}

function Home() {
  const { environment } = useEnvironmentCtx()
  const allStakePools = useAllStakePools()
  const router = useRouter()
  const stats = useStats()

  return (
    <div>
      <Head>
        <title>Dictators</title>
        <meta name="description" content="Stake your dictators to claim NUKE" />
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          data-domain="citadel.dictators.xyz"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>

      <div>
        {stats.isFetched && stats.data && (
          <div className="flex flex-wrap justify-center md:flex-nowrap lg:flex lg:flex-row">
            {Object.keys(stats.data).map((name, i) => {
              return (
                <div key={i} className="mx-5 gap-1 pt-2 text-xs">
                  <span className="font-semibold">{name}:</span>
                  <span className="ml-2 text-green-500">

                    {Number(
                      stats.data![name]!.data.parsed.value
                    ).toLocaleString()}
                  </span>
                </div>
              )
            })}
          </div>
        )}
        <Header />
        <button type="button" class="btn btn-link">Link link <link rel="import" href="https://cardinal.so/dictators" /></button>
        <Footer />
      </div>
    </div>
  )
}

export default Home
