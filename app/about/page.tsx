
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import CardIcon from "../components/cardIcon";
import Cardleng from "../components/cardleng";



export const revalidate = 60;
export default async function ProjectsPage() {

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Sobre mi
					</h2>
					<p className="mt-4 text-zinc-400">

					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
					<Card>
						<article className="relative w-full h-full p-4 md:p-8">

							<h2
								id="featured-post"
								className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
							>
								Informacion
							</h2>
							<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								Vivo en La Plata, Buenos Aires, Argentina, donde estoy persiguiendo mi pasión por la informática en la Universidad Nacional de La Plata, específicamente en la Facultad de Informática (UNLP Informática).

								Desde hace más de dos años, me he dedicado al desarrollo y estudio de software. Me considero un apasionado desarrollador en constante crecimiento y aprendizaje. Mi objetivo actual es formar parte de un equipo que me brinde la oportunidad de seguir aprendiendo, colaborar con otros profesionales y establecer un entorno laboral agradable y estimulante.

								Mis habilidades se centran en el desarrollo back-end utilizando lenguajes como Python y Java, junto con sus diversas herramientas. Cuento con un amplio conocimiento en programación orientada a objetos (POO) y diseño UML, lo que me permite crear soluciones robustas y eficientes.

								A lo largo de mi trayecto en el mundo de la programación, he trabajado con diversos lenguajes de programación, explorando tanto paradigmas imperativos como funcionales. Esta experiencia me ha brindado una perspectiva amplia y versátil, lo que me permite abordar los desafíos de manera creativa y eficaz.

								Fuera del ámbito tecnológico, tengo una gran pasión por el tenis y disfruto mucho jugarlo. Además, valoro el trabajo en equipo y considero que la colaboración es fundamental para alcanzar resultados exitosos. Mi intuición y capacidad para trabajar en conjunto me permiten adaptarme fácilmente a diferentes dinámicas y contribuir de manera efectiva a cualquier proyecto
							</p>
						</article>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
						<Card>
							<Cardleng></Cardleng>
						</Card>
						<Card>
							<div className="card">
								<CardIcon></CardIcon>
							</div>
						</Card>
					</div>
				</div>



			</div>
		</div>
	);
}





