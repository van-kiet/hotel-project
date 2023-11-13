import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space, notification } from "antd";
import moment from "moment";
import { updateDateListApi } from "../../../services/room";
export default function InputDate(props) {
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [dateList, setdateList] = useState();
  dayjs.extend(customParseFormat);
  const { RangePicker } = DatePicker;
  const { id, room } = props;

  const disabledDate = (current) => {
    let listDateDisable = room[0].date;

    let specificDisabledDate = [];
    for (let i in listDateDisable) {
      let dateString = moment(new Date(JSON.parse(listDateDisable[i]))).format(
        "MM/DD/YYYY"
      );
      specificDisabledDate = [...specificDisabledDate, dateString];
    }
    if (specificDisabledDate.includes(current.format("MM/DD/YYYY"))) {
      return true;
    }
    if (current < dayjs().startOf("day")) {
      return true;
    }
  };

  function handleRangePickerChange(dates, dateStrings) {
    setDateRange({
      start: moment(dateStrings[0], "DD/MM/YYYY").format("MM/DD/YYYY"),
      end: moment(dateStrings[1], "DD/MM/YYYY").format("MM/DD/YYYY"),
    });
  }

  const getDateArray = function (start, end) {
    let arr = [];
    let startDate = new Date(start);
    let endDate = new Date(end);
    let xxx = JSON.stringify(startDate);
    // console.log(new Date(JSON.parse(xxx)));
    while (
      startDate.getDate() <= endDate.getDate() ||
      startDate.getMonth() <= endDate.getMonth()
    ) {
      let currentDate = new Date(startDate);
      arr.push(JSON.stringify(currentDate));
      if (
        startDate.getDate() === endDate.getDate() &&
        startDate.getMonth() === endDate.getMonth()
      ) {
        break;
      }
      startDate.setDate(startDate.getDate() + 1);
    }
    return arr;
  };
  useEffect(() => {
    if (dateRange.start !== null) {
      let date_range = getDateArray(dateRange.start, dateRange.end);

      setdateList(date_range);
    }
  }, [dateRange]);

  const booking = () => {
    if (dateList === undefined) {
      notification.open({
        message: "Notification",
        description: "Please select a booking date",
        duration: 3,
      });
      return;
    } else {
      for (let element of dateList) {
        if (room[0].date.indexOf(element) !== -1) {
          notification.open({
            message: "Notification",
            description:
              "This date has been booked, please choose another date",
            duration: 3,
          });
          return;
        }
      }

      for (let i = 0; i < dateList.length; i++) {
        room[0].date = [...room[0].date, dateList[i]];
      }
    }
    updateDateListApi(id, room[0])
      .then((response) => {
        notification.open({
          message: "Notification",
          description: "Successful booking",
          duration: 3,
        });
      })
      .catch((error) => {
        notification.open({
          message: "Notification",
          description: "Set date failed due to home page error",
          duration: 3,
        });
      });
  };
  return (
    <div className="row date">
      <Space className="col-8" direction="vertical" size={12}>
        <RangePicker
          onChange={handleRangePickerChange}
          format={"DD-MM-YYYY"}
          disabledDate={disabledDate}
          allowClear
        />
      </Space>
      <div className="col-4 booking-button">
        <button className="booking " onClick={() => booking()}>
          BOOKING
        </button>
      </div>
    </div>
  );
}
