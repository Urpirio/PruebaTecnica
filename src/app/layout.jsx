import '@/Style/Global.css';
import Header from './Components/Header';

export default function layout({children}) {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>UCars</title>
        <meta name="description" content="Prueba Tecnica para OneMax" />
    </head>
        <body>
          <Header/>
          {children}
        </body>
    </html>
  )
}
