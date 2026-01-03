import Header from "../my_custom_header_a/Header_typeA";
import HeroSlide from "../my_custom_heroslide_a/Heroslide_typeA";
import AreaSection from "../my_custom_researchArea/Section_typeA";
import styles from "../css/home.module.css";

const heroDataSample = [
  {
    id: 1,
    title: "Dialogue Boost: How Amazon is using AI to enhance TV and movie dialogue",
    desc: "New audio-processing technology is making entertainment more accessible for millions of viewers.",
    image: "/images/1764166800383.jpeg", // 이미지 경로
    link: "/post/1" // 'Read more' 버튼 누르면 갈 주소
  },
  {
    id: 2,
    title: "The overthinking problem in AI",
    desc: "Reasoning models can generate seven to 10 times as many tokens as necessary on simple tasks, creating unsustainable costs at scale. Amazon's vision for metacognitive AI could fundamentally shift how models allocate computational resources.",
    image: "/images/1764166800383.jpeg",
    link: "/post/2"
  },
  {
    id: 3,
    title: "Nova Forge: Build your own frontier AI",
    desc: "AGI SVP Rohit Prasad on how to mix your data with Amazon's training data at every stage — deep customization without catastrophic forgetting.",
    image: "/images/1764166800383.jpeg",
    link: "/post/3"
  },
  {
    id: 4,
    title: "Demystifying AI agents",
    desc: "How agentic systems work under the hood — and how AWS’s new AgentCore framework implements their essential components.",
    image: "/images/1764166800383.jpeg",
    link: "/post/3"
  },
  {
    id: 5,
    title: "How Amazon uses AI agents to anticipate and counter cyber threats",
    desc: "Competitive-agent architecture develops security protections at machine speed, reducing weeks of work to hours.",
    image: "/images/1764166800383.jpeg",
    link: "/post/3"
  },
];
const researchAreaDataSample = [
  {
    id: 1,
    title: "Automated reasoning",
    media_source: "https://assets.amazon.science/b3/e6/339a287646308dd0cf27be64860a/automatedreasoning.svg",
    link: "area/1",
  },
  {
    id: 2,
    title: "Cloud and systems",
    media_source: "https://assets.amazon.science/94/b0/94affd2444f7a0d80227106f9211/cloud.svg",
    link: "area/2",
  },
  {
    id: 3,
    title: "Computer vision",
    media_source: "https://assets.amazon.science/9c/02/b5c9fb95439ebf5d4bcaef6fc4cd/computervision.svg",
    link: "area/3",
  },
  {
    id: 4,
    title: "Conversational AI",
    media_source: "https://assets.amazon.science/fe/aa/910fd701416dabb6d3316fe2ec19/conversationalai.svg",
    link: "area/4",
  },
  {
    id: 5,
    title: "Economics",
    media_source: "https://assets.amazon.science/a9/bc/ab88878c4faebca412cbef3b022b/economics.svg",
    link: "area/5",
  },
  {
    id: 6,
    title: "Information and knowledge management",
    media_source: "https://assets.amazon.science/4d/25/9ac984a8444e80d8071730edb6a0/infomanagement.svg",
    link: "area/6",
  },
  {
    id: 7,
    title: "Machine learning",
    media_source: "https://assets.amazon.science/93/06/f6c7a0ae49ec9d9427ce8dde796f/machinelearning.svg",
    link: "area/7",
  },
  {
    id: 8,
    title: "Operations research and optimization",
    media_source: "https://assets.amazon.science/65/a0/8603864b451fbce8ce61f0ca85e7/operations.svg",
    link: "area/8",
  },
  {
    id: 9,
    title: "Quantum technologies",
    media_source: "https://assets.amazon.science/18/56/44f7716948d58dc87d0d1c8ed3bc/quantum-technologies.svg",
    link: "area/9",
  },
  {
    id: 10,
    title: "Robotics",
    media_source: "https://assets.amazon.science/9f/d6/2a081f10407db7bc1a99f17be15d/robotics.svg",
    link: "area/10",
  },
  {
    id: 11,
    title: "Search and information retrieval",
    media_source: "https://assets.amazon.science/0f/8a/4bf8055f47499b18da29af6b95c4/search.svg",
    link: "area/11",
  },
  {
    id: 12,
    title: "Security, privacy, and abuse prevention",
    media_source: "https://assets.amazon.science/35/42/bdaf2a4c4e8d887ffcfdaf03ddee/security.svg",
    link: "area/12",
  },
  {
    id: 13,
    title: "Sustainability",
    media_source: "https://assets.amazon.science/09/1d/d2ef27534875b71e1919bac64520/sustainability.svg",
    link: "area/13",
  },
];


function Home() {
  return (
    <div className={styles.top_container}>
      <Header />
      <HeroSlide data={heroDataSample} />
      <AreaSection data={researchAreaDataSample} />
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.footer_area}></div>
    </div>
  );
}

export default Home;