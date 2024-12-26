import React from 'react';
import styles from '../styles/ResearchPapers.module.css';

const ResearchPapers = () => {
  const papers = [
    {
      title: "Amazon DynamoDB: A Scalable, Predictably Performant, and Fully Managed NoSQL Database Service",
      authors: "Mostafa Elhemali & Niall Gallagher",
      link: "https://assets.amazon.science/33/9d/b77f13fe49a798ece85cf3f9be6d/amazon-dynamodb-a-scalable-predictably-performant-and-fully-managed-nosql-database-service.pdf"
    },
    {
      title: "Amazon MemoryDB: A Fast and Durable Memory-First Cloud Database",
      authors: "Yacine Taleb & Kevin McGehee & Nan Yan & Shawn Wang & Stefan C. Muller & Allen Samuels",
      link: "https://assets.amazon.science/e0/1b/ba6c28034babbc1b18f54aa8102e/amazon-memorydb-a-fast-and-durable-memory-first-cloud-database.pdf"
    },
    {
      title: "Cassandra: A Decentralized Structured Storage System",
      authors: "Avinash Lakshman & Prashant Malik",
      link: "https://www.cs.cornell.edu/projects/ladis2009/papers/lakshman-ladis2009.pdf"
    },
    {
      title: "Dynamo: Amazon's Highly Available Key-Value Store",
      authors: "Amazon.com",
      link: "https://www.cs.cornell.edu/courses/cs5414/2017fa/papers/dynamo.pdf"
    },
    {
      title: "Efficient Wear-Leveling-Aware Data Placement for LSM-Tree Based Key-Value Store on ZNS SSDs",
      authors: "Runyu Zhang & Lening Zhou & Mingjie Li & Yunlin Tan & Chaoshu Yang",
      link: "https://www.sciencedirect.com/science/article/pii/S1319157824002453"
    },
    {
      title: "Fast Key-Value Stores: An Idea Whose Time Has Come and Gone",
      authors: "Atul Adya & Robert Grandl & Daniel Myers & Henry Qin",
      link: "https://dl.acm.org/doi/10.1145/3317550.3321434"
    },
    {
      title: "Google File System",
      authors: "Sanjay Ghemawat & Howard Gobioff & Shun-Tak Leung",
      link: "https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf"
    },
    {
      title: "Gorilla: A Fast, Scalable, In-Memory Time Series Database",
      authors: "Tuomas Pelkonen & Scott Franklin & Justin Teller & Paul Cavallaro & Qi Huang & Justin Meza & Kaushik Veeraraghavan",
      link: "https://www.vldb.org/pvldb/vol8/p1816-teller.pdf"
    },
    {
      title: "Kademlia: A Peer-to-Peer Information System Based on the XOR Metric",
      authors: "Petar Maymounkov & David Mazieres",
      link: "https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf"
    },
    {
      title: "Key-Value Storage Engines",
      authors: "Stratos Idreos & Mark Callaghan",
      link: "https://scholar.harvard.edu/files/stratos/files/keyvaluestorageengines.pdf"
    },
    {
      title: "Learning Key-Value Store Design",
      authors: "Stratos Idreos & Niv Dayan & Wilson Qin & Mali Akmanalp & Sophie Hilgard & Andrew Ross & James Lennon & Varun Jain & Harshita Gupta & David Li & Zichen Zhu",
      link: "https://www.semanticscholar.org/paper/Learning-Key-Value-Store-Design-Idreos-Dayan/0c917fef48a23f02c701d21b0bb0e20754316e60"
    },
    {
      title: "NanoLog: A Nanosecond Scale Logging System",
      authors: "Stephen Yang & Seo Jin Park & John Ousterhout",
      link: "https://www.usenix.org/system/files/conference/atc18/atc18-yang.pdf"
    },
    {
      title: "Rockset Concepts Design Architecture",
      authors: "Purvi Desai & Kevin Leong",
      link: "https://rockset.com/Rockset_Concepts_Design_Architecture.pdf"
    },
    {
      title: "SIEVE is Simpler than LRU: An Efficient Turn-Key Eviction Algorithm for Web Caches",
      authors: "Yazhuo Zhang & Juncheng Yang & Yao Yue & Ymir Vigfusson & K. V. Rashmi",
      link: "https://junchengyang.com/publication/nsdi24-SIEVE.pdf"
    },
    {
      title: "SILK: Preventing Latency Spikes in Log-Structured Merge Key-Value Stores",
      authors: "Oana Balmau",
      link: "https://www.usenix.org/system/files/atc19-balmau.pdf"
    },
    {
      title: "Stage: Query Execution Time Prediction in Amazon Redshift",
      authors: "Ziniu Wu & Ryan Marcus & Parimarjan Negi & Tim Kraska",
      link: "https://arxiv.org/pdf/2403.02286"
    },
    {
      title: "Testing of Transactional Services in NoSQL Key-Value Databases",
      authors: "Maria Teresa Gonzalez-Aparicio & Muhammad Younas & Javier Tuya & Ruben Casado",
      link: "https://digibuo.uniovi.es/dspace/bitstream/handle/10651/46363/Testing%20of.pdf;jsessionid=04EA8CEA94E597537F03949DAA553CBB?sequence=1"
    },
    {
      title: "Windows Azure Storage: A Highly Available Cloud Storage Service with Strong Consistency",
      authors: "Brad Calder & Ju Wang & Aaron Ogus & Niranjan Nilakantan",
      link: "https://www.cs.purdue.edu/homes/csjgwang/CloudNativeDB/AzureStorageSOSP11.pdf"
    }
  ];

  return (
    <section className={`${styles.researchPapers} container`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Currently Exploring Research Papers</h2>
        <a href="#" className={styles.sectionLink}>Papershelf →</a>
      </div>
      <p className={styles.sectionDescription}>Papers I have read recently or going to read</p>
      <div className={styles.paperLinks}>
        {papers.map((paper, index) => (
          <a key={index} href={paper.link} className={styles.paperItem}>
            {paper.title} - {paper.authors}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ResearchPapers;
