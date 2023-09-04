import Feed from "@components/Feed";
import Image from "next/image";

const Home = () => (
  <section className='w-full flex-center flex-col '>

<div>

        <Image
          src='/assets/images/light_bulb_one.svg'
          alt='logo'
          width={150}
          height={150}
          className='absolute left-3.5'
          />
        <Image
          src='/assets/images/light_bulb_two.svg'
          alt='logo'
          width={150}
          height={150}
          className='absolute right-3.5 bottom-3.5'
          />
          </div>

        <h1 className='head_text text-center '>
          Partagez & Exprimez
          <br className='max-md:hidden' />
          <span className='orange_gradient text-center'> vos propres idées </span>
        </h1>
        <p className='desc text-center'>
          CardsMe est un espace sécurisé où vous pouvez exprimer et partager vos idées sans limites...
        </p>



    <Feed />
  </section>
);

export default Home;