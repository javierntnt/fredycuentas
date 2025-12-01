import Image from "next/image";

const BUTTONS = [
  { label: "Crear Cuentas", href: "/crearcuentas" },
  { label: "Historial", href: "/historial" },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Fondo: coloca la imagen del escudo en `public/escudo.png` */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-contain opacity-10 dark:opacity-6"
          style={{ backgroundImage: `url('/escudo.png')` }}
        />
      </div>

      <main className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-8 py-32 px-6 text-center sm:items-center">
        <h1 className="text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Bienvenido al sitio del club
        </h1>

        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Usa los botones abajo para navegar. Edita las rutas en la
          constante <code>BUTTONS</code> dentro de <code>app/page.tsx</code>.
        </p>

        <div className="flex w-full max-w-md gap-4 sm:gap-6">
          {BUTTONS.map((b) => (
            <a
              key={b.href}
              href={b.href}
              className="flex flex-1 items-center justify-center rounded-full border border-black/[.08] bg-white px-6 py-3 text-base font-medium text-black transition hover:shadow-md dark:border-white/[.12] dark:bg-[#0b0b0b] dark:text-zinc-50"
            >
              {b.label}
            </a>
          ))}
        </div>

        <div className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
          Nota: coloca el archivo del escudo en <code>public/escudo.png</code>.
        </div>
      </main>
    </div>
  );
}
