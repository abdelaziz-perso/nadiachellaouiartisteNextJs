import ClientRedirect from "@/components/ClientRedirect";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  return <ClientRedirect href={`/${locale}/`} />;
}
