import React, { useEffect, useState } from "react";
import { fetchTopRatedMoviesThunk } from "../../redux-slices/stats-slice";
import { useSelector, useDispatch } from "react-redux";
import BarChart from "./BarChart";
import "./stats.scss";


const StatsComponent = () => {
    const dispatch = useDispatch();
    const { moviesStats, loading } = useSelector(state => state.stats);
    const [voteAvg, setVoteAvg] = useState([]);
    const [voteCount, setVoteCount] = useState([]);

    useEffect(() => { dispatch(fetchTopRatedMoviesThunk()); }, [dispatch])

    useEffect(() => {
        const vA = [];
        const vC = [];
        moviesStats?.slice(0, 10).forEach(item => {
            vA.push({ title: item.title, vote_average: item.vote_average });
            vC.push({ title: item.title, vote_count: item.vote_count });
        });
        setVoteAvg(vA);
        setVoteCount(vC);
    }, [moviesStats])


    return <div className="stats__container">

        {loading ? 'Loading...' : <>

            <h1 className="stats__heading">Top Ten Movies by Vote Average & Vote their Vote Count</h1>

            <div className="rating__count">
                <h2 className="chart__heading">Vote Average</h2>
                <BarChart parent='voteAvg' width={500} height={400} data={voteAvg} />
            </div>

            <div className="rating__count">
                <h2 className="chart__heading">Vote Count</h2>
                <BarChart parent='voteCount' width={500} height={400} data={voteCount} />
            </div>

        </>}

    </div>
}
export default StatsComponent;