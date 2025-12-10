import { clientRoutes } from "@/client.routes";
import { CONFIG } from "@/lib/config";
import { GamepadIcon, MapPinIcon, MegaphoneIcon } from "lucide-react";
import { Link } from "react-router";

export function LandingPage() {
	return (
		<div className="bg-muted">
			{/* Hero Section */}
			<section className="bg-linear-to-b from-amber-600 via-amber-700 to-amber-800 py-20 text-white">
				<div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
					<h1 className="mb-6 text-5xl font-bold">{CONFIG.appName}'ya Hoş Geldiniz</h1>
					<p className="mx-auto mb-8 max-w-3xl text-xl">
						Türkiye'nin arkeolojik mirasını korumak ve milli kaynaklarımızı gelecek nesillere
						aktarmak için bir araya geldik.
					</p>
					<Link to={clientRoutes.map} className="button lg secondary px-8 text-amber-800">
						Haritamıza Göz Atın
					</Link>
				</div>
			</section>

			{/* Biz Kimiz */}
			<section className="py-20" id="biz-kimiz">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-16 text-center text-4xl font-bold">Biz Kimiz?</h2>
					<div className="prose prose-lg mx-auto max-w-4xl text-gray-700">
						<p className="mb-4">
							{CONFIG.appName}, lise öğrencileri tarafından hazırlanan bir sosyal sorumluluk
							projesidir. Amacımız, Türkiye'nin zengin arkeolojik mirasını korumak ve milli
							kaynaklarımızın farkındalığını artırmaktır.
						</p>
						<p>
							Projemiz kapsamında, arkeolojik kazı alanlarını haritalandırıyor, yeni buluntuların
							ihbar edilmesini sağlıyor ve toplumun bu konuda bilinçlenmesine katkıda bulunuyoruz.
						</p>
					</div>
				</div>
			</section>

			{/* Proje Nedir */}
			<section className="bg-background py-20" id="proje-nedir">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-16 text-center text-4xl font-bold">Proje Nedir?</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<article className="flex flex-col items-center gap-4">
							<MapPinIcon className="size-12" />
							<h3 className="text-xl font-bold">Kazı Haritası</h3>
							<p className="text-center">
								Türkiye genelindeki tüm kazı alanlarını interaktif harita üzerinde görüntüleyin ve
								detaylı bilgi edinin.
							</p>
						</article>
						<article className="flex flex-col items-center gap-4">
							<MegaphoneIcon className="size-12" />
							<h3 className="text-xl font-bold">İhbar Sistemi</h3>
							<p className="text-center">
								Arkeolojik bir buluntuyla karşılaştığınızda hemen ihbar edin ve koruma altına
								alınmasını sağlayın.
							</p>
						</article>
						<article className="flex flex-col items-center gap-4">
							<GamepadIcon className="size-12" />
							<h3 className="text-xl font-bold">Eğitici Oyun</h3>
							<p className="text-center">
								Arkeoloji temalı eğitici oyunumuzla hem eğlenin hem de tarihimiz hakkında bilgi
								edinin.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Ekip Tanıtımı */}
			<section className="py-16" id="ekip">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-12 text-center text-4xl font-bold">Ekibimiz</h2>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
						{[1, 2, 3, 4].map((member) => (
							<div key={member} className="card flex flex-col items-center gap-2 p-8">
								<div className="mx-auto mb-2 h-24 w-24 rounded-full bg-amber-200"></div>
								<h3 className="text-lg font-bold">Ekip Üyesi {member}</h3>
								<p className="text-muted-foreground text-sm">Proje Ekibi</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
