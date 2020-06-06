# congressionaldashboard
A React app that displays various charts to visualize Congressional activity.

# Running
 Download everything, install modules with `yarn`, then run `yarn start` in the `app` directory.

# Goals
Right now, this site doesn't have anything. I would like to include a searchable and filterable table of all congressional representatives, a record of their voting history, and a bunch of graphs for things like vote %s, party-line %, reasons for absences, etc.

# Branching Strategy
This site will eventually be set up to run on Github; when it is, I believe `master` will contain the compiled `source` branch (or possibly `gh-pages` will, not sure yet).

In either case, `master` and/or the source equivalent will be stable branches. Work for features should branch off of them and merge into them when the work is completed. Releases may be tagged at various points once I decide what features I actually want.
