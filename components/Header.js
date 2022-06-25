import Link from 'next/link';
import {useEffect} from 'react'
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { formatCurrency } from '@/lib/utils';
import { Logo } from '@/components/index';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { session, signOut } from 'next-auth/client'
import Router from 'next/router'


const Header = () => {
  const { totalPrice, cartCount } = useShoppingCart();
  // useEffect(() => {
  //   if(!session) return Router.push('/login');
  // },[!session])
  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container xl:max-w-screen-xl mx-auto p-6 flex justify-between">
        <Logo />
       <button className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs 
          leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 
          focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={() => signOut()}>Sair
        </button>
    <p>{session?.user?.email}</p>
        <Link href="/cart">
          <a className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
            <div className="relative">
              <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
            </div>
            <p className="text-lg">
              {formatCurrency(totalPrice)}{' '}
              <span className="text-sm text-gray-500">({cartCount})</span>
            </p>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
