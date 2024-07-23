import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {GET_EPISODES} from "../../graphql/query/Episodes.ts";
import {TextField} from "@mui/material";
import {Episode} from "../../models/IQueries.model.ts";
import CardList from "../../components/atoms/CardList.tsx";
import InfiniteScroll from "react-infinite-scroll-component";


export const Dashboard = () => {
    const [episodeList, setEpisodeList] = useState<Episode[]>([]);
    const [search, setSearch] = useState("");
    const [loadingList, setLoadingList] = useState(false);
    const {fetchMore, loading, data} = useQuery(GET_EPISODES, {
        variables: {
            page: 0,
            name: search
        }
    });

    useEffect(() => {
        if (data) {
            if (data.episodes.info.prev === null) {
                setEpisodeList(data.episodes.results)
                setLoadingList(false)
            } else {
                setEpisodeList(episodeList.concat(data.episodes.results))
                setLoadingList(false)
            }
        }
    }, [data])

    useEffect(() => {
        setLoadingList(loading)
    }, [loading]);

    const fetchData = () => {
        setLoadingList(true)
        fetchMore({
            variables: {page: data.episodes.info.next, name: search},
            updateQuery: (prevResult, {fetchMoreResult}) => {
                if (!fetchMoreResult) return prevResult;
                return {
                    episodes: {
                        info: fetchMoreResult.episodes.info,
                        results: [...fetchMoreResult.episodes.results],
                    },
                };
            },
        });
    }

    const componentSkeleton = (length: number) => {
        return (
            <div className={'flex gap-4 flex-col mt-8'}>
                {Array.from({length: length}).map((_, i) => (
                    <CardList loading={loadingList} key={i}/>
                ))}
            </div>
        )
    }

    return (
        <div className={'container mx-auto my-8'}>
            <h1 className={'text-center mb-8'}>Rick and Morty Episode</h1>
            <TextField
                className={'w-full'}
                name={'search'}
                type={'search'}
                label="Search"
                variant="outlined"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            {
                episodeList.length === 0 ? componentSkeleton(10) :
                    <InfiniteScroll
                        className={'px-2 mt-8'}
                        height={window.screen.height}
                        dataLength={episodeList.length}
                        next={fetchData}
                        hasMore={data?.episodes.info.next !== null}
                        loader={componentSkeleton(2)}
                        endMessage={'Data ended'}>
                        <div className={'flex gap-4 flex-col'}>
                            {
                                episodeList && episodeList.map((episode: Episode) => (
                                    <CardList loading={loadingList} key={episode.id} id={episode.id} name={episode.name}
                                              air_date={episode.air_date}
                                              episode={episode.episode} characters={episode.characters}/>
                                ))
                            }
                        </div>
                    </InfiniteScroll>
            }
        </div>
    )
}