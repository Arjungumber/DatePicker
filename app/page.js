import DatePickerComponent from "@/components/DatePickerComponent";
import Interval from "@/components/Interval";
import RecurrenceOptions from "@/components/RecurrenceOptions";
import VisualPreview from "@/components/VisualPreview";

export default function Home() {
  return (
  //   <div className="min-h-screen bg-gray-100 p-8">
  //   <main className="max-w-2xl mx-auto">
  //     <h1 className="text-3xl font-bold mb-8 textGradient">Date Picker Component</h1>
  //     <DatePickerComponent />
  //     <RecurrenceOptions/>
  //     <Interval/>
  //     <VisualPreview/>
  //   </main>
  // </div>
 <div className="min-h-screen bg-gray-100 p-8">
  <h1 className="text-3xl text-center mt-2 font-bold mb-8 textGradient">Date Picker Component</h1>
  <div className="flex flex-col justify-center lg:flex-row gap-28 sm:flex-col sm:gap-14 md:gap-24">
    <div className="mt-5">
    <DatePickerComponent/>
      <RecurrenceOptions/>
      <Interval/>
    </div>
    <div className="mt-5">
    <VisualPreview/>
    </div>
  </div>
  </div>
  );
}
