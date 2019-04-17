import * as React from 'react';
import { IBrandItem } from '../VillageTourApp.types';

interface IBrandItemProps extends IBrandItem {
  id: string;
  select: (id: string) => void;
}

export class BrandListItem extends React.Component<IBrandItemProps, any> {
  public render() {
    const { name, selected, select, id } = this.props;

    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={selected} onChange={() => select(id)} /> {name}
        </label>
      </li>
    );
  }
}
