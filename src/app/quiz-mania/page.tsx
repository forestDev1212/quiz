import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import "@/css/opensans.css";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col bg-white">
        <div className="h-[12rem] p-5">
          <div className="mb-6 flex flex-row items-center justify-between">
            <h1 className="text-black text-6xl">Title</h1>
            <div>
              <a href="#" className="text-black">
                Link 1
              </a>
              <a href="#" className="ml-4 text-black">
                Link 2
              </a>
              {/* Add more links as needed */}
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[url('/images/bg.jpg')]">
          Fill Remaining Height
        </div>
        {/* Add more divs as needed */}
      </div>
    </>
  );
}
