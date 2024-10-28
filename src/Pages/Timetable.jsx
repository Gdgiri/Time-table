// src/Timetable.js
import React from "react";
import { Table } from "flowbite-react";

const timetableData = [
  { time: "8:00 AM", activity: "Wake Up" },
  { time: "8:00 - 8:30 AM", activity: "Morning Routine (Coffee, Food, Bath, Pray)" },
  { time: "8:30 - 9:00 AM", activity: "Study Session 1 (Focus on theory/concepts)" },
  { time: "9:00 - 10:00 AM", activity: "Study Session 2 (Problem Solving/Practice)" },
  { time: "10:00 AM - 1:00 PM", activity: "Online Class" },
  { time: "1:00 - 1:30 PM", activity: "Lunch Break" },
  { time: "1:30 - 2:30 PM", activity: "Project Work (Hands-on development)" },
  { time: "2:30 - 3:00 PM", activity: "Break/Rest" },
  { time: "3:00 - 4:00 PM", activity: "Study Session 3 (Learning new topics)" },
  { time: "4:00 - 4:30 PM", activity: "Workout" },
  { time: "4:30 - 5:00 PM", activity: "Afternoon Break (Coffee, Relax)" },
  { time: "5:00 - 6:30 PM", activity: "Study Session 4 (Problem Solving Practice)" },
  { time: "6:30 - 7:00 PM", activity: "Dinner/Evening Meal" },
  { time: "7:00 - 9:00 PM", activity: "Project Work (Focus on finalizing tasks)" },
  { time: "9:00 - 9:30 PM", activity: "Break (Relax, Refresh)" },
  { time: "9:30 - 10:30 PM", activity: "Wind Down (Prepare for sleep)" },
  { time: "11:00 PM", activity: "Sleep" },
];

console.log(timetableData);


console.log(timetableData);


const Timetable = () => {
    
  return (
    <div className="container mx-auto mt-5 p-4">
      <h2 className="text-4xl font-semibold mb-4 text-pinker text-center">
        Daily Schedule
      </h2>
      <div className="bg-lavender p-6 rounded-xl shadow-2xl">
        <Table
          hoverable={true}
          className="shadow-2xl rounded-lg overflow-hidden text-center transform transition-all duration-300 hover:scale-105"
        >
          <Table.Head className="bg-rose text-center">
            <Table.HeadCell className="p-4 text-black text-center border-b-4 border-blue-800 shadow-md">
              Time
            </Table.HeadCell>
            <Table.HeadCell className="p-4 text-black text-center border-b-4 border-blue-800 shadow-md">
              Activity
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="bg-white rounded-b-lg shadow-lg">
            {timetableData.map((item, index) => (
              <Table.Row
                key={index}
                className="hover:bg-pinker text-white transition-all duration-300 transform hover:translate-x-1 hover:scale-105"
              >
                <Table.Cell className="p-4 font-semibold text-black hover:text-white shadow-sm">
                  {item.time}
                </Table.Cell>
                <Table.Cell className="p-4 text-black font-semibold hover:text-white shadow-sm">
                  {item.activity}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Timetable;
