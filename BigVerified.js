/*
README / Quick Setup

This single-file React (Next.js) page is intended to be used as `pages/index.jsx` in a Next.js + Tailwind project.

Steps to get running, push to GitHub, and deploy to Vercel:

1) Create a new Next.js app locally:
   npx create-next-app@latest bigverified-site
   cd bigverified-site

2) Install Tailwind CSS (followed from Tailwind docs):
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   // then configure tailwind.config.cjs content to include `./pages/**/*.{js,jsx,ts,tsx}`, `./components/**/*.{js,jsx,ts,tsx}`
   // and add the Tailwind directives to globals.css: @tailwind base; @tailwind components; @tailwind utilities;

3) Replace `pages/index.js` or `pages/index.jsx` with this file.

4) Add any images to `public/` (logo.svg, hero.jpg, etc.) or use the included inline SVGs.

5) Run locally to test:
   npm run dev
   Open http://localhost:3000

6) Push to GitHub:
   git init
   git add .
   git commit -m "Initial BigVerified portfolio"
   gh repo create bigverified-site --public --source=. --push
   // OR create a repo on GitHub and add remote, then push

7) Deploy on Vercel:
   - Go to vercel.com and import the GitHub repository.
   - Vercel will detect Next.js automatically.
   - Set build command `npm run build` and output directory (Next.js default) if prompted.
   - Deploy.

Notes:
 - Tailwind must be configured for the styles to work. If you prefer a simpler route, you can use a standard CSS file — ask me and I'll provide a version without Tailwind.
 - This page is intentionally content-rich and modular: you can extract components to `/components` later.

-- End README --
*/

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>BigVerified — Marketing · Consulting · Recruiting · Business Development</title>
        <meta name="description" content="BigVerified: Marketing, Consulting, Social Media Management, Sales Promotion, Recruitment Support, Business Development — Global clients." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* NAV */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-md ring-1 ring-gray-200 bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold">BV</div>
              <div>
                <h1 className="text-lg font-semibold">BigVerified</h1>
                <p className="text-xs text-gray-500">Marketing · Consulting · Recruiting · Business Development</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6 text-sm text-gray-600">
              <a href="#services" className="hover:text-indigo-600">Services</a>
              <a href="#work" className="hover:text-indigo-600">Work</a>
              <a href="#about" className="hover:text-indigo-600">About</a>
              <a href="#contact" className="hover:text-indigo-600">Contact</a>
            </nav>
            <div className="hidden md:block">
              <a href="#contact" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm shadow">Get a Proposal</a>
            </div>
            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md ring-1 ring-gray-200">☰</button>
          </div>
        </header>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-indigo-600 font-semibold">Trusted partner for growth</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight">We help companies grow revenue, talent, and market presence — globally.</h2>
            <p className="mt-4 text-gray-600 max-w-xl">BigVerified provides end-to-end marketing, consulting, social media management, sales promotion, recruitment support, and business development services tailored for companies of all sizes across industries.</p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow">Request a Proposal</a>
              <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg ring-1 ring-gray-200">See Our Work</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-2xl font-bold">+120%</p>
                <p className="text-xs text-gray-500">Average client growth (6–12 months)</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-2xl font-bold">Global</p>
                <p className="text-xs text-gray-500">Clients across multiple continents</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-2xl font-bold">1,000+</p>
                <p className="text-xs text-gray-500">Candidates screened</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="h-80 rounded-2xl bg-gradient-to-br from-indigo-100 to-white p-8 flex items-center justify-center">
              {/* Placeholder hero illustration */}
              <svg width="320" height="240" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full max-h-full">
                <rect width="320" height="240" rx="20" fill="url(#g)" />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#E9D5FF" />
                    <stop offset="1" stopColor="#C7E9FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute -bottom-6 left-6 p-4 bg-white rounded-xl shadow-lg ring-1 ring-gray-100 w-64">
              <p className="text-xs text-gray-500">Featured case</p>
              <p className="font-semibold">SaaS Launch — 43% MRR growth in 90 days</p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-sm text-indigo-600 font-semibold">What we do</h3>
            <h2 className="mt-2 text-3xl font-bold">Services crafted to scale your business</h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {title: 'Marketing Strategy', desc: 'Go-to-market plans, brand positioning, growth experiments.'},
                {title: 'Consulting', desc: 'Operational & strategic guidance backed by data.'},
                {title: 'Social Media Management', desc: 'Content strategy, community, paid campaigns.'},
                {title: 'Sales Promotion', desc: 'Promotions, partnerships, channel activation.'},
                {title: 'Recruitment Support', desc: 'Sourcing, screening, interviewing pipelines.'},
                {title: 'Business Development', desc: 'Partnerships, market entry & revenue ops.'}
              ].map((s, i) => (
                <article key={i} className="p-6 bg-gray-50 rounded-xl ring-1 ring-gray-100">
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                  <div className="mt-4 text-xs text-indigo-600">Learn more →</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WORK / CASE STUDIES */}
        <section id="work" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-sm text-indigo-600 font-semibold">Selected work</h3>
          <h2 className="mt-2 text-3xl font-bold">Case studies & outcomes</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-xs text-gray-500">Marketing</p>
              <h4 className="mt-2 font-semibold">Consumer Brand Growth</h4>
              <p className="mt-2 text-sm text-gray-600">Social + paid strategy that drove 2x revenue in 6 months.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-xs text-gray-500">Recruitment</p>
              <h4 className="mt-2 font-semibold">Enterprise Hiring Program</h4>
              <p className="mt-2 text-sm text-gray-600">Executed a hiring funnel that reduced time-to-hire by 40%.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-xs text-gray-500">Business Development</p>
              <h4 className="mt-2 font-semibold">Channel Expansion</h4>
              <p className="mt-2 text-sm text-gray-600">Partnerships and GTM that unlocked 3 new regions.</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-sm text-indigo-600 font-semibold">About BigVerified</h3>
              <h2 className="mt-2 text-3xl font-bold">A practical partner for measurable growth</h2>
              <p className="mt-4 text-gray-700">We combine strategic consulting with hands-on execution. Whether you need a campaign that converts, a hiring pipeline that scales, or a channels plan that opens new markets — BigVerified builds, runs, and optimizes with measurable KPIs.</p>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li>• Cross-functional teams (marketing, BD, recruitment, analytics)</li>
                <li>• Data-driven processes and transparent reporting</li>
                <li>• Flexible engagement models — project, retainer, or embedded teams</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold">Who we work with</h4>
              <p className="mt-2 text-sm text-gray-600">Startups, scale-ups, and enterprises across tech, finance, consumer, and B2B sectors — anywhere in the world.</p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="p-3 ring-1 ring-gray-100 rounded-lg text-center">Client A</div>
                <div className="p-3 ring-1 ring-gray-100 rounded-lg text-center">Client B</div>
                <div className="p-3 ring-1 ring-gray-100 rounded-lg text-center">Client C</div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-sm text-indigo-600 font-semibold">Get in touch</h3>
            <h2 className="mt-2 text-2xl font-bold">Let’s discuss your next growth move</h2>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Your name" className="p-3 ring-1 ring-gray-100 rounded-lg" />
              <input placeholder="Company" className="p-3 ring-1 ring-gray-100 rounded-lg" />
              <input placeholder="Email" className="p-3 ring-1 ring-gray-100 rounded-lg" />
              <input placeholder="Phone (optional)" className="p-3 ring-1 ring-gray-100 rounded-lg" />
              <textarea placeholder="How can we help?" className="md:col-span-2 p-3 ring-1 ring-gray-100 rounded-lg h-32" />

              <div className="md:col-span-2 flex items-center justify-between">
                <p className="text-sm text-gray-500">Or email us at <span className="text-indigo-600">hello@bigverified.com</span></p>
                <button type="button" className="bg-indigo-600 text-white px-5 py-3 rounded-lg">Send message</button>
              </div>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <div>© {new Date().getFullYear()} BigVerified — All rights reserved.</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-indigo-600">Privacy</a>
              <a href="#" className="hover:text-indigo-600">Terms</a>
              <a href="#" className="hover:text-indigo-600">Sitemap</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
