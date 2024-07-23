import {Character} from "../../models/IQueries.model.ts";
import {Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography} from "@mui/material";

function CardCharacter(props: ICardCharacter) {
    return (
        <Card sx={{maxWidth: 345}}>
            {props.loading ?
                <Skeleton variant="rounded" height={300} width={'100%'}/> :
                <CardMedia
                    component="img"
                    alt={props.name}
                    height="300"
                    image={props.image}
                />
            }
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.loading ? <Skeleton variant="text" height={40} width={260}/> : props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.loading ? <Skeleton variant="text" height={20} width={100}/> : props.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.loading ? <Skeleton variant="text" height={20} width={160}/> : props.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{props.loading ?
                    <Skeleton variant="text" height={20} width={200}/> : props.status}</Button>
                <Button size="small">{props.loading ?
                    <Skeleton variant="text" height={20} width={200}/> : props.species}</Button>
            </CardActions>
        </Card>
    );
}

interface ICardCharacter extends Character {
    loading?: boolean
}


export default CardCharacter;