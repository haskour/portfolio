import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-wrap flex-col mb-6">
        <div className="flex items-center">
          <div className="w-1/12">
            <img className="rounded-full " src="https://scontent.frak1-1.fna.fbcdn.net/v/t1.0-9/116431428_1212861045755093_1313364327477149511_n.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeGt9pSFj8FUFFEMqacP27jvAu_rOLwuaNUC7-s4vC5o1RXM9ChUHdo3Z76F9Ihzz-B6vE76x3mmq4Ec2MpQFZCw&_nc_ohc=RJL7NUGj-XUAX8LlUlF&_nc_ht=scontent.frak1-1.fna&oh=b8609559641a84b2bcd74ac30d6b07a2&oe=605F7674" />
          </div>
          <h1 className="text-4xl font-semibold mt-4 mb-2 ml-8">Hicham Askour</h1>
        </div>
        <div className="w-3/4">
          
          <ul className="flex items-center my-3 pl-20">
            <li>
              <Link href="/">
                <a className="inline-block px-2 py-2 mx-2 text-gray-500 uppercase text-sm tracking-tight font-semibold">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="inline-block px-2 py-2 mx-2 text-gray-500 uppercase text-sm tracking-tight font-semibold">
                  projects
                </a>
              </Link>
            </li>
            <li>
              <a href="#" className="inline-block relative px-2 py-2 mx-2 text-gray-500 uppercase text-sm tracking-tight font-semibold">
                articles
              </a>
            </li>
            <li>
              <a href="#" className="inline-block px-2 py-2 mx-2 text-gray-500 uppercase text-sm tracking-tight font-semibold">
                get in touch
              </a>
            </li>
          </ul>
        </div>
    </header>
  )
}
