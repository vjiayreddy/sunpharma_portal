"use client";
import { useParams } from "next/navigation";

export default function Component() {
  const params = useParams();
  const tenant = params.subdomain;
  return <div>Sub domine {tenant} page</div>;
}
