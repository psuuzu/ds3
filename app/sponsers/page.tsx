import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SponsorCard from "../components/sponsors/SponserCard";
import InfiniteBanner from "../components/sponsors/InfiniteBanner";
import Section from "../components/Section";

const speakers = [
  '/sponsors/citadel.svg',
  '/sponsors/csiro.svg',
  '/sponsors/deloitte.svg',
  '/sponsors/liberty.svg',
  '/sponsors/macquarie.svg',
  '/sponsors/maltem.png',
  '/sponsors/mantel-group.svg',
  '/sponsors/plotly.png',
  '/sponsors/rea-group.svg',
  '/sponsors/seek.svg',
]

const sponsors = {
  gold: [
    {
      name: 'Melbourne Centre for Data Science',
      category: 'Education',
      image: '/sponsors/mcds.png',
      link: 'https://science.unimelb.edu.au/mcds',
    },
    {
      name: 'Citadel',
      category: 'Financial services',
      image: '/sponsors/citadel.svg',
      link: 'https://www.citadel.com/'
    },
    {
      name: 'Macquarie',
      category: 'Financial services',
      image: '/sponsors/macquarie.svg',
      link: 'https://www.macquarie.com/'
    },
    {
      name: 'Ernst & Young',
      category: 'Professional services',
      image: '/sponsors/ey.svg',
      link: 'https://www.ey.com/'
    },
    {
      name: 'IBM',
      category: 'Information technology',
      image: '/sponsors/ibm.svg',
      link: 'https://www.ibm.com/'
    },
    {
      name: 'Nasdaq',
      category: 'Financial services',
      image: '/sponsors/nasdaq.svg',
      link: 'https://www.nasdaq.com/'
    },
    {
      name: 'Jane Street',
      category: 'Financial services',
      image: '/sponsors/jane-street.svg',
      link: 'https://www.janestreet.com/'
    },
    {
      name: 'Nomura',
      category: 'Financial services',
      image: '/sponsors/nomura.svg',
      link: 'https://www.nomura.com/'
    },
    {
      name: 'WhyHive',
      category: 'Software',
      image: '/sponsors/whyhive.png',
      link: 'https://www.whyhive.com/'
    },
  ]
}


export default function SponsersPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <Section>
          <div className="">
            <h3 className="text-5xl sm:text-4xl text-center mx-auto mb-5 !leading-tight">Sponsorships</h3>
            <p className="text-xl text-text-secondary text-center mx-auto !leading-relaxed">Organisations that have sponsored us in the past</p>
          </div>
        </Section>

        <Section>
          {/* Gold color #644d00 */}
          {/* <h4 className="text-2xl text-center">Gold Sponsors</h4> */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {sponsors.gold.map(item => (
              <SponsorCard
                color="rgb(var(--background))"
                name={item.name}
                category={item.category}
                image={item.image}
                link={item.link}
                filter={item.filter || ''}
              />
            ))}
          </div>
        </Section>

        <div className="my-48 sm:my-24">
          <div className="flex flex-col gap-10 max-w-screen-xl mx-auto mb-10 p-4">
            <h4 className="text-2xl text-center">Past Speakers From</h4>
          </div>
          <InfiniteBanner images={speakers} gap={80} speed={50000} />
        </div>

        <Section>
          <div className="grid grid-cols-[auto,1fr] gap-10">
            <div className="flex flex-col gap-10 max-w-lg my-auto">
              <h4 className="text-2xl">Become a Sponsor Today</h4>
              <p className="text-text-secondary text-xl leading-relaxed">Empower student excellence and fuel future leaders in data science by sponsoring DS Cubed. Your support propels students into the forefront of data-driven innovation.</p>
              <Link
                href="mailto:hello@dscubed.org.au" 
                target="_blank"
                className="flex gap-2 w-max bg-foreground text-background px-10 py-4 font-medium rounded-md text-lg cursor-pointer"
              >
                <span className="my-auto w-max">Get In Touch</span>
                <ArrowRightIcon className="my-auto w-7 h-7"/>
              </Link>
            </div>
            <Image
              className="w-full max-h-[550px] object-cover rounded-md"
              src="/dalle-money.png"
              width={1024}
              height={1024}
              alt="DALL-E generated image of money and currency"
            ></Image>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}