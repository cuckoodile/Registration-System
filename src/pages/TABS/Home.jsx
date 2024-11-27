// Component imports
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import MyCustomDialog from "../../components/MyDialog"

// Methods and necessities import
import { useState, useEffect, useRef } from "react"
import { retrieveProfiles } from "../../api/profiles"
import React from "react"


export default function HomeTab() {
  // State references
  const [reloader, setReloader] = useState(false)
  const [students, setStudents] = useState([])
  const [isViewDialogOpen, setIsViewDialogOpen] = React.useState(false)
  const [viewDialogData, setViewDialogData] = useState(null)

  // Value references
  const studentIdRef = useRef(null)
  const studentNameRef = useRef(null)
  const gradeRef = useRef(null)
  const sectionRef = useRef(null)
  const statusRef = useRef(null)

  // Database manipulation
  useEffect(() => {
    retrieveProfiles()
      .then(res => {
        if (res.ok) {
          setStudents(res.data)
        }
      })
  }, [reloader])

  // const handleAdd = () => {
  //   const postData = { studentName: studentNameRef.current.value, grade: gradeRef.current.value, section: sectionRef.current.value, status: statusRef.current.value }

  //   addProfiles(postData).then(res => {
  //     if (res.ok) {
  //       setReloader(!reloader)
  //       setIsOpen(false)
  //     } else {
  //       console.log(res.errors)
  //     }
  //   })
  // }

  // const handleUpdate = (Id) => {
  //   const patchData = { id: Id, nickname: updateNicknameRef.current.value, fullName: updateFullNameRef.current.value, aboutMe: updateAboutMeRef.current.value }

  //   updateProfiles(patchData).then(res => {
  //     if (res.ok) {
  //       setReloader(!reloader)
  //       setIsUpdateOpen(false)
  //       setEditID(null)
  //     } else {
  //       console.log(res.errors)
  //     }
  //   })
  // }

  // const handleDelete = (Id) => {
  //   const deleteData = { id: Id }

  //   deleteProfiles(deleteData).then(res => {
  //     if (res.ok) {
  //       setReloader(!reloader)
  //       setIsDeleteOpen(false)
  //       setDeleteID(null)
  //     } else {
  //       console.log(res.errors)
  //     }
  //   })
  // }

  return (
    <main className="flex flex-col gap-4">

      {/* Sample summary component */}
      <section className="p-3 border-2 flex h-[10rem]">

        {/* Total gender section */}
        <div className="w-[10%] h-fit flex flex-col justify-center border-2 p-1 rounded-[.5rem]">
          <section className="flex justify-between">
            <p>Female</p>
            <p>100</p>
          </section>
          <section className="flex justify-between">
            <p>Male</p>
            <p>100</p>
          </section>
          <section className="flex justify-between">
            <p>Total</p>
            <p>100</p>
          </section>
        </div>
      </section>

      {/* Add student */}
      <section className="flex justify-end">
        <Button className="right-0">New Student</Button>
      </section>

      {/* Table content */}
      <Table className="border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10%]">Student ID</TableHead>
            <TableHead className="w-[30%] pl-10">Name</TableHead>
            <TableHead className="w-[10%]">Grade</TableHead>
            <TableHead className="w-[15%]">Section</TableHead>
            <TableHead className="w-[15%]">Status</TableHead>
            <TableHead className="w-[13%] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {students?.map((student) => (
            <TableRow key={student.id} className="cursor-pointer" >
              <TableCell className="w-[10%] pl-10" onClick={() => {
              setIsViewDialogOpen(true)
              setViewDialogData(student)
            }}>{student.id}</TableCell>
              <TableCell className="w-[30%]" onClick={() => {
              setIsViewDialogOpen(true)
              setViewDialogData(student)
            }}>{student.studentName}</TableCell>
              <TableCell className="w-[10%] pl-6" onClick={() => {
              setIsViewDialogOpen(true)
              setViewDialogData(student)
            }}>{student.grade}</TableCell>
              <TableCell className="w-[15%]" onClick={() => {
              setIsViewDialogOpen(true)
              setViewDialogData(student)
            }}>{student.section}</TableCell>
              <TableCell className="w-[15%]" onClick={() => {
              setIsViewDialogOpen(true)
              setViewDialogData(student)
            }}>{student.status}</TableCell>
              <TableCell className="w-[100%] flex justify-center items-center py-2 gap-2">
                <Button>Edit</Button>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>A list of students as of S.Y. 2024-2025.</TableCaption>

        {/* View dialog pop-up */}
        <MyCustomDialog data={{ title: "View panel", description: `Student ${viewDialogData?.studentName || "no data"}`, enter: "Close" }} open={isViewDialogOpen} setOpen={setIsViewDialogOpen}>
          <section className="flex justify-between w-[90%] gap-2">
            <label className="flex-1 text-end" htmlFor="">Full Name</label>
            <input type="text" className="text-white bg-transparent border-b-[1px] pl-2" disabled ref={studentNameRef} value={viewDialogData?.studentName || "no data"} />
          </section>
          <section className="flex justify-between w-[90%] gap-2">
            <label className="flex-1 text-end" htmlFor="">Grade</label>
            <input type="text" className="text-white bg-transparent border-b-[1px] pl-2" disabled ref={gradeRef} value={viewDialogData?.grade || "no data"}/>
          </section>
          <section className="flex justify-between w-[90%] gap-2">
            <label className="flex-1 text-end" htmlFor="">Section</label>
            <input type="text" className="text-white bg-transparent border-b-[1px] pl-2" disabled ref={sectionRef} value={viewDialogData?.section || "no data"}/>
          </section>
          <section className="flex justify-between w-[90%] gap-2">
            <label className="flex-1 text-end" htmlFor="">Status</label>
            <input type="text" className="text-white bg-transparent border-b-[1px] pl-2" disabled ref={statusRef} value={viewDialogData?.status || "no data"}/>
          </section>
        </MyCustomDialog>
      </Table>
    </main>
  )
}