export async function GET() {
  return new Response('google-site-verification: google80b0816859613ef2.html', {
    headers: { 'Content-Type': 'text/html' },
  });
}
