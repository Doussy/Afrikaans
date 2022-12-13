import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen text-white border-white bg-dark-blue'>
      <header className='py-4 mb-8 border-b'>
        <div className='container flex justify-center mx-auto'>
          <Link href='/'>
            <a>🏡</a>
          </Link>
          <span className='mx-auto'>Afrikaans - &apos;n versameling van Afrikaanse inhoud waarvan ek baie hou</span>{' '}
        </div>
      </header>
      <main className='container flex-1 mx-auto'>{children}</main>
      <footer className='py-4 mt-8 border-t'>
        <div className='container flex justify-center mx-auto'>
          Afrikaans
        </div>
      </footer>
    </div>
  );
}
