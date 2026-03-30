import ClientRedirect from "@/components/ClientRedirect";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  return <ClientRedirect href={`/${locale}/`} />;
}
