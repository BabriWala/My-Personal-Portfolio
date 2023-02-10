import Image from 'next/image';
import banner from '../../assets/banner-picture.jpg'
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        /> */}
        <Image
          src={banner}
          alt="hero"
          width="200"
          height="300"
          >

          </Image>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font mt-5 sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            FRONT END DEVELOPER
          </h1>
          <p className="mb-8 leading-relaxed">
          As a Front-End Developer with experience in HTML, CSS, JavaScript, and various frameworks and libraries such as ReactJs, NextJs. I am dedicated to creating visually appealing and intuitive websites and applications.
          </p>
          <div className="flex justify-center">
            <Link href='/projects'>
            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
            My Work 
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
