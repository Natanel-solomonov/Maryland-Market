import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import { Turtle, CheckCircle, NotebookPen } from "lucide-react";

const perks = [
  {
    name: "Buy safely and exclusively from other Terps",
    Icon: Turtle,
    description:
      "Buy and sell to UMD students and communicate with them directly.",
  },
  {
    name: "Guaranteed Buyer Safety",
    Icon: CheckCircle,
    description: "Every seller and product is verified by our team.",
  },
  {
    name: "For the Students",
    Icon: NotebookPen,
    description: "Made by a student for the students.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
            Your UMD Student Exclusive Marketplace for high-quality{" "}
            <span className="text-red-400">New and Used Goods</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to The Maryland Market. To ensure the safety of our users,
            every product on the platform is verified by our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </div>
        {/* Todo list products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-8">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
