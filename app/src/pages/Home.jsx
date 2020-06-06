import React from 'react';
import { Button, NumberInput } from 'carbon-components-react';

const Home = () =>
  <div>
    <p>
    Hello World!
    </p>
    <Button>
        Click
    </Button>
    <NumberInput
      helperText="Optional helper text."
      id="tj-input"
      invalidText="Number is not valid"
      label="Number Input label"
      max={100}
      min={0}
      step={10}
      value={50}
    />
  </div>;

export default Home;
