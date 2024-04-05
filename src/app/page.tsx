import { MainContent } from "@/components/Main/MainContent";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-col items-center md:h-screen bg-neutral-900 w-full">
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1 w-full">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2"><p className="text-sm leading-6 text-zinc-50">
          <strong className="font-bold">50% OFF EN DESARROLLO WEB</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx="1" cy="1" r="1"></circle>
          </svg>Unite a *** con un 50% off durante el mes de ****</p>
          <a href="https://meetings.hubspot.com/digital-brain-studio?uuid=6ffcaaa8-8220-48f0-891a-9c85350900cb" target="_blank"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
            Quiero ser parte <span aria-hidden="true">→</span></a></div><div className="flex flex-1 justify-end"><button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]"><span class="sr-only">Dismiss</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5 text-zinc-50"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg></button></div></div>
      <MainContent />
    </main>
  );
}