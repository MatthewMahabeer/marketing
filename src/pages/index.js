import Head from 'next/head'
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef } from 'react'


export default function Home() {
  const scrollTargetRef = useRef();

  const handleScroll = () => {
    scrollTargetRef.current.scrollIntoView({behavior: "smooth"});
  };


  return (
    <div>
      <Head>
        <title>UWI Degree Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>Control Your Path To Graduation</h1>
      <div className={styles['svg-container']}  ref={scrollTargetRef} onClick={handleScroll} id={styles['svg-id']}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
 
  </div>
    </main>
    <div className={styles.header}>
      UWI Degree Tracker
    </div>
    <div className={styles.para}>
    Introducing UWI Degree Tracker - Revolutionizing the way you manage your academic journey. With our pioneering application, you can say goodbye to manual degree tracking and embrace the convenience of real-time automation. Our tool provides precise course tracking, personalized recommendations, and visual progress charts, ensuring you are always one step ahead in your educational path. Dive into seamless organization and real-time insights with UWI Degree Tracker, the intelligent solution that makes degree management effortless and efficient. Keep track, stay on course, and reach your academic goals with confidence.
    </div>
    <section className="feature">
    <img className='img' src="student_home.png" alt="Student Home" />
    <div>
      <h2>Feature Title 1</h2>
      <p>Feature Description 1...</p>
    </div>
  </section>
    </div>
  )
}
