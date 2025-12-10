import { FormField } from "@/components/form/form-field";
import { LocationPicker } from "@/components/location-picker";
import { useForm } from "@/hooks/use-form";
import { cn } from "@/lib/utils";
import { useState } from "react";
import z from "zod";

const messageMaxLen = 200;
const messageMinLen = 80;

export function ReportPage() {
	const [messageLen, setMessageLen] = useState(0);
	const [image, setImage] = useState<File | undefined>(undefined);

	const form = useForm({
		schema: z.object({
			contact: z.string("İletişim bilgisi zorunludur.").min(5, "İletişim bilgisi zorunludur."),
			location: z.string("Konum bilgisi zorunludur.").min(2, "Konum bilgisi zorunludur."),
			message: z
				.string("Açıklama alanı zorunludur.")
				.min(messageMinLen, "Açıklama en az 80 karakter olmalıdır.")
				.max(messageMaxLen, "Açıklama 200 karakterden uzun olamaz."),
			image: z
				.instanceof(File)
				.optional()
				.refine((file) => {
					if (!file) return file;
					return file.size <= 2 * 1024 * 1024; // 2MB in bytes
				}, "Dosya boyutu en fazla 2MB olmalıdır."),
		}),
		onSubmit: ({ values }) => {
			console.log(values);
		},
	});

	return (
		<div className="bg-muted min-h-screen py-8">
			<div className="card mx-auto max-w-4xl p-4">
				<header className="bg-card">
					<h1 className="mb-3">Arkeolojik Buluntu İhbar Formu</h1>
					<p>
						Bir arkeolojik buluntuyla karşılaştıysanız, lütfen aşağıdaki formu doldurarak bize
						bildirin. İhbarınız değerlendirilerek gerekli koruma önlemleri alınacaktır.
					</p>
				</header>

				<form {...form.methods} className="flex flex-col gap-6">
					<FormField
						form={form}
						id="location"
						name="location"
						label={
							<span>
								İletişim Bilgisi <span className="text-red-500">*</span>
							</span>
						}
					>
						<input
							type="text"
							autoComplete="email"
							placeholder="Telefon numarası veya e-posta adresi"
						/>
					</FormField>
					<FormField
						form={form}
						id="location"
						name="location"
						label={
							<span>
								Konum <span className="text-red-500">*</span>
							</span>
						}
					>
						<LocationPicker placeholder="Örn: Çankaya Ankara" />
					</FormField>

					<div>
						<FormField
							form={form}
							id="message"
							name="message"
							label={
								<span>
									Açıklama <span className="text-red-500">*</span>
								</span>
							}
						>
							<textarea
								onChange={(e) => setMessageLen(e.target.value.length)}
								rows={6}
								minLength={messageMinLen}
								maxLength={messageMaxLen}
								placeholder={`Buluntuyu detaylı bir şekilde açıklayın. Ne zaman, nerede ve hangi koşullarda buldunuz? Buluntunun görünümü, boyutu ve durumu hakkında bilgi verin. En az ${messageMinLen} karakter olmalıdır.`}
							/>
						</FormField>
						<div className="mt-2 flex items-center justify-between">
							<p
								className={cn(
									"ml-auto text-sm",
									messageLen < messageMinLen && "text-muted-foreground",
									messageLen >= messageMinLen && "text-green-600",
									messageLen >= messageMaxLen && "text-rose-600",
								)}
							>
								{messageLen} / {messageMaxLen} karakter
							</p>
						</div>
					</div>

					<div>
						<FormField
							form={form}
							id="image"
							name="image"
							label={
								<span>
									Görsel Yükleme{" "}
									<span className="text-muted-foreground font-normal">(İsteğe Bağlı)</span>
								</span>
							}
						>
							<input
								type="file"
								accept="image/*"
								onChange={(e) => {
									setImage(e.target.files?.[0]);
								}}
							/>
						</FormField>
						{image && <p className="mt-2 text-sm text-gray-600">Seçilen dosya: {image.name}</p>}
					</div>

					<button type="submit">İhbarda Bulun</button>
				</form>

				<div className="bg-secondary text-secondary-foreground mt-8 rounded-lg px-6 py-4">
					<h3 className="mb-2 font-semibold">Önemli Notlar:</h3>
					<ul className="list-inside list-disc space-y-1 text-sm">
						<li>Buluntuya dokunmayın ve yerinden oynatmayın</li>
						<li>Mümkünse buluntu yerini işaretleyin</li>
						<li>Fotoğraf çekerken ölçek referansı ekleyin</li>
						<li>Koordinat bilgisi varsa ekleyin</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
