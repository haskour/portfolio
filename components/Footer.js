export default function Footer() {
  return (
    <>
      <footer>
        Made with{' '}
        ❤️ by <a href="https://twitter.com/askour_hicham" className="font-bold text-black underline" target="_blank">@me</a>
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 70px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          height: 1em;
          margin: 5px;
        }
      `}</style>
    </>
  )
}
