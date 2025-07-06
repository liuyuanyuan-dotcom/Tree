export async function GET(request, { params }) {
  const courses = await getCoursesFromDB();
  return new Response(JSON.stringify(courses));
}