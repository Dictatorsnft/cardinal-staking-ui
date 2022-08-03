import { lighten } from '@mui/material'
import { Footer } from 'common/Footer'
import { Header } from 'common/Header'
import { contrastColorMode, pubKeyUrl, shortPubKey } from 'common/utils'
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


        <Header />
        <div className="header">
        <span
            className="ml-6 text-2xl font-semibold"
          >
            One Stop Solution For <b>Everything Web3</b> <br />
           <br />
          </span>
        </div>
        <div className="staking1" allign-center > 
        <span
            className="ml-3 text-2xl font-semibold"
          >
            Stake <b>Dictators</b>
          </span>
        <h3>&nbsp; &nbsp;Earn $NUKE by staking your Dictator. &nbsp; Access <br /> &nbsp; &nbsp;the most premium perks of NUKEDAO; get whitelisted <br /> &nbsp; &nbsp;for $NUKE based mints and earn $SOL rewards.</h3>
        <a href="https://citadel.nukepad.io/dictators"><button className="button button5">  <img src="/nuke.png" /> &nbsp;&nbsp;STAKE&nbsp;YOUR DICTATOR</button></a>  
        </div>
<br />
<br />
        <div className="nuketopia" allign-center > 
        <span
            className="ml-4 text-2xl font-semibold"
          >
            Enter <b>Nuketopia</b> <br />
           <br /> &nbsp; &nbsp;<span>Coming Soon...</span> 
          </span>
        </div>
        <Footer />
      </div>
  )
}

export default Home
function bgColor(bgColor: any) {
  throw new Error('Function not implemented.')
}

