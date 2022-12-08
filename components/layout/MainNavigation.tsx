import Link from 'next/link'

const MainNavigation = () => {
    
  return (
    <header className="w-full h-20 flex items-center justify-between bg-blue-500 p-1">
      <div className="text-4xl text-white font-bold pl-8">To Do</div>
      <nav>
        <ul className="list-none m-0 p-0 flex items-baseline">
          <li className="ml-12 hover:text-white no-underline text-blue-200 text-2xl">
            <Link href='/to-do-list' >To Do List</Link>
          </li>
          <li className="ml-12 hover:text-white no-underline text-blue-200 text-2xl">
            <Link href='/' >All Meetups</Link>
          </li>
          <li className="ml-12 hover:text-white no-underline text-blue-200 text-2xl">
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation