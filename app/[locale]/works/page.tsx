import { redirect } from "next/navigation";

type WorksPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function WorksPage({ params }: WorksPageProps) {
  const { locale } = await params;
  redirect(`/${locale}`);
}
