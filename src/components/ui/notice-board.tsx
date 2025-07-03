"use client"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NoticeSlider } from "@/components/ui/notice-slider"
import { CalendarIcon } from "lucide-react"

export default function NoticeBoard() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-6">
        

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Calendar Section - Smaller Width */}
          <div className="xl:col-span-1">
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-4 mt-2">
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <CalendarIcon className="h-5 w-5 text-blue-600" />
                  <span>Calendar</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-lg border-0 w-full"
                  classNames={{
                    months: "flex w-full flex-col space-y-4 flex-1",
                    month: "space-y-4 w-full flex flex-col",
                    table: "w-full border-collapse space-y-1",
                    head_row: "flex w-full",
                    head_cell: "text-slate-500 rounded-md w-8 font-normal text-xs flex-1 text-center",
                    row: "flex w-full mt-2",
                    cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 flex-1",
                    day: "h-8 w-8 p-0 font-normal hover:bg-blue-100 hover:text-blue-900 rounded-md transition-colors mx-auto",
                    day_selected:
                      "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white",
                    day_today: "bg-slate-100 text-slate-900 font-semibold",
                    day_outside: "text-slate-400 opacity-50",
                    day_disabled: "text-slate-400 opacity-50",
                    day_hidden: "invisible",
                  }}
                />
                {selectedDate && isMounted && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <p className="text-xs font-medium text-slate-600 mb-1">Selected Date</p>
                    <p className="text-sm font-semibold text-blue-700">
                      {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Notices Section - Larger Width */}
          <div className="xl:col-span-3">
            <NoticeSlider selectedDate={selectedDate} />
          </div>
        </div>
      </div>
    </div>
  )
}
