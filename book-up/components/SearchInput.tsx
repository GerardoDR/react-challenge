"use client";

import { TextInput } from "flowbite-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export function SearchInput() {
  return (
    <div className="max-w-lg">
      <TextInput id="searchInput" type="text" color="warning" rightIcon={MagnifyingGlassIcon} placeholder="El señor de los anillos" required />
    </div>
  );
}