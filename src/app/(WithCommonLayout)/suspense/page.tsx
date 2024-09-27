import ComponentOne from "./_components/ComponentOne";
import ComponentTwo from "./_components/ComponentTwo";
import { Suspense } from "react";
import CardLoading from "./_components/CardLoading";
import ErrorBoundary from "@/src/components/modules/ErrorBoundary/ErrorBoundary";
import CardError from "./_components/CardError";

const SuspensePage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-5">Suspense Page</h1>
      <div className="flex gap-5 mx-2">
        <ErrorBoundary fallback={<CardError />}>
          <Suspense fallback={<CardLoading />}>
            <ComponentOne />
          </Suspense>
        </ErrorBoundary>
        <ComponentTwo />
      </div>
    </div>
  );
};

export default SuspensePage;
