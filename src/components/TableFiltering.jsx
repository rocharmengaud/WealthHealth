import * as React from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { setAutoFreeze } from 'immer';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export const TableFiltering = () => {
  setAutoFreeze(false);
  const defaultMaterialTheme = createTheme();
  const users = useSelector((state) => state.users);

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        icons={tableIcons}
        title="Current employees"
        columns={[
          { title: 'Name', field: 'firstName', width: 90 },
          { title: 'Last name', field: 'lastName', width: 90 },
          { title: 'Date of birth', field: 'dateOfBirth', width: 100 },
          {
            title: 'Start date',
            field: 'startDate',
            width: 100,
          },
          { field: 'street', title: 'Street', type: 'string', width: 100 },
          { field: 'city', title: 'City', width: 100 },
          { field: 'state', title: 'State', width: 100 },
          { field: 'zipcode', title: 'Zip code', width: 100 },
          {
            field: 'department',
            title: 'Department',
            type: 'string',
            width: 100,
          },
        ]}
        // data={[
        //   { firstName: 'Mehmet', lastName: 'Baran', dateOfBirth: 1987, city: 'Alabama' },
        //   { firstName: 'Zerya Betül', lastName: 'Baran', dateOfBirth: 2017, zipcode: '12000' },
        // ]}
        data={users}
        options={{
          filtering: false,
          hideFilterIcons: true,
        }}
      />
    </ThemeProvider>
  );
};
