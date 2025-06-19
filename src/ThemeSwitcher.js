// import React from 'react';
// import './ThemeSwitcher.css';

// export class ThemeSwitcher extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       backgroundColor: 'white',
//       textColor: 'black'
//     };
//   }

//   changeTheme = (bg, text) => {
//     this.setState({
//       backgroundColor: bg,
//       textColor: text
//     });
//   };

//   render() {
//     const style = {
//       backgroundColor: this.state.backgroundColor,
//       color: this.state.textColor,
//       minHeight: '100vh',
//       textAlign: 'center',
//       paddingTop: '50px',
//       transition: 'all 0.3s ease'
//     };

//     return (
//       <div style={style}>
//         <h1>Смена цветовой темы</h1>
//         <button onClick={() => this.changeTheme('#add8e6', '#00008b')}>Синяя тема</button>
//         <button onClick={() => this.changeTheme('#98fb98', '#006400')}>Зелёная тема</button>
//         <button onClick={() => this.changeTheme('#f08080', '#800000')}>Красная тема</button>
//       </div>
//     );
//   }
// }