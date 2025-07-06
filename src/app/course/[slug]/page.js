'use client';

export default function CoursePage({ params }) {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">
        {decodeURIComponent(params.slug)}
      </h1>
      {/* 课程详情内容 */}
    </main>
  );
}