export function GamePage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="rounded-lg bg-white p-8 shadow-lg">
					<h1 className="mb-6 text-4xl font-bold text-gray-800">Arkeoloji Oyunu</h1>
					<p className="mb-8 text-gray-600">
						Eğitici arkeoloji oyunumuz yakında burada yayınlanacak! Oyunumuzda kazı simülasyonu,
						buluntu tanıma ve tarihi bilgiler test edebileceksiniz.
					</p>

					{/* Unity WebGL Game Container - Placeholder */}
					<div className="mb-8 rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 p-12 text-center">
						<div className="mb-6">
							<div className="mb-4 text-6xl">🎮</div>
							<h2 className="mb-2 text-2xl font-bold text-gray-700">Oyun Yakında Gelecek</h2>
							<p className="text-gray-600">Unity WebGL oyunumuz geliştirme aşamasındadır.</p>
						</div>

						{/* Bu div Unity WebGL build'i embed edilecek yer */}
						<div id="unity-container" className="flex min-h-[600px] items-center justify-center">
							<div className="text-gray-500">
								<p className="mb-2">Unity WebGL oyunu buraya yerleştirilecek</p>
								<p className="text-sm">#unity-container</p>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						<div className="rounded-lg bg-amber-50 p-6">
							<h3 className="mb-3 text-xl font-bold text-amber-800">Kazı Simülasyonu</h3>
							<p className="text-gray-700">
								Sanal bir kazı alanında buluntu arayın, temizleyin ve kataloglayın.
							</p>
						</div>
						<div className="rounded-lg bg-amber-50 p-6">
							<h3 className="mb-3 text-xl font-bold text-amber-800">Tarihi Bilgiler</h3>
							<p className="text-gray-700">
								Türkiye'nin farklı dönemlerine ait eserleri tanıyın ve öğrenin.
							</p>
						</div>
						<div className="rounded-lg bg-amber-50 p-6">
							<h3 className="mb-3 text-xl font-bold text-amber-800">Liderlik Tablosu</h3>
							<p className="text-gray-700">
								En yüksek puanları toplayarak liderlik tablosunda yerinizi alın.
							</p>
						</div>
					</div>

					<div className="mt-8 rounded-lg bg-blue-50 p-6">
						<h3 className="mb-3 font-bold text-blue-900">Teknik Notlar:</h3>
						<ul className="list-inside list-disc space-y-2 text-sm text-blue-800">
							<li>Oyun Unity WebGL formatında geliştirilmektedir</li>
							<li>Modern tarayıcılarda (Chrome, Firefox, Edge) çalışacaktır</li>
							<li>Mobil cihazlarda performans sınırlamaları olabilir</li>
							<li>İnternet bağlantısı gereklidir</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
