import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import es from "public/locale/es";
import en from "public/locale/en";

export default function Home({ params: { lng }}:{params:{lng:string}}) {
	
	const t = lng.startsWith("es") ? es:en;
	const idiom = lng.startsWith("es") ? "en":"es";
	const navigation = [
		{ name: t.aboutme, href: `/${lng}/about` },
		{ name: t.Contact, href: `/${lng}/contact` },
	];
	return (
		<div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<button className="my-16 animate-fade-in absolute right-10 -top-10">
				<a href={`/${idiom}`} className="hover:text-gray-800 hover:animate-fill-button relative z-10 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange" style={{ border: '1px solid', padding: '4px' }}>
						{t.LNG}
				</a>
			</button>
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Franco Cirielli
			</h1>

			<div className="hidden w-screen h-[1.5px] animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" ></div>
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					{t.descripcion1}
					<br/>
					{t.descripcion2}
				</h2>
				<br />
				<button>
					<a href={t.CV} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 hover:animate-fill-button relative z-10 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange" style={{ border: '1px solid', padding: '4px' }}>
						{t.download}
					</a>
				</button>

			</div>

		</div>
	);
}
