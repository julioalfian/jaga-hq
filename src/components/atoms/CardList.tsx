import {Character} from "../../models/IQueries.model.ts";
import {Link} from "react-router-dom";
import {ROUTE} from "../../constants/route.constant.ts";
import {Button, Card, CardContent, Skeleton, Typography} from "@mui/material";

function CardList(props: ICardList) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="caption" component="div">
                    {props.loading ? <Skeleton variant="text" height={20} width={100}/> : props.air_date}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.loading ? <Skeleton variant="text" height={40} width={250}/> : props.name}
                </Typography>
                <div className={'flex flex-wrap gap-4 mt-4'}>
                    {
                        props.loading ?
                            Array.from({length: 6}).map((_, i: number) => (
                                <Skeleton key={i} variant="text" height={20} width={100}/>
                            )) :
                            props.characters?.length && props.characters.map((character: Character) => (
                                <Link to={ROUTE.CHARACTER.DETAIL(character.id ?? '0')} key={character.id}>
                                    <Button variant={'text'} color={'info'} size={'small'}> {character.name}</Button>
                                </Link>
                            ))
                    }
                </div>
            </CardContent>
        </Card>
    );
}

interface ICardList {
    loading?: boolean,
    id?: string,
    name?: string,
    air_date?: string,
    episode?: string,
    characters?: Character[]
}

export default CardList;