//From https://material-ui.com/demos/buttons/
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from "react"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const ContainedButton = (props) => {
let { classes,title,color } = props;
    color = color || "primary";
    return <Button onClick={props.onClick} variant="contained" color={color} className={classes.button}>
        {title}
      </Button>
}
export default withStyles(styles)(ContainedButton);