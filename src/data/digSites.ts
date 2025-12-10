export interface DigSite {
  id: number
  name: string
  coordinates: [number, number]
  shortInfo: string
  findings: string[]
  discoveryYear: number
  additionalInfo: string
}

// TODO: Backend'den gerçek kazı alanı verisi çekilecek
// Endpoint: /api/dig-sites
// Response: DigSite[]
export const digSitesData: DigSite[] = [
  {
    id: 1,
    name: "Göbekli Tepe",
    coordinates: [37.2233, 38.9225],
    shortInfo: "Dünyanın bilinen en eski tapınağı",
    findings: ["T-şeklinde kireçtaşı dikilitaşlar", "Hayvan kabartmaları", "Neolitik dönem kalıntıları"],
    discoveryYear: 1963,
    additionalInfo:
      "Göbekli Tepe, Şanlıurfa yakınlarında bulunan, yaklaşık 12.000 yıl öncesine tarihlenen bir arkeolojik alandır. UNESCO Dünya Mirası Listesinde yer almaktadır.",
  },
  {
    id: 2,
    name: "Efes Antik Kenti",
    coordinates: [37.9395, 27.3408],
    shortInfo: "Antik Yunan ve Roma dönemi kent kalıntıları",
    findings: ["Celsus Kütüphanesi", "Büyük Tiyatro", "Artemis Tapınağı kalıntıları", "Roma villası mozaikleri"],
    discoveryYear: 1869,
    additionalInfo:
      "Efes, İzmir ili Selçuk ilçesinde yer alan antik bir kenttir. Artemis Tapınağı, Dünyanın Yedi Harikasından biridir.",
  },
  {
    id: 3,
    name: "Troya Antik Kenti",
    coordinates: [39.9575, 26.2388],
    shortInfo: "Homeros destanlarında geçen efsanevi kent",
    findings: ["Dokuz farklı yerleşim katmanı", "Priamos Hazinesi", "Savunma duvarları", "Seramik eserler"],
    discoveryYear: 1870,
    additionalInfo:
      "Troya, Çanakkale yakınlarında bulunan ve MÖ 3000-400 yılları arasında yerleşim görmüş antik bir kenttir. Heinrich Schliemann tarafından keşfedilmiştir.",
  },
  {
    id: 4,
    name: "Hattuşa",
    coordinates: [40.0192, 34.6153],
    shortInfo: "Hitit İmparatorluğunun başkenti",
    findings: ["Aslan Kapısı", "Kral Kapısı", "Çivi yazılı tablet arşivi", "Kaya tapınakları"],
    discoveryYear: 1834,
    additionalInfo:
      "Hattuşa, Çorum ili sınırları içinde bulunan Hitit İmparatorluğunun başkentidir. UNESCO Dünya Mirası Listesinde yer alır.",
  },
  {
    id: 5,
    name: "Pamukkale-Hierapolis",
    coordinates: [37.9203, 29.1208],
    shortInfo: "Roma dönemi kaplıca kenti ve travertenler",
    findings: ["Roma hamamları", "Antik tiyatro", "Nekropol (ölüler şehri)", "Plutonium (yeraltı tapınağı)"],
    discoveryYear: 1887,
    additionalInfo:
      "Hierapolis, Denizli yakınlarında bulunan antik bir kaplıca kentidir. Pamukkale travertenleri ile birlikte UNESCO Dünya Mirası Listesindedir.",
  },
  {
    id: 6,
    name: "Kapadokya Yeraltı Şehirleri",
    coordinates: [38.6431, 34.8289],
    shortInfo: "Çok katlı yeraltı yerleşimleri",
    findings: ["Derinkuyu yeraltı şehri", "Kaymaklı yeraltı şehri", "Havalandırma sistemleri", "Depolama odaları"],
    discoveryYear: 1963,
    additionalInfo:
      "Kapadokya bölgesinde bulunan yeraltı şehirleri, erken Hristiyanlar tarafından sığınak olarak kullanılmıştır. 8-10 kat derinliğe ulaşabilmektedir.",
  },
  {
    id: 7,
    name: "Perge Antik Kenti",
    coordinates: [36.9608, 30.8531],
    shortInfo: "Antik Pamfilya bölgesinin önemli kenti",
    findings: ["Roma stadyumu", "Anıtsal kapı", "Sütunlu cadde", "Helenistik kule kalıntıları"],
    discoveryYear: 1946,
    additionalInfo:
      "Perge, Antalya yakınlarında bulunan Antik Pamfilya bölgesinin önemli kentlerinden biridir. İyi korunmuş tiyatro ve stadyumu ile ünlüdür.",
  },
  {
    id: 8,
    name: "Çatalhöyük",
    coordinates: [37.6681, 32.8275],
    shortInfo: "Neolitik dönem yerleşim alanı",
    findings: ["Duvar resimleri", "Ana tanrıça figürinleri", "Obsidyen aletler", "İlk kentleşme izleri"],
    discoveryYear: 1958,
    additionalInfo:
      "Çatalhöyük, Konya yakınlarında bulunan 9000 yıllık bir Neolitik yerleşim alanıdır. UNESCO Dünya Mirası Listesinde yer alır.",
  },
]
