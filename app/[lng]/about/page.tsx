
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import CardIcon from "../components/cardIcon";
import Cardleng from "../components/cardleng";
import es from "public/locale/es";
import en from "public/locale/en";


export const revalidate = 60;
export default async function ProjectsPage({ params: { lng }}:{params:{lng:string}}) {
	const t = lng.startsWith("es") ? es:en; 
	return (
		<div className="relative pb-16">
			<Navigation lng={lng}></Navigation>
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						{t.aboutme}
					</h2>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
					<Card>
						<article className="relative w-full h-full p-4 md:p-8">

							<h2
								id="featured-post"
								className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
							>
								{t.titule_info}
							</h2>
							<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								{t.myinfo}
							</p>
						</article>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
						<Card>
							<Cardleng t={t}></Cardleng>
						</Card>
						<Card>
							<div className="card">
								<CardIcon t={t}></CardIcon>
							</div>
						</Card>
					</div>
				</div>



			</div>
		</div>
	);
}





