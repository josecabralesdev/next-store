import Providers from "@/store/provider";
import Carrito from "./carrito/Carrito";

export const metadata = {
  title: "Next Store",
  description: "Next Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
        <body>
          <Carrito />
          <div>
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}