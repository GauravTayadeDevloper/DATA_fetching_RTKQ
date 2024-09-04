import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../Redux/store";
import { toggleFavorite } from "../Redux/types";
import { useParams } from "react-router-dom";
import { useFetchReposQuery } from '../Redux/action'; 

const OwnerRepoList: React.FC = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);
    const { owner } = useParams();
    const { data: repos = []} = useFetchReposQuery();

    const handleFavoriteToggle = (repoId: number) => {
        dispatch(toggleFavorite(repoId));
    };


    const filtered = repos.filter(repo => repo.owner.login === owner);

    return (
        <div>
            <div className="Owner-name">
                <div  className="Owner-name1">
                     <h1>{owner} all Repositories</h1>
                </div>
                <div>
                     {filtered.length > 0 && (
                    <img
                        src={filtered[0].owner.avatar_url}  
                        alt={`${owner}'s avatar`}
                        className="repo-owner-avatar"
                    />
                )}
               </div>
               
            </div>
            <div className="container">
                {filtered.map((repo) => (
                    <div className="card_item" key={repo.id}>
                        <div className="card_inner">
                            <div className="repo-details">
                                <h3 className="repoName">
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        {repo.name}
                                    </a>
                                </h3>
                                <p className="repoDescription">{repo.description}</p>
                                <div className="repoUrl">
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        {repo.html_url}
                                    </a>
                                </div>
                                <div className="detail-box">
                                    <button className="view-repos-button">View Repositories</button>
                                </div>
                            </div>
                            <div
                                className={`favorite-icon ${favorites.includes(repo.id) ? 'favorited' : ''}`}
                                onClick={() => handleFavoriteToggle(repo.id)}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OwnerRepoList;
