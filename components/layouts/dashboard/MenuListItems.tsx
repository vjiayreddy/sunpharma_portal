import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Icon } from "@iconify/react";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon
        sx={(theme) => ({
          color: theme.palette.common.white,
          //minWidth: 28,
        })}
      >
        <Icon width={28} icon="ic:round-barcode" />
      </ListItemIcon>
      <ListItemText
        sx={(theme) => ({
          color: theme.palette.common.white,
        })}
        primary="Barcodes"
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon
        sx={(theme) => ({
          color: theme.palette.common.white,
         // minWidth: 28,
        })}
      >
        <Icon width={28} icon="icon-park-outline:scanning-two" />
      </ListItemIcon>
      <ListItemText
        sx={(theme) => ({
          color: theme.palette.common.white,
        })}
        primary="Scannings List"
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon
        sx={(theme) => ({
          color: theme.palette.common.white,
         // minWidth: 28,
        })}
      >
        <Icon width={28} icon="solar:settings-broken" />
      </ListItemIcon>
      <ListItemText
        sx={(theme) => ({
          color: theme.palette.common.white,
        })}
        primary="Settings"
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon
        sx={(theme) => ({
          color: theme.palette.common.white,
         // minWidth: 28,
        })}
      >
        <Icon width={28} icon="clarity:info-line" />
      </ListItemIcon>
      <ListItemText
        sx={(theme) => ({
          color: theme.palette.common.white,
        })}
        primary="Info"
      />
    </ListItemButton>
  </React.Fragment>
);
