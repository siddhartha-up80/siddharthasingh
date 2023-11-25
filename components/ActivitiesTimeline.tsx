"use client";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";

export function ActivitiesTimeline() {
  return (
    <div className="w-[50vw] my-10 mx-auto">
      <span className="text-2xl text-center flex justify-center items-center my-10">
        MY EDUCATION
      </span>
      <Timeline>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-3 w-36 text-center" variant="ghost">
              {/* <BellIcon className="h-5 w-5" /> */}
              Graduation
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                Vellore Institute of Technology, Bhopal
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                July, 2020 - July, 2024
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon
              className="p-3 w-36 text-center"
              variant="ghost"
              color="red"
            >
              {/* <ArchiveBoxIcon className="h-5 w-5" /> */}
              Class 12
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                Vijaya International School, Agra
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                April, 2017 - April, 2019
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon
              className="p-3 w-36 text-center"
              variant="ghost"
              color="green"
            >
              {/* <CurrencyDollarIcon className="h-5 w-5" /> */}
              Class 10
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                Kendriya Vidyalaya No. 3 Agra Cantt
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                April, 2007 - April, 2017
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
