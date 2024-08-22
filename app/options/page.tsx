"use client";
import List from "@/components/edv/investments/list";
import { Button } from "@/components/ui/button";
import useSchoolStore from "@/hooks/use-school";

const LendersPage = () => {
  const { schoolName } = useSchoolStore();

  let title =
    schoolName.length > 0
      ? schoolName
      : "Get The Best Investment Rates For August 2024";

  return (
    <main>
      <section className="p-4 py-6">
        <h1 className="text-center text-2xl font-semibold">{title}</h1>
      </section>
      <List />
    </main>
  );
};

export default LendersPage;
