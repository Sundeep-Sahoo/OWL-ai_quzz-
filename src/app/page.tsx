import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
    <main className="flex   
    justify-center  flex-1">
      <h3 className="text-6xl font-bold ">Welcome to the OWL🦉</h3>
    </main>
    <footer className="footer pb-9 px-6 relative mb-0">
      <a href="/quizz"><Button>Start</Button></a>
      
    </footer>
    </div>
  )
}
