import React from "react";
import { Thing } from "@/types";
import Link from "next/link";

const TEST_API = "https://jsonplaceholder.typicode.com/users";

const page = async () => {
  const res = await fetch(TEST_API);
  const posts: Thing[] = await res.json();
  return (
    <div>
      <Link className="max-w-sm" href="/">
        <h3 className="text-xl font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          &lt;- Kembali
        </h3>
      </Link>
    </div>
  );
};

export default page;
