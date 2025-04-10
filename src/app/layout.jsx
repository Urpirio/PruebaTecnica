import '@/Style/Global.css';

export default function layout({children}) {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>UCars</title>
    </head>
        {children}
    </html>
  )
}
