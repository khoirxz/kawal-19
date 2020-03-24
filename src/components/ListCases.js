import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ListCases = props => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      {props.cases.map(result => (
        <ListItem key={result.name} button>
          <ListItemText
            primary={result.name}
            secondary={`POSITIF : ${result.positif}, SEMBUH : ${
              result.sembuh
            }, MENINGGAL : ${result.meninggal}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ListCases;
