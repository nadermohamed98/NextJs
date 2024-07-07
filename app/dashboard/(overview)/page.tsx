// import { Card } from "../../ui/dashboard/cards";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { lusitana } from "../../ui/fonts";
import { fetchCardData } from "../../lib/data";
import { Suspense } from "react";
import { RevenueChartSkeleton,LatestInvoicesSkeleton,CardsSkeleton } from "@/app/ui/skeletons";

export default async function Page(){
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices();
    const cardData = await fetchCardData();
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
                {/* <Card title="Collected Amout" value={cardData.totalPaidInvoices} type="collected" />
                <Card title="Pending Amout" value={cardData.totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={cardData.numberOfInvoices} type="invoices" />
                <Card title="Total Customers" value={cardData.numberOfCustomers} type="customers" /> */}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}