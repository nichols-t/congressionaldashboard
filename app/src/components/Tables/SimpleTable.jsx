import React from 'react';
import { DataTable } from 'carbon-components-react';

/**
 * Wrapper for Carbon's `DataTable` that renders a simple table with the given row and header information. Accepts
 * all other props that DataTable can take, and any defaults defined here can be overriden.
 * @param {*} props must contain `rows` and `headers` arrays, and may contain other props accepted by `DataTable`.
 * @return {*} rendered table.
 */
const SimpleTable = ({ rows, headers, ...otherProps }) => (
  <DataTable
    rows={rows}
    headers={headers}
    render={({ rows, headers, getHeaderProps, onInputChange }) => (
      <DataTable.TableContainer title="Members Table">
        <DataTable.TableToolbar>
          <DataTable.TableToolbarSearch onChange={onInputChange} />
        </DataTable.TableToolbar>
        <DataTable.Table>
          <DataTable.TableHead>
            <DataTable.TableRow>
              {headers.map((header) => (<DataTable.TableHeader {...getHeaderProps({ header })}>
                {header.header}
              </DataTable.TableHeader>))}
            </DataTable.TableRow>
          </DataTable.TableHead>
          <DataTable.TableBody>
            {rows.map((row) => (
              <DataTable.TableRow key={row.id}>
                {row.cells.map((cell) => (<DataTable.TableCell key={cell.id}>
                  {cell.value}
                </DataTable.TableCell>))}
              </DataTable.TableRow>
            ))}
          </DataTable.TableBody>
        </DataTable.Table>
      </DataTable.TableContainer>
    )}
    {...otherProps}
  />
);

export default SimpleTable;
