import CardCharacter from "../../components/atoms/CardCharacter.tsx";
import {useQuery} from "@apollo/client";
import {GET_CHARACTER} from "../../graphql/query/Character.ts";
import {Link, useParams} from "react-router-dom";
import {Breadcrumbs, Skeleton, Typography} from "@mui/material";
import {ROUTE} from "../../constants/route.constant.ts";

function DetailCharacter() {
    const id: number = parseInt(useParams().id || '1')
    const {loading, data} = useQuery(GET_CHARACTER, {variables: {id: id}})


    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" className={'mb-8 p-8'}>
                <Link to={ROUTE.HOME()}>
                    Home
                </Link>
                <Typography color="text.primary">{loading ?
                    <Skeleton variant="text" height={28} width={160}/> : data?.character.name}</Typography>
            </Breadcrumbs>
            <div className={'flex justify-center items-center w-full h-screen'}>
                <CardCharacter loading={loading} created={data?.character.created} episode={data?.character.episode}
                               gender={data?.character.gender}
                               id={data?.character.id} image={data?.character.image}
                               location={data?.character.location} name={data?.character.name}
                               origin={data?.character.origin}
                               species={data?.character.species}
                               status={data?.character.status}
                               type={data?.character.type}/>
            </div>
        </>
    );
}

export default DetailCharacter;