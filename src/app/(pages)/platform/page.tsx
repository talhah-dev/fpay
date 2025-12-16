import { ChartAreaInteractive } from '@/components/ChartAreaInteractive'
import { DashboardCards } from '@/components/DashboardCards'
import DataTable from '@/components/Table'

export default function page() {
    return (
        <div>

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <DashboardCards />
                        <div className="px-4 lg:px-6">
                            <ChartAreaInteractive />
                            <DataTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
