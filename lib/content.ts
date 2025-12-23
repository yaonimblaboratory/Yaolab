import { SiteConfig, ResearchArea, Publication, Person, NewsItem, ResourceSection } from './types';

/**
 * CONTENT MANAGEMENT SYSTEM
 * Edit the data below to update the website content.
 * 
 * IMAGES:
 * The site is configured to look for images in your GitHub Repo: https://github.com/yaonimblaboratory/Images
 * You can simply use the filename (e.g., image: "my-photo.jpg").
 * You can also use full URLs (e.g., image: "https://picsum.photos/...")
 */

export const siteConfig: SiteConfig = {
  name: "Non-invasive Materials and Biointerfaces",
  institution: "Hong Kong University of Science and Technology",
  location: "Hong Kong",
  description: "Soft functional materials to non-invasively interface biology.",
  
  // To use a custom logo, upload it to your images repo and uncomment the line below:
  // logo: "my-logo.png",

  // EDIT HERO SECTION HERE
  hero: {
    titleHeadline: "Biointerfacing Materials toward",
    titleHighlight: "Noninvasive Medicine",
    description: "We are a research group developing smart materials, ultrasound technologies and synthetic biology tools toward non-invasive medicine.",
    // Ensure this filename matches EXACTLY with your GitHub repo (Case Sensitive!)
    image: "Future.png" 
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/publications" },
    { label: "Members", href: "/people" },
    { label: "News", href: "/news" },
    { label: "Join Us", href: "/join" },
  ],
  footer: {
    email: "yxyao@ust.hk",
    phone: "+852 2358 8367",
    address: "Cheng Yu Tung Building, Rm 3007E, HKUST, Hong Kong",
    socials: [
      { platform: "Twitter", url: "https://x.com/yuxing_yao" },
      { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=VFpWupoAAAAJ&hl=en#" }
    ]
  }
};

export const researchAreas: ResearchArea[] = [
  {
    id: "Smart Materials",
    title: "Smart Materials",
    shortDescription: "Synthetic materials with life-like, smart behaviors.",
    fullDescription: "We are developing synthetic materials that could shape morph with biomimetic intelligence (e.g., nonmonotonic behaviors!). Specifically, we are developing soft materials with molecularly anisotropic liquid crystal incoporated targeting soft and miniaturized robotic applications.",
    image: "MovieS1.mp4",
  },
  {
    id: "Ultrasound Technology",
    title: "Acoustics",
    shortDescription: "Modulating chemical actuations noninvasively inside body.",
    fullDescription: "We aim to develop ultrasound technologies and new chemistry to achieve non-invasive chemical actuation deep inside body for drug delivery and cell actuation.",
    image: "Mechanochem.png",
  },
  {
    id: "Synthetic Biology",
    title: "Synthetic Biology",
    shortDescription: "Genetically targeting capability enabled by synthetic biological tools.",
    fullDescription: "We utilize genetically encoded, ultrasound-responsive proteins, e.g., gas vesicles, to enable genetic targeting capability of chemical and biological actuation deep inside body.",
    image: "GV.jpg",
  }
];

export const news: NewsItem[] = [
  {
    id: "news-1",
    title: "First Lab Dinner",
    date: "2025-09-05",
    excerpt: "Our first dinner together in Hong Kong.",
    content: "Thanks to all the lab members who joined us for our first lab dinner in HK!",
    tags: ["Events"],
    image: "Lab250905.jpg",
  },
  {
    id: "news-2",
    title: "Lab Holiday Party 2025",
    date: "2025-12-12",
    excerpt: "Lab Holiday Party 2025",
    content: "Celebrating years forward with all lab members and friends.",
    tags: ["Events"],
    image: "Lab251212.jpg",
    additionalImages: ["Lab251212b.JPG"]
  },
  {
    id: "news-3",
    title: "First papers in our lab",
    date: "2025-12-15",
    excerpt: "Our review papers about liquid crystalline elastomers, their template-based fabrication and their energy-related applications are online.",
    content: "Our first two review papers are now online. \n\nIn a review published in <i>Advanced Engineering Materials</i>, we discuss how confinement influences the alignment and fabrication of liquid crystalline elastomers. Congratulations to Le! <a href='https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adem.202501727' target='_blank' rel='noreferrer' class='text-primary-600 hover:underline font-medium'>[Read Article]</a> \n\nIn a second review, published in <i>Journal of Materials Chemistry A</i>, we summarize recent advances in liquid crystalline elastomers and their applications in energy-related fields. Congratulations to Xinxin and Tingting! <a href='https://pubs.rsc.org/en/content/articlehtml/2026/ta/d5ta06813d' target='_blank' rel='noreferrer' class='text-primary-600 hover:underline font-medium'>[Read Article]</a> \n\nWe also thank our collaborators for their support.",
    tags: ["Publication", "Research"],
  }
];

export const people: Person[] = [
  {
    id: "p1",
    name: "Yuxing Yao, PhD",
    role: "PI",
    bio: "Yuxing received his BS from Tsinghua (Prof. Xi Zhang's lab), PhD from Harvard (Prof. Joanna Aizenberg's lab) and did postdoctoral work at Caltech (Prof. Mikhail Shapiro's lab). He is interested in developing technologies toward non-invasive medicine through smart materials, ultrasound technologies and synthetic biology tools.",
    image: "Yuxing.png",
    email: "yxyao@ust.hk",
    education: ["Postdoc, California Institute of Technology", "PhD, Harvard University", "BS, Tsinghua University"]
  },
  {
    id: "p2",
    name: "Hao Yang, PhD",
    role: "Postdoc",
    bio: "Dr. Hao Yang joined the lab in September 2025 as a postdoctoral researcher. He received his Ph.D. from Sun Yat-sen University and worked on elastic instabilities and mechanical metamaterials. He is currently interested in exploring the interplay between materials and structures for intelligent, actively driven robotic systems. Beyond research, he has broad interests, but mostly at an amateur level.",
    image: "Hao.jpg",
    email: "kejustinyh@ust.hk",
    education: ["PhD, Sun Yat-Sen University", "BS, Central South University"]
  },
    {
    id: "p3",
    name: "Jun Zhao, PhD",
    role: "Postdoc",
    bio: "Dr. Jun Zhao received his B.E., M.E., and Ph.D. in chemistry from Shanghai Jiao Tong University. After completing a one-year postdoctoral fellowship in Prof. Ximin He’s lab at UCLA, he joined the NIMB Lab, focusing on ultrasound-controlled mechanochemistry and dynamic polymeric biomaterials. In his leisure time, he enjoys fitness and exploring good food.",
    image: "Jun.jpg",
    email: "kejunzhao@ust.hk",
    education: ["PhD, Shanghai Jiao Tong University", "BS, Shanghai Jiao Tong University"]
  },
  {
    id: "p101",
    name: "Xinxin Lu",
    role: "PhD Student",
    bio: "Xinxin’s research interests center on soft polymers, including liquid crystal elastomers (LCEs), conductive polymers, etc. And, here is Xinxin’s daily agenda: research, research, research… and looking forward to traveling, traveling, traveling!",
    image: "Xinxin.jpeg",
    email: "xlubp@connect.ust.hk",
    education: ["MS, Tongji University", "BS, Shanghai University"]
  },
  {
    id: "p102",
    name: "Le Yang",
    role: "PhD Student",
    bio: "I'm Le Yang, a PhD student working on liquid crystal elastomers. I enjoy turning messy lab notebooks into neat stories and impossible actuation schemes into working prototypes. Outside the lab I recharge with anime, games, slightly overcaffeinated brainstorming, and memes.",
    image: "Le.jpg",
    email: "lyangcr@connect.ust.hk",
    education: ["MS, Tianjin University", "BS, Beijing University of Chemical Technology"]
  },
  {
    id: "p103",
    name: "Tingting Ye",
    role: "PhD Student",
    bio: "The most intelligent, invincible and unparalleled tt in the universe",
    image: "Tingting.jpeg",
    email: "tyead@connect.ust.hk",
    education: ["MS, Zhejiang University", "BS, Shantou University"]
  },
  {
    id: "p301",
    name: "Leiying Huang",
    role: "MPhil Student",
    bio: "Leiying joined the lab in 2025 fall as an MPhil student, and her research focuses on bioprinting. Before this, she obtained her bachelor's degree in Pharmacy from Huazhong University of Science and Technology. Outside the lab, she is always trying out different cool things. Recently, she has been spending a lot of time in Stardew Valley.",
    image: "Leiying.jpg",
    email: "lhuangcj@connect.ust.hk",
    education: ["BS, Huazhong University of Science and Technology"]
  },
  {
    id: "p302",
    name: "Zhaobo Lyu",
    role: "MPhil Student",
    bio: "Hi, I’m Zhaobo, an MPhil student working on non-invasive manipulation of soft matters. I enjoy using sound waves to shape soft matter, build functional structures, and explore how physics, materials science, and biology can meet in unexpected—and sometimes noisy—ways.",
    image: "Zhaobo.jpg",
    email: "zlyuam@connect.ust.hk",
    education: ["BS, Tsinghua University"]
  },
  {
    id: "p303",
    name: "Siyu Zhao",
    role: "MPhil Student",
    bio: "I’m an MPhil student in the Lab, working on director-field programming and 3D printing of liquid crystal elastomers (LCEs) to link molecular alignment to macroscopic shape change. My mantra: align molecules, align the level of detail, align my attitude.",
    image: "Siyu.jpeg",
    email: "szhaobo@connect.ust.hk",
    education: ["BS, Dalian University of Technology"]
  }
];

export const publications: Publication[] = [
  {
    id: "pub-2012-0",
    title: "From Bola-Amphiphiles to Supra-Amphiphiles: The Transformation from Two-Dimensional Nanosheets into One-Dimensional Nanofibers with Tunable-Packing Fashion of n-Type Chromophores",
    authors: ["Kai Liu","Yuxing Yao","Chao Wang","Yu Liu","Zhibo Li","Xi Zhang"],
    year: 2012,
    venue: "Chemistry--A European Journal",
    links: [{ label: "Article", url: "https://chemistry-europe.onlinelibrary.wiley.com/doi/abs/10.1002/chem.201200898" }],
    tags: []
  },
  {
    id: "pub-2013-1",
    title: "A Supramolecular Approach to Fabricate Highly Emissive Smart Materials",
    authors: ["Kai Liu","Yuxing Yao","Yuetong Kang","Yu Liu","Yuchun Han","Yilin Wang","Zhibo Li","Xi Zhang"],
    year: 2013,
    venue: "Scientific reports",
    links: [{ label: "Article", url: "https://www.nature.com/articles/srep02372" }],
    tags: []
  },
  {
    id: "pub-2013-2",
    title: "Supramolecular Photosensitizers with Enhanced Antibacterial Efficiency",
    authors: ["Kai Liu","Yiliu Liu","Yuxing Yao","Huanxiang Yuan","Shu Wang","Zhiqiang Wang","Xi Zhang"],
    year: 2013,
    venue: "Angewandte Chemie",
    links: [{ label: "Article", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201303387" }],
    tags: []
  },
  {
    id: "pub-2012-3",
    title: "Self-Assembly of Supra-Amphiphiles Based on Dual Charge-Transfer Interactions: From Nanosheets to Nanofibers",
    authors: ["Kai Liu","Yuxing Yao","Yu Liu","Chao Wang","Zhibo Li","Xi Zhang"],
    year: 2012,
    venue: "Langmuir",
    links: [{ label: "Article", url: "https://pubs.acs.org/doi/abs/10.1021/la3018437" }],
    tags: []
  },
  {
    id: "pub-2013-4",
    title: "Side-Chain Engineering of Isoindigo-Containing Conjugated Polymers Using Polystyrene for High-Performance Bulk Heterojunction Solar Cells",
    authors: ["Lei Fang","Yan Zhou","Yu-Xing Yao","Ying Diao","Wen-Ya Lee","Anthony L Appleton","Ranulfo Allen","Julia Reinspach","Stefan CB Mannsfeld","Zhenan Bao"],
    year: 2013,
    venue: "Chemistry of Materials",
    links: [{ label: "Article", url: "https://pubs.acs.org/doi/abs/10.1021/cm4024259" }],
    tags: []
  },
  {
    id: "pub-2018-5",
    title: "Dynamic Air/Liquid Pockets for Guiding Microscale Flow",
    authors: ["Xu Hou","Jianyu Li","Alexander B Tesler","Yuxing Yao","Miao Wang","Lingli Min","Zhizhi Sheng","Joanna Aizenberg"],
    year: 2018,
    venue: "Nature communications",
    links: [{ label: "Article", url: "https://www.nature.com/articles/s41467-018-03194-z" }],
    tags: []
  },
  {
    id: "pub-2018-6",
    title: "Bioinspired Universal Flexible Elastomer-Based Microchannels",
    authors: ["Feng Wu","Songyue Chen","Baiyi Chen","Miao Wang","Lingli Min","Jack Alvarenga","Jie Ju","Ali Khademhosseini","Yuxing Yao","Yu Shrike Zhang","Joanna Aizenberg","Xu Hou"],
    year: 2018,
    venue: "Small",
    links: [{ label: "Article", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/smll.201702170" }],
    tags: []
  },
  {
    id: "pub-2018-7",
    title: "Multiresponsive Polymeric Microstructures with Encoded Predetermined and Self-Regulated Deformability",
    authors: ["Yuxing Yao","James T Waters","Anna V Shneidman","Jiaxi Cui","Xiaoguang Wang","Nikolaj K Mandsberg","Shucong Li","Anna C Balazs","Joanna Aizenberg"],
    year: 2018,
    venue: "Proceedings of the National Academy of Sciences",
    links: [{ label: "Article", url: "https://www.pnas.org/doi/abs/10.1073/pnas.1811823115" }],
    tags: []
  },
  {
    id: "pub-2020-9",
    title: "Twist again: Dynamically and reversibly controllable chirality in liquid crystalline elastomer microposts",
    authors: ["James T Waters","Shucong Li","Yuxing Yao","Michael M Lerch","Michael Aizenberg","Joanna Aizenberg","Anna C Balazs"],
    year: 2020,
    venue: "Science advances",
    links: [{ label: "Article", url: "https://www.science.org/doi/abs/10.1126/sciadv.aay5349" }],
    tags: []
  },
  {
    id: "pub-2020-10",
    title: "Liquid Crystal Polymeric Skins “Sweat” to Provide Real-Time Drug Delivery",
    authors: ["Yang Xu","Yuxing Yao","Xiaoguang Wang"],
    year: 2020,
    venue: "Matter",
    links: [{ label: "Article", url: "https://www.cell.com/matter/fulltext/S2590-2385(20)30441-0" }],
    tags: []
  },
  {
    id: "pub-2021-11",
    title: "Self-assembly of protein superstructures by physical interactions under cytoplasm-like conditions",
    authors: ["Yuxing Yao","Zhiyang Jin","Bill Ling","Dina Malounda","Mikhail G Shapiro"],
    year: 2021,
    venue: "Biophysical Journal",
    links: [{ label: "Article", url: "https://www.cell.com/biophysj/fulltext/S0006-3495(21)00421-5" }],
    tags: []
  },
  {
    id: "pub-2021-12",
    title: "Random liquid crystalline copolymers consisting of prolate and oblate liquid crystal monomers",
    authors: ["Yang Xu","Robert L Dupont","Yuxing Yao","Meng Zhang","Jen-Chun Fang","Xiaoguang Wang"],
    year: 2021,
    venue: "Macromolecules",
    links: [{ label: "Article", url: "https://pubs.acs.org/doi/abs/10.1021/acs.macromol.1c00006" }],
    tags: []
  },
  {
    id: "pub-2019-13",
    title: "Nanoparticle-encapsulated hollow porous polymeric nanosphere frameworks as highly active and tunable size-selective catalysts",
    authors: ["Yang Xu","Yuxing Yao","Haitao Yu","Buyin Shi","Shengguang Gao","Li Zhang","Abigail L Miller","Jen-Chun Fang","Xiaoguang Wang","Kun Huang"],
    year: 2019,
    venue: "ACS Macro Letters",
    links: [{ label: "Article", url: "https://pubs.acs.org/doi/abs/10.1021/acsmacrolett.9b00490" }],
    tags: []
  },
  {
    id: "pub-2019-14",
    title: "Micro-/nano-voids guided two-stage film cracking on bioinspired assemblies for high-performance electronics",
    authors: ["Weining Miao","Yuxing Yao","Zhiwei Zhang","Chunping Ma","Shengzhe Li","Jiayue Tang","He Liu","Zemin Liu","Dianyu Wang","Michael A Camburn","Jen-Chun Fang","Ruiran Hao","Xinyu Fang","Shuang Zheng","Na Hu","Xiaoguang Wang"],
    year: 2019,
    venue: "Nature Communications",
    links: [{ label: "Article", url: "https://www.nature.com/articles/s41467-019-11803-8" }],
    tags: []
  },
  {
    id: "pub-2021-15",
    title: "Controlling liquid crystal orientations for programmable anisotropic transformations in cellular microstructures",
    authors: ["Shucong Li","Gabriele Librandi","Yuxing Yao","Austin J Richard","Alyssha Schneider-Yamamura","Joanna Aizenberg","Katia Bertoldi"],
    year: 2021,
    venue: "Advanced Materials",
    links: [{ label: "Article", url: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202105024" }],
    tags: []
  },
  {
    id: "pub-2021-16",
    title: "Liquid crystal--based open surface microfluidics manipulate liquid mobility and chemical composition on demand",
    authors: ["Yang Xu","Adil M Rather","Yuxing Yao","Jen-Chun Fang","Rajdeep S Mamtani","Robert KA Bennett","Richard G Atta","Solomon Adera","Uros Tkalec","Xiaoguang Wang"],
    year: 2021,
    venue: "Science advances",
    links: [{ label: "Article", url: "https://www.science.org/doi/abs/10.1126/sciadv.abi7607" }],
    tags: []
  },
  {
    id: "pub-2022-18",
    title: "Stimuli-Responsive Liquid-Crystal-Infused Porous Surfaces for Manipulation of Underwater Gas Bubble Transport and Adhesion",
    authors: ["Adil Majeed Rather","Yang Xu","Yun Chang","Robert Lewis Dupont","Angana Borbora","Ufuoma Israel Kara","Jen-Chun Fang","Rajdeep Mamtani","Meng Zhang","Yuxing Yao","Solomon Adera","Xiaoping Bao","Uttam Manna","Xiaoguang Wang"],
    year: 2022,
    venue: "Advanced materials",
    links: [{ label: "Article", url: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202110085" }],
    tags: []
  },
  {
    id: "pub-2022-19",
    title: "Modularizable Liquid-Crystal-Based Open Surfaces Enable Programmable Chemical Transport and Feeding using Liquid Droplets",
    authors: ["Yang Xu","Yun Chang","Yuxing Yao","Meng Zhang","Robert L Dupont","Adil M Rather","Xiaoping Bao","Xiaoguang Wang"],
    year: 2022,
    venue: "Advanced Materials",
    links: [{ label: "Article", url: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202108788" }],
    tags: []
  },
  {
    id: "pub-2022-20",
    title: "Self-regulated non-reciprocal motions in single-material microstructures",
    authors: ["Shucong Li","Michael M Lerch","James T Waters","Bolei Deng","Reese S Martens","Yuxing Yao","Do Yoon Kim","Katia Bertoldi","Alison Grinthal","Anna C Balazs","Joanna Aizenberg"],
    year: 2022,
    venue: "Nature",
    links: [{ label: "Article", url: "https://www.nature.com/articles/s41586-022-04561-z" }],
    tags: []
  },
  {
    id: "pub-2022-21",
    title: "Geometric effects in gas vesicle buckling under ultrasound",
    authors: ["Hossein Salahshoor","Yuxing Yao","Przemyslaw Dutka","Nivin N Nystrom","Zhiyang Jin","Ellen Min","Dina Malounda","Grant J Jensen","Michael Ortiz","Mikhail G Shapiro"],
    year: 2022,
    venue: "Biophysical Journal",
    links: [{ label: "Article", url: "https://www.cell.com/biophysj/fulltext/S0006-3495(22)00732-9" }],
    tags: []
  },
  {
    id: "pub-2022-22",
    title: "Wettability-based ultrasensitive detection of amphiphiles through directed concentration at disordered regions in self-assembled monolayers",
    authors: ["Yuxing Yao","Robert KA Bennett","Yang Xu","Adil M Rather","Shucong Li","Tung Chun Cheung","Alisha Bhanji","Michael J Kreder","Dan Daniel","Solomon Adera","Joanna Aizenberg","Xiaoguang Wang"],
    year: 2022,
    venue: "Proceedings of the National Academy of Sciences",
    links: [{ label: "Article", url: "https://www.pnas.org/doi/abs/10.1073/pnas.2211042119" }],
    tags: []
  },
  {
    id: "pub-2023-23",
    title: "Magnetocontrollable droplet mobility on liquid crystal-infused porous surfaces",
    authors: ["Yang Xu","Yuxing Yao","Weichen Deng","Jen-Chun Fang","Robert L Dupont","Meng Zhang","Simon Copar","Uros Tkalec","Xiaoguang Wang"],
    year: 2023,
    venue: "Nano Research",
    links: [{ label: "Article", url: "https://link.springer.com/article/10.1007/s12274-022-5318-y" }],
    tags: []
  },
  {
    id: "pub-2023-24",
    title: "Design of a self-cleanable multilevel anticounterfeiting interface through covalent chemical modulation",
    authors: ["Manideepa Dhar","Ufuoma I Kara","Supriya Das","Yang Xu","Sohini Mandal","Robert L Dupont","Eric C Boerner","Boyuan Chen","Yuxing Yao","Xiaoguang Wang","Uttam Manna"],
    year: 2023,
    venue: "Materials Horizons",
    links: [{ label: "Article", url: "https://pubs.rsc.org/en/content/articlelanding/2023/mh/d3mh00180f/unauth" }],
    tags: []
  },
  {
    id: "pub-2023-25",
    title: "Staggered circular nanoporous graphene converts electromagnetic waves into electricity",
    authors: ["Hualiang Lv","Yuxing Yao","Shucong Li","Guanglei Wu","Biao Zhao","Xiaodi Zhou","Robert L Dupont","Ufuoma I Kara","Yimin Zhou","Shibo Xi","Bo Liu","Renchao Che","Jincang Zhang","Hongbin Xu","Solomon Adera","Renbing Wu","Xiaoguang Wang"],
    year: 2023,
    venue: "Nature Communications",
    links: [{ label: "Article", url: "https://www.nature.com/articles/s41467-023-37436-6" }],
    tags: []
  },
  {
    id: "pub-2023-26",
    title: "Lubricated interfaces enabling simultaneous pulsatile and continuous chemical release modes",
    authors: ["Angana Borbora","Yang Xu","Souradeep Dey","Xin Wang","Yuxing Yao","Biman B Mandal","Xiaoguang Wang","Uttam Manna"],
    year: 2023,
    venue: "Advanced Materials",
    links: [{ label: "Article", url: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202302264" }],
    tags: []
  },
  {
    id: "pub-2023-27",
    title: "CAR-neutrophil mediated delivery of tumor-microenvironment responsive nanodrugs for glioblastoma chemo-immunotherapy",
    authors: ["Yun Chang","Xuechao Cai","Ramizah Syahirah","Yuxing Yao","Yang Xu","Gyuhyung Jin","Vijesh J Bhute","Sandra Torregrosa-Allen","Bennett D Elzey","You-Yeon Won","Qing Deng","Xiaojun Lance Lian","Xiaoguang Wang","Omolola Eniola-Adefeso","Xiaoping Bao"],
    year: 2023,
    venue: "Nature communications",
    links: [{ label: "Article", url: "https://www.nature.com/articles/s41467-023-37872-4" }],
    tags: []
  },
  {
    id: "pub-2024-28",
    title: "Truly tiny acoustic biomolecules for ultrasound imaging and therapy",
    authors: ["Bill Ling","Bilge Gungoren","Yuxing Yao","Przemyslaw Dutka","Reid Vassallo","Rohit Nayak","Cameron AB Smith","Justin Lee","Margaret B Swift","Mikhail G Shapiro"],
    year: 2024,
    venue: "Advanced Materials",
    links: [{ label: "Article", url: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202307106" }],
    tags: []
  },
  {
    id: "pub-2023-29",
    title: "Experimental Insights into Conformational Ensembles of Assembled $\beta$-Sheet Peptides",
    authors: ["Lanlan Yu","Ruonan Wang","Shucong Li","Ufuoma I Kara","Eric C Boerner","Boyuan Chen","Feiyi Zhang","Zhongyi Jian","Shuyuan Li","Mingwei Liu","Yang Wang","Shuli Liu","Yanlian Yang","Chen Wang","Wenbo Zhang","Yuxing Yao","Xiaoguang Wang","Chenxuan Wang"],
    year: 2023,
    venue: "ACS Central Science",
    links: [{ label: "Article", url: "https://pubs.acs.org/doi/abs/10.1021/acscentsci.3c00230" }],
    tags: []
  },
  {
    id: "pub-2023-30",
    title: "Single-molecule visualization determines conformational substate ensembles in $\beta$-sheet--rich peptide fibrils",
    authors: ["Wenbo Zhang","Ruonan Wang","Mingwei Liu","Shucong Li","Asher E Vokoun","Weichen Deng","Robert L Dupont","Feiyi Zhang","Shuyuan Li","Yang Wang","Zhenyu Liu","Yongfang Zheng","Shuli Liu","Yanlian Yang","Chen Wang","Lanlan Yu","Yuxing Yao","Xiaoguang Wang","Chenxuan Wang"],
    year: 2023,
    venue: "Science Advances",
    links: [{ label: "Article", url: "https://www.science.org/doi/abs/10.1126/sciadv.adg7943" }],
    tags: []
  },
  {
    id: "pub-2023-32",
    title: "Remote control of mechanochemical reactions under physiological conditions using biocompatible focused ultrasound",
    authors: ["Yuxing Yao","Molly E McFadden","Stella M Luo","Ross W Barber","Elin Kang","Avinoam Bar-Zion","Cameron AB Smith","Zhiyang Jin","Mark Legendre","Bill Ling","Dina Malounda","Andrea Torres","Tiba Hamza","Chelsea ER Edwards","Mikhail G Shapiro","Maxwell J Robb"],
    year: 2023,
    venue: "Proceedings of the National Academy of Sciences",
    links: [{ label: "Article", url: "https://www.pnas.org/doi/abs/10.1073/pnas.2309822120" }],
    tags: []
  },
  {
    id: "pub-2023-33",
    title: "Ultrasonic reporters of calcium for deep tissue imaging of cellular signals",
    authors: ["Zhiyang Jin","Anupama Lakshmanan","Ruby Zhang","Teresa A Tran","Claire Rabut","Przemyslaw Dutka","Mengtong Duan","Robert C Hurt","Dina Malounda","Yuxing Yao","Mikhail G Shapiro"],
    year: 2023,
    venue: "Biorxiv",
    links: [{ label: "Article", url: "https://www.biorxiv.org/content/10.1101/2023.11.09.566364.abstract" }],
    tags: []
  },
  {
    id: "pub-2023-34",
    title: "Using ultrasound to 3D-print materials",
    authors: ["Yuxing Yao","Mikhail G Shapiro"],
    year: 2023,
    venue: "Science",
    links: [{ label: "Article", url: "https://www.science.org/doi/abs/10.1126/science.adl5887" }],
    tags: []
  },
  {
    id: "pub-2024-35",
    title: "Functional nanoporous graphene superlattice",
    authors: ["Hualiang Lv","Yuxing Yao","Mingyue Yuan","Guanyu Chen","Yuchao Wang","Longjun Rao","Shucong Li","Ufuoma I Kara","Robert L Dupont","Cheng Zhang","Boyuan Chen","Bo Liu","Xiaodi Zhou","Renbing Wu","Solomon Adera","Renchao Che","Xingcai Zhang","Xiaoguang Wang"],
    year: 2024,
    venue: "Nature Communications",
    links: [{ label: "Article", url: "https://www.nature.com/articles/s41467-024-45503-9" }],
    tags: []
  },
  {
    id: "pub-2024-36",
    title: "Quantitative real-time analysis of living materials by stimulated raman scattering microscopy",
    authors: ["Chenxi Qian","Hanwei Liu","Priya K Chittur","Rahuljeet S Chadha","Yuxing Yao","Julia A Kornfield","David A Tirrell","Lu Wei"],
    year: 2024,
    venue: "Analytical Chemistry",
    links: [{ label: "Article", url: "https://pubs.acs.org/doi/abs/10.1021/acs.analchem.3c03736" }],
    tags: []
  },
  {
    id: "pub-2024-37",
    title: "Programming liquid crystal elastomers for multistep ambidirectional deformability",
    authors: ["Yuxing Yao","Atalaya Milan Wilborn","Baptiste Lemaire","Foteini Trigka","Friedrich Stricker","Alan H Weible","Shucong Li","Robert KA Bennett","Tung Chun Cheung","Alison Grinthal","Mikhail Zhernenkov","Guillaume Freychet","Patryk Wasik","Boris Kozinsky","Michael M Lerch","Xiaoguang Wang","Joanna Aizenberg"],
    year: 2024,
    venue: "Science",
    links: [{ label: "Article", url: "https://www.science.org/doi/abs/10.1126/science.adq6434" }],
    tags: []
  },
  {
    id: "pub-2025-38",
    title: "Synergistic Adhesion and Shape Deformation in Nanowire-Structured Liquid Crystal Elastomers",
    authors: ["Robert L Dupont","Yang Xu","Angana Borbora","Xinyu Wang","Fatemeh Azadi","Kaden Havener","Broderick Lewis","Weichen Deng","Benjamin W Tan","Shucong Li","Rui Zhang","Yuxing Yao","Uttam Manna","Xiaoguang Wang"],
    year: 2025,
    venue: "Advanced Materials",
    links: [{ label: "Article", url: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202414695" }],
    tags: []
  },
  {
    id: "pub-2025-39",
    title: "Controlled macroscopic shape evolution of self-growing polymeric materials",
    authors: ["Xinhong Xiong","Xiaozhuang Zhou","Haohui Zhang","Michael Aizenberg","Yuxing Yao","Yuhang Hu","Joanna Aizenberg","Jiaxi Cui"],
    year: 2025,
    venue: "Nature Communications",
    links: [{ label: "Article", url: "https://www.nature.com/articles/s41467-025-57030-2" }],
    tags: []
  },
  {
    id: "pub-2025-40",
    title: "Artificial synapse-based intelligent light-controlled liquid crystal network actuators",
    authors: ["Yuhang Song","Junyao Zhang","Zejun Sun","Haixia Liang","Tongrui Sun","Zhimin Lu","Shucong Li","Yuxing Yao","Xiaoguang Wang","Yang Xu","Jia Huang"],
    year: 2025,
    venue: "InfoMat",
    links: [{ label: "Article", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/inf2.70008" }],
    tags: []
  },
  {
    id: "pub-2025-0",
    title: "Multistable polar textures in geometrically frustrated nematic liquid crystals",
    authors: ["Ufuoma I Kara","Boyuan Chen","Simon Copar","Shucong Li","Rajdeep Mamtani","Yang Xu","Alan H Weible","Eric C Boerner","Zhan Yang","Yuxing Yao","Robin LB Selinger","Uros Tkalec","Xiaoguang Wang"],
    year: 2025,
    venue: "Nature Physics",
    links: [{ label: "Article", url: "https://www.nature.com/articles/s41567-025-02966-x" }],
    tags: []
  },
  {
    id: "pub-2025-43",
    title: "Liquid Crystal Elastomers Under Confinement: A Review of Template-Based Fabrication and Applications",
    authors: ["Meng Zhang","Le Yang","Xinyi Ding","James Phillip Scarbrough","Tushar Narayan Singh","Yuxing Yao","Shucong Li","Xiaoguang Wang"],
    year: 2025,
    venue: "Advanced Engineering Materials",
    links: [{ label: "Article", url: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adem.202501727" }],
    tags: []
  },
  {
    id: "pub-2026-42",
    title: "Liquid crystal elastomers for solar, mechanical, thermal, and electrochemical energy applications",
    authors: ["Meng Zhang","Xinxin Lu","Tingting Ye","Haodong Hu","James P Scarbrough","Rui Wang","Yuxing Yao","Shucong Li","Xiaoguang Wang"],
    year: 2026,
    venue: "Journal of Materials Chemistry A",
    links: [{ label: "Article", url: "https://pubs.rsc.org/en/content/articlehtml/2026/ta/d5ta06813d" }],
    tags: []
  }
];

export const resources: ResourceSection[] = [
  {
    title: "Plasmids",
    items: [
      {
        title: "pHelix-Sensor-V1",
        description: "General purpose mammalian sensor backbone.",
        link: "https://addgene.org",
        citation: "Wong et al., Nat Biotech 2023"
      },
      {
        title: "pMicrobiome-Switch",
        description: "Bacteroides thetaiotaomicron inducible promoter system.",
        link: "https://addgene.org",
        citation: "Jenkins et al., Cell Systems 2022"
      }
    ]
  },
  {
    title: "Software",
    items: [
      {
        title: "ProteinGAN",
        description: "Generative adversarial network for protein backbone generation.",
        link: "https://github.com",
        citation: "Chen et al., ICLR 2023"
      }
    ]
  },
  {
    title: "Protocols",
    items: [
      {
        title: "Rapid Golden Gate Assembly",
        description: "Our optimized protocol for high-efficiency assembly.",
        link: "#"
      }
    ]
  }
];
