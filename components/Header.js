export default function Header() {
  return (
    <div className="flex flex-wrap flex-col items-center justify-center">
        <div className="w-1/12">
          <img className="rounded-full " src="https://scontent.frak1-1.fna.fbcdn.net/v/t1.0-9/116431428_1212861045755093_1313364327477149511_n.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeGt9pSFj8FUFFEMqacP27jvAu_rOLwuaNUC7-s4vC5o1RXM9ChUHdo3Z76F9Ihzz-B6vE76x3mmq4Ec2MpQFZCw&_nc_ohc=RJL7NUGj-XUAX8LlUlF&_nc_ht=scontent.frak1-1.fna&oh=b8609559641a84b2bcd74ac30d6b07a2&oe=605F7674" />
        </div>
        <div className="w-3/4 text-center">
          <h1 className="text-4xl font-semibold mt-4 mb-2">Hicham Askour</h1>
          <ul className="flex items-center my-3 justify-center">
          <li>
            <a href="/" className="inline-block px-2 py-2 mx-2 text-gray-400 uppercase text-sm tracking-tight font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="inline-block px-2 py-2 mx-2 text-gray-400 uppercase text-sm tracking-tight font-semibold">
              projects
            </a>
          </li>
          <li>
            <a href="/" className="inline-block px-2 py-2 mx-2 text-gray-400 uppercase text-sm tracking-tight font-semibold">
              articles
            </a>
          </li>
          <li>
            <a href="/" className="inline-block px-2 py-2 mx-2 text-gray-400 uppercase text-sm tracking-tight font-semibold">
              get in touch
            </a>
          </li>
        </ul>
          <p className="text-gray-600 text-lg font-light">
            Hi there my name is <a href="https://twitter.com/askour_hicham" className="font-bold text-black underline" target="_blank">@hichmaskour</a>, i'm a passionate front-end developer, i create awesome web pages.
            <br />
            I live in Marrakech / Morocco 🇲🇦. I can turn your designs into a dynamic web pages and applications . For more information, do not hesitate to contact me through my email: <a href="mailto:hishamaskour@gmail.com" className="font-bold text-black underline" target="_blank">hishamaskour@gmail.com</a> or <a href="https://www.linkedin.com/in/hichamaskour" className="font-bold text-black underline" target="_blank">my linkedin profile</a>
          </p>
        </div>
    </div>
  )
}
