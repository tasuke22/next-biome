import { QaWidget } from "@/app/ui-library/components/qaWidget";
import CarouselWidget from "@/app/ui-library/components/carousel-widget";
import { ToastWidget } from "@/app/ui-library/components/toast-widget";

const Page = () => {
	return (
		<div className="container py-6">
			<div className="grid lg:grid-cols-3 gap-5">
				<QaWidget />
				<CarouselWidget />
				<ToastWidget />
			</div>
		</div>
	);
};

export default Page;
