import React from 'react';
import useMembers from '../data/useMembers';
import SimpleTable from './SimpleTable';

/**
 *  DATA FORMAT:
 * api_uri: "https://api.propublica.org/congress/v1/members/B000944.json"
contact_form: "http://www.brown.senate.gov/contact/"
cook_pvi: null
crp_id: "N00003535"
cspan_id: "5051"
date_of_birth: "1952-11-09"
dw_nominate: -0.431
facebook_account: "SenatorSherrodBrown"
fax: null
fec_candidate_id: "H2OH13033"
first_name: "Sherrod"
gender: "M"
google_entity_id: "/m/034s80"
govtrack_id: "400050"
icpsr_id: "29389"
id: "B000944"
ideal_point: null
in_office: true
last_name: "Brown"
last_updated: "2020-06-05 09:46:37 -0400"
leadership_role: null
lis_id: "S307"
middle_name: null
missed_votes: 12
missed_votes_pct: 2.22
next_election: "2024"
ocd_id: "ocd-division/country:us/state:oh"
office: "503 Hart Senate Office Building"
party: "D"
phone: "202-224-2315"
rss_url: "https://www.brown.senate.gov/rss/feeds/?type=all&"
senate_class: "1"
seniority: "13"
short_title: "Sen."
state: "OH"
state_rank: "senior"
suffix: null
title: "Senator, 1st Class"
total_present: 1
total_votes: 540
twitter_account: "SenSherrodBrown"
url: "https://www.brown.senate.gov"
votes_against_party_pct: 8.2
votes_with_party_pct: 91.8
votesmart_id: "27018"
youtube_account: "SherrodBrownOhio"
 */

const headers = [{
  key   : 'date_of_birth',
  header: 'Date of Birth',
},
{
  key   : 'first_name',
  header: 'First Name',
},
{
  key   : 'last_name',
  header: 'Last Name',
},
{
  key   : 'party',
  header: 'Party',
},
{
  key   : 'id',
  header: 'ID',
}];

const MembersTable = ({ congress, chamber }) => {
  const { members, loading, error } = useMembers({ congress, chamber });

  if (error) {
    // TODO: There should be a nicer way to display error state.
    return <p>Error Loading Members Data</p>;
  }

  return loading ? <p>Data is loading</p>
    : <SimpleTable isSortable rows={members} headers={headers}/>;
};

export default MembersTable;
