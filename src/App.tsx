import * as React from 'react';
import { BrandsList } from './components/BrandsList';
import { TourFooter } from './components/TourFooter';
import { TourHeader } from './components/TourHeader';
import { FilterTypes, IBrands } from './VillageTourApp.types';


let index = 0;

export class TourApp extends React.Component<{}, { brands: IBrands; filter: FilterTypes }> {
  constructor(props: any) {
    super(props);
    this.state = {
      brands: {},
      filter: 'all'
    };
  }

  public render() {
    const { filter, brands } = this.state;
    return (
      <div>
        <TourHeader guestName={this.getGender} setFilter={this.setFilter} filter={filter} />
        <BrandsList select={this.select} brands={brands} filter={filter} />
        <TourFooter clear={this.clear} brands={brands} />
      </div>
    );
  }

  private getGender = (label: any) => {
    const { brands } = this.state;
    const id = index++;

    this.setState({
      brands: { ...brands, [id]: { label, selected: false } }
    });
  };

  private select = (id: any) => {
    const { brands } = this.state;
    const brandId = brands[id];
    const newBrands = { ...brands, [id]: { ...brandId, selected: !brandId.selected } };

    this.setState({
      brands: newBrands
    });
  };

  private clear = () => {
    const { brands } = this.state;
    const newBrands = {};

    Object.keys(this.state.brands).forEach(id => {
      if (!brands[id].selected) {
        newBrands[id] = brands[id];
      }
    });

    this.setState({
      brands: newBrands
    });
  };

  private setFilter = (fil: any) => {
    this.setState({
      filter: fil
    });
  };
}


export default TourApp;
