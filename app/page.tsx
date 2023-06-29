import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import en from "../public/locale/en"
import es from "../public/locale/es"


export default function Home() {
	const navigation = [
		{ name: "Sobre mi", href: "/about" },
		{ name: "Contáctame", href: "/contact" },
	];
	const t = en
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
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
					<a href='https://drive.google.com/file/d/1dV-4zoxnXzvtvgt4sbvqpgUrtSo-iyJn/view?usp=sharing' target="_blank" rel="noopener noreferrer" className="hover:animate-fill-button relative z-10 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange" style={{ border: '1px solid', padding: '4px' }}>
						{t.download}
					</a>
				</button>

			</div>

		</div>
	);
}
