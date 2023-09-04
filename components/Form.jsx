import Image from "next/image";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      
      <div className='absolute mix-blend-overlay right-3.5'>

        <Image
          src='/assets/images/right_hero.png'
          alt='sectionHero'
          width={500}
          height={500}
        />
      </div>

      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} un Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} et partagez des idées incroyables avec le monde, et laissez vos idées faire le tour du monde
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Votre idée
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Exprimez Vous...'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Votre hashtag{" "}
            <span className='font-normal'>
              (#production, #webdevelopment, #idée, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Annuler
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>

    </section>
  );
};

export default Form;
