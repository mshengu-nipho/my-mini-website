import Head from 'next/head'
import Image from 'next/image'
import MySkill1 from '../public/Skills/java.webp'
import profilePic from '../public/Skills/nipho.jpeg'
import Python from '../public/Skills/Python.webp'
import SQL from '../public/Skills/SQL.png'
import oracle from '../public/Skills/oracle.png'
import Csharp_Logo from '../public/Skills/Csharp_Logo.png'
import C_Langue from '../public/Skills/C++.png'
import JavaScriptLogo from '../public/Skills/JavaScript-Logo.png'
import HTML_CSS from '../public/Skills/Html & css.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nhlakanipho Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar/> */}
    

      <section className="min-h-screen">
              <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons">My Web Portfolio</h1>
                <ul className="flex items-center">
                  <li>
                  </li>
                  <li> 
                    <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href = "#">Resume</a></li>
                </ul>
              </nav>
              <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium">Nhlakanipho Shabalala</h2>
                <h3 className="text-2xl py-2">Reason why I want to join SovTech as a Developer </h3>
                <p className="text-md py-5 leading-8 text-gray-800">
                I possess system development, technical analysis, and programming skills. 
                Additionally, my abilities extend to be an agile and growth-oriented candidate.
                 I see opportunities instead of challenges, always ask better questions to seek
                  better answers that build a better working world. I am inclusive. An individual
                   who seeks out and embrace diverse perspectives, who value differences, and
                    team inclusively to build safety and trust.
                </p>
              </div>
              <div  className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
                <Image src={profilePic} layout="fill" objectFit="cover" alt="Picture of the author"/>
              </div>
            </section>


      {/* <Skills /> */}

      <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Skills</p>
                <h2 className='py-4'>What I can do </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    
                    {/* HTML SKILLS */}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={MySkill1} width={64} height={64} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>jAVA</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={oracle} width={64} height={64} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Oracle</h3>
                            </div>
                        </div>
                    </div>



                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={HTML_CSS} width={64} height={64} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML_CSS</h3>
                            </div>
                        </div>
                    </div>



                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={JavaScriptLogo} width={64} height={64} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>



                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Csharp_Logo} width={64} height={64} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C Sharp</h3>
                            </div>
                        </div>
                    </div>




                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={SQL} width={64} height={64} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>SQL</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={C_Langue} width={64} height={64} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C++</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Python} width={64} height={64} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    




    </div>
  )
}
