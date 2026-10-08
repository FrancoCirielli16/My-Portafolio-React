import Link from "next/link";
import React from "react";
import es from "public/locale/es";
import en from "public/locale/en";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
	const t = lng.startsWith("es") ? es : en;
	const other = lng.startsWith("es") ? "en" : "es";

	return (
		<div className="relative min-h-screen overflow-x-clip bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-zinc-100">
			<header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
				<nav>
					<ul className="flex items-center gap-6 text-sm text-zinc-400">
						<li>
							<Link href={`/${lng}/about`} className="hover:text-zinc-100">
								{t.aboutme}
							</Link>
						</li>
						<li>
							<Link href={`/${lng}/contact`} className="hover:text-zinc-100">
								{t.Contact}
							</Link>
						</li>
					</ul>
				</nav>
				<Link
					href={`/${other}`}
					className="border border-zinc-700 px-3 py-1 text-xs tracking-wide text-zinc-300 hover:border-zinc-400 hover:text-white"
				>
					{other.toUpperCase()}
				</Link>
			</header>

			<main className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-20 pt-8 sm:pt-16">
				<p className="text-sm text-zinc-500">Buenos Aires, Argentina</p>
				<h1 className="mt-3 max-w-4xl font-display text-5xl leading-none text-zinc-50 sm:text-7xl">
					Franco Cirielli
				</h1>
				<p className="mt-5 max-w-2xl text-lg text-zinc-200 sm:text-xl">{t.role}</p>
				<p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">{t.descripcion1}</p>

				<div className="mt-8 flex flex-wrap gap-3">
					<a
						href={t.CV}
						className="inline-flex items-center border border-zinc-100 bg-zinc-100 px-4 py-2 text-sm text-zinc-950 hover:bg-white"
					>
						{t.download}
					</a>
					<Link
						href={`/${lng}/contact`}
						className="inline-flex items-center border border-zinc-600 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-300"
					>
						{t.contactCta}
					</Link>
				</div>

				<section className="mt-16">
					<h2 className="text-xs uppercase tracking-[0.18em] text-zinc-500">{t.worksTitle}</h2>
					<ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
						{t.works.map((work) => (
							<li key={work.title} className="border border-zinc-800 bg-zinc-950/60 p-4">
								<h3 className="font-display text-2xl text-zinc-100">{work.title}</h3>
								<p className="mt-2 text-sm leading-6 text-zinc-400">{work.body}</p>
							</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}
