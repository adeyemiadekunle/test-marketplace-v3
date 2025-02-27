import {
    useContract,
    useValidEnglishAuctions
} from "@thirdweb-dev/react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from "next/link";
import siteMetadata from '../../data/siteMetadata';
import Container from "../../components/Container/Container";
import NFTGrid from "../../components/NFT/NFTGrid/NFTGridETHDropGrifters";
import { ETH_MARKETPLACE_ADDRESS } from "../../const/contractAddresses";
import styles from "../../styles/Buy.module.css";
import { ETHDrop } from "../../const/contractAddresses";

  
const Grifters: NextPage = () => {
    const { contract: marketplace } = useContract(
        ETH_MARKETPLACE_ADDRESS,
        "marketplace-v3"
      );
    
    const { data: nfts, isLoading } = useValidEnglishAuctions(
        marketplace,
       { tokenContract: ETHDrop});
    
       return (
        <>
        <Head>
            <title>{siteMetadata.siteName} | Grifters</title>
          </Head>
          <div className="">  
        <Container maxWidth="lg">
            <h1 className="text-3xl font-bold">ETH DROP: Grifters</h1>
                <Link href="/ethdrop/paperhands" className={styles.link}>
                  Paper Hands
                </Link>
                <Link href="/ethdrop/paperhands" className={styles.link}>
                  ||
                </Link>
                <Link href="/ethdrop/grifters" className={styles.link}>
                  Grifters
                </Link>
                <Link href="/ethdrop/grifters" className={styles.link}>
                  ||
                </Link>
                <Link href="/ethdrop/ethdrop" className={styles.link}>
                  Collection
                </Link>
                <Link href="/ethdrop/ethdrop" className={styles.link}>
                  ||
                </Link>
                <Link href="/ethdrop/bags" className={styles.link}>
                  Bags
                </Link> 
            <p className="mt-8">Just another grifter on a box. You know the game, Rek don't get Rekt.</p>
            <NFTGrid
              data={nfts}
              isLoading={isLoading}
              emptyText={"Sorry. Looks like no grifters are in the alley today."} />
          </Container>
          </div>
          </>
      );
    }

export default Grifters;