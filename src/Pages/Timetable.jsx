// src/Timetable.js
import React from "react";
import { Table } from "flowbite-react";

const timetableData = [
  { time: "8:00 - 8:30 AM", activity: "Wake up, Morning Routine (bath, pray)" },
  { time: "8:30 - 9:00 AM", activity: "Breakfast" },
  { time: "9:00 - 10:00 AM", activity: "Study Frontend (React, TailwindCSS)" },
  { time: "10:00 - 1:00 PM", activity: "Online Class" },
  { time: "1:00 - 1:30 PM", activity: "Lunch" },
  { time: "1:30 - 2:30 PM", activity: "Study Backend (Node.js, Express)" },
  { time: "2:30 - 3:30 PM", activity: "Study Firebase" },
  { time: "3:30 - 4:00 PM", activity: "Free Time / Relaxation" },
  { time: "4:00 - 4:30 PM", activity: "Workout" },
  { time: "4:30 - 5:00 PM", activity: "Evening Coffee" },
  { time: "5:00 - 6:00 PM", activity: "Study Socket.io" },
  { time: "6:00 - 7:00 PM", activity: "Problem Solving / Practice" },
  { time: "7:00 - 8:00 PM", activity: "Dinner" },
  { time: "8:00 - 9:30 PM", activity: "Study MERN Stack" },
  { time: "9:30 - 10:30 PM", activity: "Review and Prep for Next Day" },
  { time: "10:30 - 11:00 PM", activity: "Wind down, relax" },
  { time: "11:00 PM", activity: "Sleep" },
];

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
