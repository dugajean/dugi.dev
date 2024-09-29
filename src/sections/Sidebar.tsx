import { AtSymbolIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const Sidebar = () => (
  <aside className="bg-indigo-800 bg-opacity-70 w-full md:w-1/4 px-12 py-12 print:py-12 md:py-24 md:rounded-tl-lg md:rounded-bl-lg print:rounded-none">
    <div className="flex flex-col md:sticky md:top-16 md:items-center text-white gap-4">
      <div className="w-40 md:w-24 lg:w-32 h-40 md:h-24 lg:h-32 self-center">
        <img
          loading="lazy"
          src="/self.webp"
          alt="Dugi's photo"
          className="block w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-col gap-8 print:gap-4">
        <div className="flex justify-between md:flex-col gap-8">
          <section>
            <h1 className="text-2xl font-bold">Dugi Surdulli</h1>
            <p className="uppercase text-xs font-light print:font-normal">
              Senior Software Engineer
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5" />
              <p aria-label="Dugi's location" className="text-sm whitespace-nowrap">
                Calgary, Canada
              </p>
            </div>
            <div className="flex items-center gap-2">
              <AtSymbolIcon className="w-5 h-5" />
              <p className="text-sm">
                <a
                  aria-label="Dugi's email address"
                  href="mailto:hello@dugi.dev"
                  className="hover:underline"
                >
                  hello@dugi.dev
                </a>
              </p>
            </div>
          </section>
        </div>
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Skills</h2>
          <dl className="flex gap-2 flex-wrap skills-list font-extralight print:text-sm">
            <dt className="uppercase text-xs font-semibold">Languages</dt>
            <dd>TypeScript</dd>
            <dd>JavaScript</dd>
            <dd>PHP</dd>
            <dd>Go</dd>
          </dl>
          <dl className="flex gap-2 flex-wrap skills-list font-extralight print:text-sm">
            <dt className="uppercase text-xs font-semibold">Frameworks and tools</dt>
            <dd>React</dd>
            <dd>Next.js</dd>
            <dd>TanStack Query</dd>
            <dd>React Hook Form</dd>
            <dd>Redux</dd>
            <dd>Jotai</dd>
            <dd>Zod</dd>
            <dd>Tailwind</dd>
            <dd>Vanilla Extract</dd>
            <dd>Chakra UI</dd>
          </dl>
          <dl className="flex gap-2 flex-wrap skills-list font-extralight print:text-sm">
            <dt className="uppercase text-xs font-semibold">Miscellaneous</dt>
            <dd>Agile</dd>
            <dd>Scrum</dd>
            <dd>JIRA</dd>
            <dd>Git</dd>
          </dl>
        </section>
      </div>
    </div>
  </aside>
);
