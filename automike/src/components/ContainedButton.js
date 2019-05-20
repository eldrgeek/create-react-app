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
const { classes } = props;
    return <Button onClick={props.onClick} variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
}
export default withStyles(styles)(ContainedButton);