
// KERA Architecture & Design - პროექტების სრული მონაცემთა ბაზა

export const projectsData = [
 
  // --- (ინტერიერის დიზაინი) ---

  {
    id: 1,
    category: "interior",
    location: { ka: "თბილისი, საქართველო", en: "Tbilisi, Georgia" },
    area: "240 მ²",
    year: "2026",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "ვაკის პენტჰაუსის ინტერიერი", en: "Vake Penthouse Interior" },
    description: { 
      ka: "მონუმენტური მინიმალიზმი, ნატურალური მუხის პანელები და ფარული განათება.", 
      en: "Monumental minimalism featuring natural oak paneling and hidden linear lighting." 
    },
    materials: { 
      ka: ["ნატურალური მუხა", "იტალიური ტრავერტინი", "შავი ფოლადი", "მიკროცემენტი"], 
      en: ["Natural Oak", "Italian Travertine", "Black Steel", "Microcement"] 
    },
    details: { 
      ka: "პროექტი ორიენტირებულია სივრცის მაქსიმალურ აერაციასა და ბუნებრივი განათების გამოყენებაზე. იატაკიდან ჭერამდე არსებული ვიტრაჟული ფანჯრები ჰარმონიულად უერთდება ნატურალური ხის თბილ ტექსტურებს, ხოლო ფარული ხაზოვანი განათება საღამოს საათებში ქმნის სივრცულ სიღრმესა და ექსკლუზიურ ატმოსფეროს.", 
      en: "The project focuses on maximizing space ventilation and utilizing natural lighting. Floor-to-ceiling panoramic windows seamlessly blend with warm natural wood textures, while hidden linear lighting creates spatial depth and an exclusive atmosphere in the evening." 
    }
  },
  {
    id: 2,
    category: "interior",
    location: { ka: "ბათუმი, საქართველო", en: "Batumi, Georgia" },
    area: "180 მ²",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "ზღვისპირა ოაზისი", en: "Seaside Oasis" },
    description: { 
      ka: "ორგანიკული ინტერიერის დიზაინი იაპონურ-სკანდინავიურ (Japandi) სტილში.", 
      en: "Organic interior design crafted in minimalist Japandi style." 
    },
    materials: { 
      ka: ["ღია თეთრი მუხა", "ტექსტურული გაჯი", "ნატურალური სელი", "ქვა"], 
      en: ["Light White Oak", "Textured Plaster", "Natural Linen", "Stone"] 
    },
    details: { 
      ka: "იაპონური მინიმალიზმისა და სკანდინავიური სიმყუდროვის სინთეზი. ინტერიერში გამოყენებულია მხოლოდ ეკოლოგიურად სუფთა მასალები: ტექსტურული გაჯის კედლები, ნატურალური სელის ტექსტილი და ხელით დამუშავებული ხის ავეჯი. დიზაინი ემსახურება სულიერ სიმშვიდესა და ჰარმონიას.", 
      en: "A synthesis of Japanese minimalism and Scandinavian comfort. The interior uses only eco-friendly materials: textured plaster walls, natural linen textiles, and handcrafted wooden furniture designed to foster inner tranquility and harmony." 
    }
  },
  {
    id: 3,
    category: "interior",
    location: { ka: "თბილისი, საქართველო", en: "Tbilisi, Georgia" },
    area: "520 მ²",
    year: "2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "Creative HQ საოფისე სივრცე", en: "Creative HQ Office Space" },
    description: { 
      ka: "ინდუსტრიული და თანამედროვე არქიტექტურული სტილის სინთეზი IT ჰოლდინგისთვის.", 
      en: "Synthesis of industrial and modern architectural style for an IT holding." 
    },
    materials: { 
      ka: ["ღია არქიტექტურული ბეტონი", "აკუსტიკური თექა", "ანოდირებული ალუმინი"], 
      en: ["Exposed Architectural Concrete", "Acoustic Felt", "Anodized Aluminum"] 
    },
    details: { 
      ka: "საოფისე სივრცე დაყოფილია მოქნილ (Agile) სამუშაო ზონებად, ინდივიდუალურ აკუსტიკურ კაფსულებსა და ღია ლაუნჯებად. ინდუსტრიული ბეტონის ჭერი დაბალანსებულია მწვანე ვერტიკალური ბაღებითა და ხმის იზოლაციის უახლესი ტექნოლოგიებით, რაც უზრუნველყოფს პროდუქტიულ სამუშაო გარემოს.", 
      en: "The office space is divided into flexible (Agile) work zones, individual acoustic capsules, and open lounges. The industrial concrete ceiling is balanced by vertical indoor gardens and state-of-the-art sound insulation technologies, ensuring a productive workflow." 
    }
  },
  {
    id: 10,
    category: "interior",
    location: { ka: "თბილისი, ჭავჭავაძე", en: "Tbilisi, Chavchavadze" },
    area: "310 მ²",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "თანამედროვე არტ-დეკო დუპლექსი", en: "Modern Art-Deco Duplex" },
    description: { 
      ka: "თანამედროვე ფუფუნებისა და კლასიკური არტ-დეკო ელემენტების სინთეზი.", 
      en: "Synthesis of modern luxury and classical Art-Deco accents." 
    },
    materials: { 
      ka: ["მარმარილო Calacatta", "თითბერის დეტალები", "კაკლის ხე", "ველვეტი"], 
      en: ["Calacatta Marble", "Brass Details", "Walnut Wood", "Velvet"] 
    },
    details: { 
      ka: "ორდონიანი დუპლექსის ინტერიერი გამორჩეულია ექსკლუზიური დეტალებით: იტალიური Calacatta მარმარილოს ბუხარი, ოქროსფერი თითბერის ჩანართები და კაკლის ხის ავეჯი. პროექტში განსაკუთრებული ყურადღება დაეთმო ინდივიდუალური განათების სცენარების შექმნას.", 
      en: "The interior of this two-level duplex features exclusive details: an Italian Calacatta marble fireplace, golden brass inserts, and custom walnut furniture. Special attention was paid to creating bespoke lighting scenarios." 
    }
  },

 
  // ---  (არქიტექტურა) ---
  
  {
    id: 4,
    category: "architecture",
    location: { ka: "ზუგდიდი, საქართველო", en: "Zugdidi, Georgia" },
    area: "450 მ²",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "ზუგდიდის ტექნოლოგიური ვილა", en: "Zugdidi Tech Villa" },
    description: { 
      ka: "თანამედროვე რეზიდენცია ვიტრაჟული ფასადითა და პანორამული ტერასით.", 
      en: "Modern residence with stained-glass facade and panoramic terrace." 
    },
    materials: { 
      ka: ["არქიტექტურული ბეტონი", "ენერგოეფექტური მინა", "თერმო-ხე"], 
      en: ["Architectural Concrete", "Energy-efficient Glass", "Thermo-wood"] 
    },
    details: { 
      ka: "ვილის არქიტექტურა ჰარმონიულად ერწყმის დასავლეთ საქართველოს სუბტროპიკულ ბუნებას. შენობა აღჭურვილია ჭკვიანი სახლის (Smart Home) სისტემებით, ენერგოეფექტური მინაპაკეტებითა და კონსოლური გადახურვებით, რაც ზაფხულის ცხელ დღეებში უზრუნველყოფს ბუნებრივ ჩრდილს.", 
      en: "The villa's architecture harmoniously integrates with the subtropical landscape of Western Georgia. Equipped with Smart Home automation, energy-efficient glazing, and cantilever overhangs that provide natural shading during hot summer days." 
    }
  },
  {
    id: 5,
    category: "architecture",
    location: { ka: "თბილისი, საქართველო", en: "Tbilisi, Georgia" },
    area: "320 მ²",
    year: "2026",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "კერა პრემიუმ რეზიდენცია", en: "Kera Premium Residence" },
    description: { 
      ka: "ექსკლუზიური კერძო სახლი კონსოლური გადახურვითა და ღია აუზით.", 
      en: "Exclusive private house with cantilever overhang and outdoor pool." 
    },
    materials: { 
      ka: ["მონოლითური ბეტონი", "კორტენის ფოლადი", "ნატურალური ქვა"], 
      en: ["Monolithic Concrete", "Corten Steel", "Natural Stone"] 
    },
    details: { 
      ka: "მონუმენტური ფორმები და გეომეტრიული სიზუსტე. პროექტის მთავარი სავიზიტო ბარათია 6-მეტრიანი კონსოლური მეორე სართული, რომელიც თითქოს ჰაერში ტივტივებს. ფასადზე გამოყენებული Corten ფოლადის პანელები დროთა განმავლობაში იცვლის ფერს და უნიკალურ იერსახეს იძენს.", 
      en: "Monumental forms combined with geometric precision. The hallmark of the project is a 6-meter cantilevered second floor that appears to float. Corten steel panels on the facade evolve over time, bestowing a unique aesthetic patina." 
    }
  },
  {
    id: 6,
    category: "architecture",
    location: { ka: "ყაზბეგი, საქართველო", en: "Kazbegi, Georgia" },
    area: "210 მ²",
    year: "2025",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "მთის ეკო-კოტეჯი", en: "Mountain Eco-Cottage" },
    description: { 
      ka: "თანამედროვე მინიმალისტური არქიტექტურა კავკასიონის მთების ფონზე.", 
      en: "Modern minimalist architecture set against the Caucasus Mountains." 
    },
    materials: { 
      ka: ["დამუშავებული ფიჭვი", "ბუნებრივი ფიქალი", "სამმაგი მინაპაკეტი"], 
      en: ["Treated Pine", "Natural Slate", "Triple Glazing"] 
    },
    details: { 
      ka: "პროექტი სრულად ავტონომიურია და იყენებს მზის პანელებსა და გეოთერმულ გათბობას. არქიტექტურული ფორმა იმეორებს მთის მწვერვალების კონტურებს, ხოლო ფასადის ხის მოპირკეთება დროთა განმავლობაში იდეალურად ერწყმის ალპურ ლანდშაფტს.", 
      en: "The project is fully autonomous, utilizing solar panels and geothermal heating. The architectural silhouette mirrors the surrounding mountain peaks, while the wooden exterior seamlessly ages into the alpine landscape." 
    }
  },
  {
    id: 11,
    category: "architecture",
    location: { ka: "მცხეთა, საქართველო", en: "Mtskheta, Georgia" },
    area: "680 მ²",
    year: "2026",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "არაგვის ხეობის რეზიდენცია", en: "Aragvi Valley Residence" },
    description: { 
      ka: "ორგანული არქიტექტურის ნიმუში პანორამული ხედით ჯვრის მონასტერზე.", 
      en: "Organic architecture marvel with panoramic views of Jvari Monastery." 
    },
    materials: { 
      ka: ["არქიტექტურული ბეტონი", "ბაზალტის ქვა", "თერმო-მუხა"], 
      en: ["Architectural Concrete", "Basalt Stone", "Thermo-Oak"] 
    },
    details: { 
      ka: "ისტორიულ გარემოში ჩაწერილი თანამედროვე რეზიდენცია. პროექტის გეგმარება ითვალისწინებს რელიეფის ბუნებრივ დაქანებას, რაც საშუალებას იძლევა ყველა ოთახიდან იშლებოდეს უნიკალური პანორამული ხედი არაგვისა და მტკვრის შესართავზე.", 
      en: "A modern residence embedded in a historic context. The design leverages the natural slope of the terrain, offering unobstructed panoramic views of the confluence of the Mtkvari and Aragvi rivers from every room." 
    }
  },

  // ---  (ლანდშაფტის დიზაინი) ---

  {
    id: 7,
    category: "landscape",
    location: { ka: "ზუგდიდი, საქართველო", en: "Zugdidi, Georgia" },
    area: "1200 მ²",
    year: "2025",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "ზუგდიდის მოდერნისტული ეზო", en: "Zugdidi Modernist Yard" },
    description: { 
      ka: "ლანდშაფტის დიზაინი გარე განათებით, დეკორატიული აუზითა და ზონირებით.", 
      en: "Landscape design with outdoor lighting, decorative pool, and zoning." 
    },
    materials: { 
      ka: ["ბაზალტის ფილები", "ხის დეკი (Decking)", "დეკორატიული ხრეში"], 
      en: ["Basalt Tiles", "Wooden Decking", "Decorative Gravel"] 
    },
    details: { 
      ka: "მასშტაბური ეზოს პროექტი მოიცავს ავტომატურ სარწყავ სისტემას, არქიტექტურულ გარე განათებასა და ადგილობრივი დენდროლოგიური ჯიშების ნარგავებს. ეზო დაყოფილია მშვიდი დასვენების, საბავშვო და BBQ ზონებად.", 
      en: "A large-scale yard project featuring an automated irrigation system, architectural landscape lighting, and native dendrological species. Divided into quiet relaxation, playground, and outdoor barbecue zones." 
    }
  },
  {
    id: 8,
    category: "landscape",
    location: { ka: "ბათუმი, საქართველო", en: "Batumi, Georgia" },
    area: "650 მ²",
    year: "2026",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "ვილის ტერასა & ინფინიტი აუზი", en: "Villa Terrace & Infinity Pool" },
    description: { 
      ka: "მრავალდონიანი ტერასა უსასრულო (Infinity) აუზითა და ზღვის ხედით.", 
      en: "Multi-level terrace featuring an infinity pool and panoramic sea views." 
    },
    materials: { 
      ka: ["ყინვაგამძლე კერამოგრანიტი", "ნატურალური ქვა", "LED განათება"], 
      en: ["Frost-resistant Porcelain", "Natural Stone", "LED Lighting"] 
    },
    details: { 
      ka: "სპეციალურად დაპროექტებული დასასვენებელი ზონა ცეცხლის კერით (Fire Pit) და უსასრულო აუზით, რომელიც ვიზუალურად ზღვის ჰორიზონტს უერთდება. გამოყენებულია ზღვის მარილის მიმართ მდგრადი მასალები და მარადმწვანე მცენარეები.", 
      en: "A custom-designed lounge terrace with a fire pit and an infinity pool that merges visually with the sea horizon. Built with sea-salt resistant materials and evergreen coastal greenery." 
    }
  },
  {
    id: 9,
    category: "landscape",
    location: { ka: "თბილისი, საქართველო", en: "Tbilisi, Georgia" },
    area: "400 მ²",
    year: "2025",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "იაპონური ზენ ბაღი", en: "Japanese Zen Garden" },
    description: { 
      ka: "მინიმალისტური იაპონური ბაღის კონცეფცია ქვის კომპოზიციებითა და ნაკადულით.", 
      en: "Minimalist Japanese garden concept with stone arrangements and water stream." 
    },
    materials: { 
      ka: ["მდინარის რიყის ქვა", "ბამბუკი", "დეკორატიული ხავსი", "იაპონური ნატორი"], 
      en: ["River Pebbles", "Bamboo", "Decorative Moss", "Japanese Maple"] 
    },
    details: { 
      ka: "მშვიდი და მედიტაციური გარემო წყლის ჩანჩქერითა და იაპონური ნატვრის ხეებით (Acer palmatum). ბაღი დაპროექტებულია ფენ-შუის პრინციპებით, სადაც ქვისა და წყლის ელემენტები ქმნის იდეალურ ბუნებრივ ბალანსს.", 
      en: "A serene and meditative environment with a natural water stream and Japanese Maples (Acer palmatum). Designed according to principles of spatial harmony, combining stone and water elements for absolute balance." 
    }
  },
  {
    id: 12,
    category: "landscape",
    location: { ka: "კახეთი, საქართველო", en: "Kakheti, Georgia" },
    area: "2500 მ²",
    year: "2025",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    title: { ka: "შატო კახეთის ვენახის ლანდშაფტი", en: "Chateau Kakheti Vineyard Landscape" },
    description: { 
      ka: "ტრადიციული კახური ვენახისა და თანამედროვე ლანდშაფტის სინთეზი.", 
      en: "Synthesis of traditional Georgian vineyard and modern landscape." 
    },
    materials: { 
      ka: ["რიყის ქვა", "ქვევრი", "ხის პერგოლები", "ადგილობრივი ვაზი"], 
      en: ["Cobblestone", "Qvevri", "Wooden Pergolas", "Native Vines"] 
    },
    details: { 
      ka: "სასტუმრო კომპლექსის ლანდშაფტის დიზაინი, სადაც ტრადიციული ქართული ქვევრები და ვაზის ხეივნები შერწყმულია თანამედროვე საფეხმავლო ბილიკებთან, ამფითეატრთან და ღია აუზთან ალაზნის ველის ხედით.", 
      en: "Hotel complex landscape integration combining traditional Georgian Qvevris and vineyard pergolas with modern walking paths, an amphitheater, and an outdoor pool overlooking the Alazani Valley." 
    }
  }
];

// პროექტების ჩატვირთვის ფუნქცია ასინქრონული ფუნქცია
export const fetchProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projectsData);
    }, 100);
  });
};