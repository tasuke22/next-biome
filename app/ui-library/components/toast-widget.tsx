"use client";

import { Widget } from "@/app/ui-library/components/widget";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function ToastWidget() {
	const { toast } = useToast();

	return (
		<Widget title="お知らせ" description="hoge">
			<Button
				variant="outline"
				onClick={() => {
					toast({
						title: "Scheduled: Catch up ",
						description: "Friday, February 10, 2023 at 5:57 PM",
						action: (
							<ToastAction altText="Goto schedule to undo">Undo</ToastAction>
						),
					});
				}}
			>
				Show toast
			</Button>
		</Widget>
	);
}
