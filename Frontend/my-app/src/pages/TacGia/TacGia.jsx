import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabList , TabContext, TabPanel} from '@mui/lab';
import { useState } from 'react';
import TabNopBai from './TabNopBai';

export default function TacGia() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '50%',
      typography: 'body1',
      mt: 5,
      borderColor: 'darkblue',
      border: 1,
      ml: 'auto',
      mr: 'auto'
    }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Workflow" value="1" />
            <Tab label="Publication" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TabNopBai/>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>

      </TabContext>
    </Box>
  );
}