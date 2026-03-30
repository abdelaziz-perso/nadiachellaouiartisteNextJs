import ClientRedirect from "@/components/ClientRedirect";

type WorksPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function WorksPage({ params }: WorksPageProps) {
  const { locale } = await params;
  return <ClientRedirect href={`/${locale}/`} />;
}
