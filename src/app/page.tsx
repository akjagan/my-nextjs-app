import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[var(--font-geist-sans)]">
      {/* Main Content */}
      <main className="flex flex-col items-center sm:items-start gap-8 row-start-2">
        {/* Logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Instructions */}
        <ol className="font-[var(--font-geist-mono)] text-center text-sm sm:text-left list-decimal list-inside">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {/* Actions */}
        <div className="flex sm:flex-row flex-col items-center gap-4">
          {/* Deploy Now */}
          <a
            className="flex justify-center items-center gap-2 bg-foreground hover:bg-gray-700 dark:hover:bg-gray-300 px-4 sm:px-5 border border-transparent border-solid rounded-full h-10 sm:h-12 text-background text-sm sm:text-base transition-colors"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logo"
              width={20}
              height={20}
            />
            Deploy Now
          </a>

          {/* Read Documentation */}
          <a
            className="flex justify-center items-center border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 sm:px-5 border hover:border-transparent border-solid rounded-full sm:min-w-44 h-10 sm:h-12 text-sm sm:text-base transition-colors"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Our Docs
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap justify-center items-center gap-6 row-start-3">
        {/* Learn Link */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden="true"
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>

        {/* Examples Link */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden="true"
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>

        {/* Go to Next.js */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden="true"
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
