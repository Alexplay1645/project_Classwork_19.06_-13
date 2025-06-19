import React from 'react';
import './GreatPerson.css';

export class GreatPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: false,
      showBirth: false,
      showPhoto: false,
      showBio: false
    };
  }

  toggleField = (field) => {
    this.setState((prevState) => ({
      [field]: !prevState[field]
    }));
  };

  render() {
    return (
      <div className="person-container">
        <button onClick={() => this.toggleField('showName')}>Показать/Скрыть ФИО</button>
        <button onClick={() => this.toggleField('showBirth')}>Показать/Скрыть дату рождения</button>
        <button onClick={() => this.toggleField('showPhoto')}>Показать/Скрыть фото</button>
        <button onClick={() => this.toggleField('showBio')}>Показать/Скрыть биографию</button>

        {this.state.showName && (
          <p className="info-box"><strong>{this.props.name}</strong></p>
        )}

        {this.state.showBirth && (
          <p className="info-box"><strong>Год рождения:</strong> {this.props.birthDate}</p>
        )}

        {this.state.showPhoto && (
          <div className="info-box">
            <img src={this.props.photo} alt="Портрет" className="portrait" />
          </div>
        )}

        {this.state.showBio && (
          <p className="info-box">{this.props.bio}</p>
        )}
      </div>
    );
  }
}
