import React from 'react'
import './calendar.css'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Box, List, ListItem, ListItemText, Typography, useTheme, } from "@mui/material"; const Calendar = () => {

    const [currentEvents, setCurrentEvents] = React.useState([]);
    const handleDateCick = (selected) => {
        const title = prompt("Please enter a new title for your event")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    }
    return (
        <div className='calander'>
            <div className="calander-header">
                <h2>CALANDER</h2>
                <span className='second-title'>Full Calander attractive page</span>
            </div>

            <Box style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
                <Box style={{
                    flex: "1 1 20%", backgroundColor: "#0E1F36",
                    padding: "15px", borderRadius: "4px"
                }}>
                    <div variant="h5" >Event</div>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem key={event.id}
                                style={{
                                    backgroundColor: "#13DF9B", borderRadius: "2px", marginTop: "10px"
                                }}>
                                <ListItemText primary={event.title} secodary={<Typography>
                                    {formatDate(event.start, {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",

                                    })}
                                </Typography>} />



                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box flex="1 1 100%" ml="8px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateCick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            { id: "1234", title: "All-day event", date: "2022-10-14" },
                            { id: "4321", title: "Timed event", date: "2022-10-28" },
                        ]} />
                </Box>
            </Box>
        </div>
    )
}

export default Calendar
