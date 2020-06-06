import React from 'react';
import MembersTable from '../components/Tables/MembersTable';

/**
 * Homepage for the application.
 * @return {*} the rendered home component.
 */
const Home = () =>
  <div>
    <MembersTable congress={116} chamber="senate" />
  </div>;

export default Home;
