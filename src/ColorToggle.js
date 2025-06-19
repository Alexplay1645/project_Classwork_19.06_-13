// import React from 'react';
// import './ColorToggle.css';

// export class ColorToggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       backgroundColor: 'white',
//       textColor: 'black'
//     };
//   }

//   changeTheme = (bgColor, textColor) => {
//     this.setState({
//       backgroundColor: bgColor,
//       textColor: textColor
//     });
//   };

//   render() {
//     const style = {
//       backgroundColor: this.state.backgroundColor,
//       color: this.state.textColor,
//       minHeight: '300px',
//       padding: '40px',
//       textAlign: 'center',
//       transition: 'all 0.3s ease'
//     };

//     return (
//       <div style={style}>
//         <h2>Смена цветовой темы</h2>
//         <button onClick={() => this.changeTheme('lightblue', 'darkblue')}>Синяя тема</button>
//         <button onClick={() => this.changeTheme('lightgreen', 'darkgreen')}>Зелёная тема</button>
//         <button onClick={() => this.changeTheme('lightcoral', 'maroon')}>Красная тема</button>
//       </div>
//     );
//   }
// }
