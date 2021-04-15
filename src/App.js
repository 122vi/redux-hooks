import React, {useState} from 'react';

import EffectExemple from './EffectExample';

function App() {
  const [visible, setVisible] = useState(true);

    setTimeout(() =>{
      setVisible(false);
    }, 5000);

    return  visible && <EffectExemple /> 
}

export default App;
