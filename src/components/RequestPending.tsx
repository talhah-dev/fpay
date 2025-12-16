import { ArrowUpRightIcon, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function RequestPending() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Clock className="h-8 w-8" />
        </EmptyMedia>

        <EmptyTitle>Request Sent to Admin</EmptyTitle>

        <EmptyDescription>
          Your access request has been submitted and is pending approval. You’ll be
          added within <span className="font-medium">24 hours</span>.
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent>
        {/* <div className="flex flex-wrap gap-2">
          <Button>
            <Send className="mr-2 h-4 w-4" />
            Send Again
          </Button>

          <Button variant="outline">Contact Admin</Button>

          <Button variant="outline" asChild>
            <a href="/support">View Status</a>
          </Button>
        </div> */}

        <div className=" rounded-lg border bg-muted/30 p-3 text-sm text-muted-foreground">
          Tip: If you don’t get access within 24 hours, contact your admin or support.
        </div>
      </EmptyContent>

      <Button variant="link" asChild className="text-muted-foreground" size="sm">
        <a href="/help/access">
          Why do I need approval? <ArrowUpRightIcon className="ml-1 h-4 w-4" />
        </a>
      </Button>
    </Empty>
  )
}
