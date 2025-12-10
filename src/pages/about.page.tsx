export function AboutPage() {
	return (
		<div className="bg-muted min-h-screen py-8">
			<div className="card mx-auto max-w-4xl p-4">
				<header className="bg-card">
					<h1 className="mb-3">Hakkımızda</h1>
				</header>
				<article>
					<section className="mb-10">
						<h2 className="mb-4 text-2xl font-bold text-amber-800">Projemiz</h2>
						<p className="mb-4 leading-relaxed">
							Archeo, Türkiye'nin zengin arkeolojik mirasını korumak ve gelecek nesillere aktarmak
							amacıyla lise öğrencileri tarafından geliştirilen bir sosyal sorumluluk projesidir.
							Projemiz, milli kaynaklarımızın farkındalığını artırmayı ve toplumun bu konuda
							duyarlılığını geliştirmeyi hedeflemektedir.
						</p>
						<p className="leading-relaxed">
							Ülkemizin binlerce yıllık tarihi boyunca birçok medeniyete ev sahipliği yapmış olması,
							topraklarımızı arkeolojik açıdan son derece zengin kılmaktadır. Ancak bu mirasın
							korunması ve gelecek nesillere aktarılması, toplumun tüm kesimlerinin katılımını
							gerektiren önemli bir sorumluluktur.
						</p>
					</section>

					<section className="mb-10">
						<h2 className="mb-4 text-2xl font-bold text-amber-800">Misyonumuz</h2>
						<div className="rounded-lg bg-amber-50 p-6">
							<ul className="space-y-3">
								<li className="flex items-start">
									<span className="mr-3 font-bold text-amber-700">•</span>
									<span>
										Türkiye'deki arkeolojik kazı alanlarını dijital ortamda haritalandırmak
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3 font-bold text-amber-700">•</span>
									<span>
										Yeni arkeolojik buluntuların hızlı bir şekilde raporlanmasını sağlamak
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3 font-bold text-amber-700">•</span>
									<span>Toplumun arkeolojik farkındalığını eğitici içeriklerle artırmak</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3 font-bold text-amber-700">•</span>
									<span>
										Milli kaynaklarımızın korunmasına gençlerin aktif katılımını teşvik etmek
									</span>
								</li>
							</ul>
						</div>
					</section>

					<section className="mb-10">
						<h2 className="mb-4 text-2xl font-bold text-amber-800">Vizyonumuz</h2>
						<p className="leading-relaxed">
							Türkiye'nin arkeolojik mirasının korunması konusunda toplumsal farkındalığın
							artırılması ve bu alanda dijital çözümler üreterek genç nesillerin aktif rol almasını
							sağlamak vizyonumuzun temelidir. Geleceğin teknolojilerini kullanarak, geçmişimizin
							korunmasına katkıda bulunmayı hedefliyoruz.
						</p>
					</section>

					<section className="mb-10">
						<h2 className="mb-4 text-2xl font-bold text-amber-800">Ekibimiz</h2>
						<p className="mb-6 leading-relaxed">
							Projemiz, tarih ve arkeoloji konusunda tutkulu, teknolojiye ilgi duyan lise
							öğrencilerinden oluşan bir ekip tarafından geliştirilmektedir. Ekibimiz, danışman
							öğretmenlerimizin rehberliğinde, web teknolojileri, coğrafi bilgi sistemleri ve
							kullanıcı deneyimi tasarımı konularında çalışmalar yürütmektedir.
						</p>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div className="rounded-lg bg-gray-50 p-4">
								<h3 className="mb-2 font-bold text-amber-800">Geliştirme Ekibi</h3>
								<p className="text-sm">
									Web platformu geliştirme, harita entegrasyonu ve kullanıcı arayüzü tasarımından
									sorumludur.
								</p>
							</div>
							<div className="rounded-lg bg-gray-50 p-4">
								<h3 className="mb-2 font-bold text-amber-800">İçerik Ekibi</h3>
								<p className="text-sm">
									Arkeolojik alan araştırmaları, içerik üretimi ve eğitici materyallerin
									hazırlanmasından sorumludur.
								</p>
							</div>
							<div className="rounded-lg bg-gray-50 p-4">
								<h3 className="mb-2 font-bold text-amber-800">Sosyal Medya Ekibi</h3>
								<p className="text-sm">
									Projenin tanıtımı, sosyal medya yönetimi ve toplumsal farkındalık çalışmalarından
									sorumludur.
								</p>
							</div>
							<div className="rounded-lg bg-gray-50 p-4">
								<h3 className="mb-2 font-bold text-amber-800">Koordinasyon Ekibi</h3>
								<p className="text-sm">
									Proje yönetimi, ekipler arası koordinasyon ve iletişimden sorumludur.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-bold text-amber-800">İletişim</h2>
						<p className="mb-4 leading-relaxed">
							Projemiz hakkında daha fazla bilgi almak, geri bildirimde bulunmak veya işbirliği
							önerilerinde bulunmak için bizimle iletişime geçebilirsiniz.
						</p>
						<div className="rounded-lg bg-amber-50 p-6">
							<p className="">
								<strong>Not:</strong> Bu bir lise sosyal sorumluluk projesidir. Gerçek arkeolojik
								buluntuları yetkili kurumlara bildirmeniz gerekmektedir.
							</p>
						</div>
					</section>
				</article>
			</div>
		</div>
	);
}
