import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';

const Pagination: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {[
              'Student ID',
              'First Name',
              'Last Name',
              'Program',
              'Year',
              'Time In',
              'Time Out'
            ].map((head, idx) => {
              return (
                <>
                  <TableCell key={idx}>{head}</TableCell>
                  <h1>Hi</h1>
                </>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <h1>Hello</h1>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Pagination;