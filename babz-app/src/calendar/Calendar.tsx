import React from 'react';
// import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
// import type { SizeType } from 'antd/es/config-provider/SizeContext';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import './calendar.less';

dayjs.extend(customParseFormat);

// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
//   console.log(date, dateString);
// };
const dateFormat = 'DD.MM.YYYY';

const Calendar = () => {
  // const [size, setSize] = useState<SizeType>('large');
  return (
    <>
      <Space direction="vertical">
        <DatePicker size={'large'} defaultValue={dayjs(dayjs(), dateFormat)} format={dateFormat} />
      </Space>
    </>
  );
}

export default Calendar;
