import * as React from 'react';
import { FilterTypes } from '../VillageTourApp.types';

interface ITourHeaderProps {
  guestName: (label: string) => void;
  setFilter: (filter: FilterTypes) => void;
  filter: FilterTypes;

}

interface ITourHeaderState {
  guestNameInput: string;
  gender: string;
}

export class TourHeader extends React.Component<ITourHeaderProps, ITourHeaderState> {
  constructor(props : any) {
    super(props);
    this.state = { guestNameInput: '', gender: '' };
  }

  public render() {
    const { filter } = this.props;
    return (
      <header>
        <h1>Village Tour <small>(1.7 final)</small></h1>
        <div className="getGenderSetPref">
          <input value={this.state.guestNameInput} onChange={this._onChange} className="textfield" placeholder="Type your name" />
          <button onClick={this._onGetGender} className="submit">
            Get Preferences
          </button>
          <label>{this.state.gender}</label>
        </div>
        <nav className="filter">
          <button onClick={this._onFilter} className={filter === 'all' ? 'selected' : ''}>
            all
          </button>
          <button onClick={this._onFilter} className={filter === 'unselected' ? 'selected' : ''}>
            unselected
          </button>
          <button onClick={this._onFilter} className={filter === 'selected' ? 'selected' : ''}>
            selected
          </button>
        </nav>
      </header>
    );
  }

  _onFilter = (evt:any) => {
    this.props.setFilter(evt.target.innerText);
  };

  _onChange = (evt:any) => {
    this.setState({ guestNameInput: evt.target.value });
  };

  _onGetGender = () => {
    // call Gender API and map brand list
    fetch('https://api.genderize.io/?name=' + this.state.guestNameInput)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            gender: result.gender
          });
        },
        (error) => {
          this.setState({
            gender: ''
          });
        }
      )
    this.props.guestName(this.state.guestNameInput);

  };
}
