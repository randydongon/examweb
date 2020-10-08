import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import dog from "./image/dog.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    justifyContent: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Home() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        display: "flex",
        marginTop: "1rem",
        width: "100%",
        margin: "auto, auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Dog, Canis familiaris when considered a distinct species"
          subheader="Octber 8, 2020"
        />
        <CardMedia className={classes.media} image={dog} title="Dog" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            The dog (Canis familiaris when considered a distinct species or
            Canis lupus familiaris when considered a subspecies of the wolf) is
            a domesticated carnivore of the family Canidae. It is part of the
            wolf-like canids, and is the most widely abundant terrestrial
            carnivore.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              This article is about the domestic dog. For related species known
              as "dogs".
            </Typography>
            <Typography paragraph>
              The dog (Canis familiaris when considered a distinct species or
              Canis lupus familiaris when considered a subspecies of the
              wolf)[5] is a domesticated carnivore of the family Canidae. It is
              part of the wolf-like canids,[6] and is the most widely abundant
              terrestrial carnivore.[7][8][9][10][11] The dog and the extant
              gray wolf are sister taxa as modern wolves are not closely related
              to the wolves that were first domesticated,[12][13][14] which
              implies that the direct ancestor of the dog is extinct.[15] The
              dog was the first species to be domesticated,[14][16] and has been
              selectively bred over millennia for various behaviors, sensory
              capabilities, and physical attributes.[17] Their long association
              with humans has led dogs to be uniquely attuned to human
              behavior,[18] and they can thrive on a starch-rich diet that would
              be inadequate for other canids.[19] Dogs vary widely in shape,
              size, and colors.[20] They perform many roles for humans, such as
              hunting, herding, pulling loads, protection, assisting police and
              military, companionship, and, more recently, aiding disabled
              people, and therapeutic roles. This influence on human society has
              given them the sobriquet of "man's best friend."
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
