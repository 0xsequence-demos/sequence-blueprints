import {
  Discord,
  Github,
  Linkedin,
  TwitterX,
  Youtube,
} from "react-bootstrap-icons";
import { Databeat } from '@databeat/tracker'

export const analytics = new Databeat('https://databeat.sequence.app', {
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJzZXEtZG9jcyIsImV4cCI6MjA1ODk3NTQyMn0.loEnIIuIzhCsNQJxLteK7ynTlHXbVR7siKx1j5G7ojY',
})

export default function Footer() {
  analytics.trackView()
  
  return (
    <footer className="border-t border-white/20 flex justify-center gap-20 py-4">
      <div className="text-14 text-center">
        ©{" "}
        <a href="https://sequence.xyz" target="sequence">
          <b>Sequence</b>
        </a>{" "}
        2025
      </div>
      <div className="text-1208 text-center flex gap-2">
        <a href="https://www.twitter.com/0xsequence">
          <TwitterX />
        </a>
        <a href="https://ca.linkedin.com/showcase/0xsequence/">
          <Linkedin />
        </a>
        <a href="https://discord.gg/sequence">
          <Discord />
        </a>
        <a href="https://github.com/0xsequence">
          <Github />
        </a>
        <a href="https://www.youtube.com/@0xSequence">
          <Youtube />
        </a>
      </div>
    </footer>
  );
}
