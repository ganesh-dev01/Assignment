import React, { useContext, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Box, TextField, Button, MenuItem } from "@mui/material";
import ThemeContext from "@/Theme/Themestate";
import styles from '@/styles/doctor/dct_calender.module.css'

// Sample Appointment Data
const appointmentData = [
  { patient: "Arjun saha", date: "2025-02-15", time: "10:30 AM", purpose: "General Checkup" },
  { patient: "Priya roy", date: "2025-02-16", time: "02:00 PM", purpose: "Dental Consultation" },
  { patient: "Aniket roy", date: "2025-02-18", time: "04:45 PM", purpose: "Eye Examination" }
];

// Function to format time properly for FullCalendar
const formatTime = (date: string, time: string) => {
  const [hours, minutes] = time.split(/[: ]/);
  const isPM = time.includes("PM");
  const formattedHours = isPM ? (parseInt(hours) % 12) + 12 : parseInt(hours);
  return `${date}T${formattedHours.toString().padStart(2, "0")}:${minutes}:00`;
};

const Calender = () => {
  // Convert appointment data to FullCalendar events
  const [events, setEvents] = useState(
    appointmentData.map((apt) => ({
      title: `${apt.patient} - ${apt.purpose}`,
      start: formatTime(apt.date, apt.time),
      color: apt.purpose.includes("Dental") ? "#f4b400" : apt.purpose.includes("Eye") ? "#4285f4" : "#34a853"
    }))
  );
  const theme_data = useContext(ThemeContext);
  return (
    <div className={styles[`main_${theme_data?.theme}`]}>

    <div className={styles.container}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        events={events}
        editable={true}
      />
    </div>
    
    </div>
   
  );
};

export default Calender;
