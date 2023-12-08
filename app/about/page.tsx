export default function About() {
  return (
    <div className="flex flex-col justify-between">
      <h1 className="text-zinc-200 text-5xl py-5">About me</h1>
      <div className="text-zinc-400 text-lg leading-8 flex gap-4 flex-col max-  ">
        <p>
          Hello everyone ! I&apos;m Marcos Nikel, a Software Engineer based in
          Brazil 🇧🇷 and currently working at{" "}
          <a
            className="text-green-300"
            href="https://www.minu.co"
            target="_blank"
          >
            Minu.
          </a>
        </p>
        <p>
          I started code at 2020, back then i was a nutrition student but really
          unhappy with my carrer choice, but then i started coding as a hobbie
          and later on became my passion, my first language was C as every
          single suffer CS student, but then i started to learn Javascript and
          fell in love, had some breafing contact in my College and get deeper
          on docs and online courses, Since always i have been working with web
          development
        </p>
        <p>
          Since i get passionate about the javascript ecossistem, i get my
          knowledge realy deeper into NodeJS and also NextJS, i always wanted to
          be a fullstack developer
        </p>
        <p>
          When i not coding,i&apos;m probably playling volleyball, in the gym or
          even studying a little bit about finance
        </p>
      </div>
    </div>
  );
}
