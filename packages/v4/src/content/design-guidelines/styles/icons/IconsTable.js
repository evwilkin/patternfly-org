import React from 'react';
import {
  Form, 
  TextInput, 
  Title, 
  EmptyState, 
  EmptyStateVariant, 
  EmptyStateIcon, 
  EmptyStateBody,
  Tooltip,
  TooltipPosition
} from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import paramCase from 'param-case';
import './icons.css';
import coreIcons from '@patternfly/patternfly/icons/pf-icons';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  sortable,
  SortByDirection
} from '@patternfly/react-table';
import { iconsData } from './iconsData';
import { saveAs } from 'file-saver';

const allIcons = Object.entries(icons).filter(([name]) => name.endsWith('Icon'));
let commonIcons = allIcons.filter(([name]) => {
  const hyphenName = paramCase(name.slice(0, -4));
  return Boolean(coreIcons[hyphenName]);
});

commonIcons = commonIcons.sort((a , b) => {
  return a[0] > b[0] ? 1 : -1;
});

// const reactOnlyIcons = allIcons.filter(([name]) => {
//   const hyphenName = paramCase(name.slice(0, -4));
//   return !coreIcons[hyphenName];
// });

export class IconsTable extends React.Component {
  state = {
    searchValue: '',
    columns: [
      'Icon',
      { title: 'Name', transforms: [sortable] },
      'Style',
      { title: 'Type', transforms: [sortable] },
      'React',
      { title: 'Contextual usage', transforms: [sortable] }
    ],
    sortBy: {}
  };

  handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    this.setState(() => ({
      searchValue
    }));
  };

  onSort = (_event, index, direction) => {
    console.log(_event, index, direction);
    this.setState({
      sortBy: {
        index,
        direction
      }
    });
  }

  onDownloadSvg = ({ currentTarget }) => {
    const domNode = currentTarget.cloneNode(true);
    domNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    domNode.setAttribute("width", "100%");
    domNode.setAttribute("height", "100%");
    const { outerHTML } = domNode;
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const name = currentTarget.parentElement.nextSibling.textContent;
    const filename = `${name}.svg`;

    const blob = new Blob([preface, outerHTML], {
      type: 'image/svg+xml;charset=utf-8'
    });

    saveAs(blob, filename);
  };

  render() {
    const { searchValue, columns, sortBy } = this.state;
    const { direction, index } = sortBy;
    const searchRE = new RegExp(searchValue, 'i');
    const iconRows = commonIcons.map(([id, Icon]) => {
      const name = paramCase(id.slice(0, -4));
      const style = iconsData[id]
        ? iconsData[id].style
        : '';
      const type = iconsData[id]
        ? iconsData[id].type
        : '';
      const usage = iconsData[id]
        ? iconsData[id].usage
        : '';
      return {
        cells: [
          {
            title: (
              <Tooltip content="Download SVG" position={TooltipPosition.bottom}>
                <Icon onClick={this.onDownloadSvg} />
              </Tooltip>
            ),
            props: { column: 'Icon'}
          },
          {
            title: ( name ),
            props: { column: 'Name' }
          },
          {
            title: ( style ),
            props: { column: 'Style'}
          },
          {
            title: ( type ),
            props: { column: 'Type' }
          },
          {
            title: ( id ),
            props: { column: 'React'}
          },
          {
            title: ( usage ),
            props: { column: 'Contextual usage' }
          }
        ]
      }
    });

    let filteredRows = iconRows.filter(row => {
      return row.cells.some(cell => {
        return typeof cell.title === 'string' && searchRE.test(cell.title);
      })
    })

    if (direction) {
      const sortedRows = filteredRows.sort((a, b) => (
        a.cells[index].title < b.cells[index].title
          ? -1
          : a.cells[index].title > b.cells[index].title
            ? 1 : 0));
      filteredRows = direction === SortByDirection.asc ? sortedRows : sortedRows.reverse();
    }
    
    return (
      <React.Fragment>
        <div>
          <Form className="ws-content-search-icons" onSubmit={event => { event.preventDefault(); return false; }}>
            <TextInput
              type="text"
              id="primaryIconsSearch"
              name="primaryIconsSearch"
              placeholder="Search Icons"
              aria-label="Search Icons"
              value={searchValue}
              onChange={this.handleSearchChange}
            />
          </Form>

          {filteredRows.length} items
        </div>

        <Table
          aria-label="Sortable Table"
          sortBy={sortBy}
          onSort={this.onSort}
          cells={columns}
          rows={filteredRows}
          variant={TableVariant.compact}
          id="ws-icons-table"
        >
          <TableHeader />
          <TableBody />
        </Table>

        {filteredRows.length === 0 && (
          <EmptyState variant={EmptyStateVariant.full}>
            <EmptyStateIcon icon={icons.SearchIcon}/>
            <Title headingLevel="h5" size="2xl">
              No results found for "{ searchValue }".
            </Title>
            <EmptyStateBody>
              We couldn't find any icons that matched your search. Try entering a new search term to find what you're looking for.
            </EmptyStateBody>
          </EmptyState>
        )}
      </React.Fragment>
    );
  }
}
