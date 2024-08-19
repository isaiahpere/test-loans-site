"use client";
import List from "@/components/edv/investments/list";
import { Button } from "@/components/ui/button";
import { useSearchSchoolStore } from "@/hooks/use-search-school";

const LendersPage = () => {
  const schoolSearchStore = useSearchSchoolStore();

  let text = schoolSearchStore.isOpen;

  console.log(schoolSearchStore.isOpen);

  return (
    <main>
      <section className="p-4 py-6">
        <h1 className="text-center text-2xl font-semibold">
          Get The Best Investment Rates For August 2024
        </h1>
        <p>is Open {schoolSearchStore.isOpen}</p>
      </section>
      <Button onClick={schoolSearchStore.onClose}>Click Me</Button>
      <List />
    </main>
  );
};

export default LendersPage;
