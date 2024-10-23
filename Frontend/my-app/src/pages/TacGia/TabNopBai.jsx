import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabList , TabContext, TabPanel} from '@mui/lab';
import { useState } from 'react';

export default function TabNopBai() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', mt: 2, p: 2}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
            sx={{
                display: 'flex',
                justifyItems: 'flex-start'
            }}>
            <Tab label="Submission" value="1" />
            <Tab label="Review" value="2" />
            <Tab label="Copyediting" value="3" />
            <Tab label="Production" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Box
                sx={{
                    border: 1,
                    borderColor: 'red',
                    height: '900px',
                    width: '100%'
                }}
            >

            </Box>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>

      </TabContext>
    </Box>
  );
}