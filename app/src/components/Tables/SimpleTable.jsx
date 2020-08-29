import React from 'react';
import { DataTable } from 'carbon-components-react';
import SingleMember from '../Member/SingleMember';

/**
 * Wrapper for Carbon's `DataTable` that renders a simple table with the given row and header information. Accepts
 * all other props that DataTable can take, and any defaults defined here can be overriden.
 * @param {*} props must contain `rows` and `headers` arrays, and may contain other props accepted by `DataTable`.
 * @return {*} rendered table.
 */
const SimpleTable = ({ rows: initialRows, headers, ...otherProps }) => (
  <DataTable
    rows={initialRows}
    headers={headers}
    render={({ rows, headers, getHeaderProps, onInputChange, getRowProps }) => (
      <DataTable.TableContainer title="Members Table">
        <DataTable.TableToolbar>
          <DataTable.TableToolbarSearch onChange={onInputChange} />
        </DataTable.TableToolbar>
        <DataTable.Table>
          <DataTable.TableHead>
            <DataTable.TableRow>
              <DataTable.TableExpandHeader />
              {headers.map((header) => (<DataTable.TableHeader {...getHeaderProps({ header })}>
                {header.header}
              </DataTable.TableHeader>))}
            </DataTable.TableRow>
          </DataTable.TableHead>
          <DataTable.TableBody>
            {rows.map((row) => (
              <React.Fragment key={row.id}>
              <DataTable.TableExpandRow {...getRowProps({ row })}>
                {row.cells.map((cell) => (<DataTable.TableCell key={cell.id}>
                    {cell.value}
                  </DataTable.TableCell>))}
              </DataTable.TableExpandRow>
              {row.isExpanded && <DataTable.TableExpandedRow colSpan={headers.length + 1}>
                {/** the DataTable seems to prune the incoming row objects to remove any extraneous fields,
                 * so we have to get the initial data for this particular row from the prop rather than just
                 * giving it the `row` object, which is what we would want to do. This isn't optimal but there
                 * are a limited number of people in congress at any given time, so probably okay.
                 */}
                <SingleMember member={initialRows.find((r) => r.id === row.id)} />
              </DataTable.TableExpandedRow>}
              </React.Fragment>
            ))}
          </DataTable.TableBody>
        </DataTable.Table>
      </DataTable.TableContainer>
    )}
    {...otherProps}
  />
);

export default SimpleTable;
