import React from 'react';

const iconRecommendations = [
  {
    oldIcons: ['fas fa-sort'],
    updatedIcons: ['fas fa-arrows-alt-v'],
    updatedUsage: ['Indicates a sorting function is available in a table header']
  },
  {
    oldIcons: ['fas fa-plus-square'],
    updatedIcons: ['fas fa-plus-circle', 'pficon-add-circle-o'],
    updatedUsage: [
      'Indicates that a user may create or add something',
      'Use if there are many instances of this icon in a UI (data list, table, etc)'
    ]
  },
  {
    oldIcons: ['pf-icon-rebalance'],
    updatedIcons: ['fas fa-balance-scale'],
    updatedUsage: ['X needs rebalancing']
  },
  {
    oldIcons: ['fas fa-sort-down'],
    updatedIcons: ['fas-fa-caret-down'],
    updatedUsage: ['Indicates a panel of choices can be expanded (drop-down, filter, page range)']
  },
  {
    oldIcons: ['fas fa-caret-down', 'fas fa-sort-amount-up'],
    updatedIcons: ['fas fa-sort-amount-down'],
    updatedUsage: ['Used to communicate a largest-to-smallest sort order for any data type']
  },
  {
    oldIcons: ['fas fa-caret-up', 'pf-icon-sort-common-asc'],
    updatedIcons: ['fas fa-sort-amount-down-alt'],
    updatedUsage: ['Used to communicate a smallest-to-largest sort order for any data type']
  },
  {
    oldIcons: ['pf-icon-okay', 'far fa-check-circle'],
    updatedIcons: ['fas fa-check-circle'],
    updatedUsage: ['Everything is OK/Ready/Finished']
  },
  {
    oldIcons: ['pf-icon-users', 'pf-icon-project', 'fas fa-user-friends'],
    updatedIcons: ['fas fa-users'],
    updatedUsage: ['Indicates multiple users or groups']
  }
]

export const IconRecommendations = () => (
  <table className="pf-c-table pf-m-compact ws-icon-recommendations" aria-label="icons recommendation guidelines breakout">
    <thead>
      <th>Old icon</th>
      <th>Update icon</th>
      <th>Updated contextual usage</th>
    </thead>
    <tbody>
      {iconRecommendations.map(rec => (
        <tr>
          <td>
            {rec.oldIcons.map(icon => <p><i className={icon.indexOf('pf-') === 0 ? `pf-icon ${icon}` : icon}></i>{icon}</p>)}
          </td>
          <td>
            {rec.updatedIcons.map(icon => <p><i className={icon.indexOf('pf-') === 0 ? `pf-icon ${icon}` : icon}></i>{icon}</p>)}
          </td>
          <td>
            {rec.updatedUsage.map(usage => <p>{usage}</p>)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
