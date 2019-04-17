import * as React from 'react';
import { BrandListItem } from './BrandListItem';
import { FilterTypes, IBrands } from '../VillageTourApp.types';


interface IBrandsListProps {
  select: (id: string) => void;
  brands: IBrands;
  filter: FilterTypes;
}

export class BrandsList extends React.Component<IBrandsListProps, any> {
  public render() {
    const { filter, brands, select } = this.props;

    const filteredBrands = Object.keys(brands).filter(id => {
      return filter === 'all' || (filter === 'selected' && brands[id].selected) || (filter === 'unselected' && !brands[id].selected);
    });

    return (
      <ul className="brands">
        {filteredBrands.map(id => (
          <BrandListItem key={id} id={id} select={select} {...brands[id]} />
        ))}
      </ul>
    );
  }
}
