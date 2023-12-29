import { Empty } from '@/components/Empty';
import { RecommendedPosts } from '@/components/RecommendedPosts';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Empty>
        <h1 className="text-center text-4xl font-extrabold">
          Oops, Esse post não foi Encontrado.
        </h1>
        <p className="mt-4 text-center text-xl text-gray-400">
          Posts Recomendados para Você
        </p>

        <RecommendedPosts />
        <Link href="/">Voltar para a pagina Inicial</Link>
      </Empty>
    </>
  );
}
