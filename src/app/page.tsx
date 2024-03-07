import Header from '@/components/header'
import MainContent from '@/components/main-content'
import Projects from '@/components/projects'
import SocialMedia from '@/components/social-media'

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-[95%] max-w-lg flex-col items-center justify-center py-10">
      <Header />
      <SocialMedia />
      <MainContent />
      <Projects />
    </main>
  )
}
