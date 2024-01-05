import Link from "next/link"
import * as Icon from 'react-bootstrap-icons';

export default function Footer () {
  return (
    <footer className="px-4 py-8">
      <div className="flex flex-col gap-4 max-w-screen-xl mx-auto">
        <div className="flex gap-4 justify-between text-text-secondary">
          <p className="">© {(new Date).getFullYear()} DS Cubed</p>
          <div className="flex gap-8">
            <Link href="mailto:hello@dscubed.org.au" target="_blank">
              <Icon.EnvelopeFill className="w-5 h-5"/>
            </Link>
            <Link href="https://instagram.com/dscubed.unimelb" target="_blank">
              <Icon.Instagram className="w-5 h-5"/>
            </Link>
            <Link href="https://www.facebook.com/dscubed.unimelb/" target="_blank">
              <Icon.Facebook className="w-5 h-5"/>
            </Link>
            <Link href="https://discord.gg/hFX4PJZ5MQ" target="_blank">
              <Icon.Discord className="w-5 h-5"/>
            </Link>
            <Link href="https://medium.com/dscubed-unimelb" target="_blank">
              <Icon.Medium className="w-5 h-5"/>
            </Link>
            <Link href="https://www.linkedin.com/company/data-science-student-society/" target="_blank">
              <Icon.Linkedin className="w-5 h-5"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}