"use client";
import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ChildAttendance } from "@/types/types";
import { ChildDataTable } from "@/components/ui/custom/child-records-table";

// Sample child attendance data (replace with real data)
const childAttendanceData: ChildAttendance[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Michael Smith",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
  {
    id: "1",
    name: "Tuntufye Mwakibinga",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Mwakifumbwa Michael",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
  {
    id: "1",
    name: "Nshiminye Johnson",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Imana Smith",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
  {
    id: "1",
    name: "Sarah Finna",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Mikaeli Smis",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
  {
    id: "1",
    name: "Sarai Lot",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Gabu Smith",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
  {
    id: "1",
    name: "Abram Johnson",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Moses Smith",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
];

// Define columns for child attendance data table
export const columns: ColumnDef<ChildAttendance>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "weight",
    header: "Weight (kg)",
  },
  {
    accessorKey: "height",
    header: "Height (cm)",
  },
  {
    accessorKey: "lastVisit",
    header: "Last Visit Date",
  },
];

export function ChildRecords() {
  // const [childAttendanceData, setChildAttendanceData] = useState<
  //   ChildAttendance[]
  // >([]);

  // useEffect(() => {
  //   // Fetch data from backend API endpoint
  //   fetchChildrenData();
  // }, []);

  // const fetchChildrenData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/api/children");
  //     if (response.ok) {
  //       const data = await response.json();
  //       setChildAttendanceData(data);
  //     } else {
  //       throw new Error("Failed to fetch data");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // Render the table
  return (
    <div className="w-full">
      <ChildDataTable
        data={childAttendanceData}
        columns={columns}
      />
    </div>
  );
}
