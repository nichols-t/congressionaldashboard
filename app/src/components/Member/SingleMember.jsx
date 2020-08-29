import React from 'react';
import { Pie } from '@nivo/pie';

/**
 * Displays charts and graphs for a single member of congress. This chart functions more or less
 * statically for now.
 * @param {Object} props
 * @param {Object} props.member the object containing response data for a single member of Congress.
 */
const SingleMember = ({ member }) => {

    console.dir(member);

    // Vote with party data transform.
    const withVotes = Math.round(member.total_votes * (member.votes_with_party_pct / 100));
    const againstVotes = Math.round(member.total_votes * (member.votes_against_party_pct / 100));
    
    return <div>
        <h2>{`${member.first_name} ${member.last_name} (${member.party}), ${member.state}`}</h2>
        <Pie
          data={[
              { id: 'Votes With Party', value: withVotes },
              { id: 'Votes Against Party', value: againstVotes }
            ]}
          width={400}
          height={500}
          colors={{ scheme: 'pastel2' }}
          innerRadius={0.5}
        />
    </div>
};

export default SingleMember;