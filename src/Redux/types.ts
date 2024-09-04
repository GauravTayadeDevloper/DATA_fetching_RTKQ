
export const FETCH_REPO_REQ ="FETCH_REPO_REQ"
export const FETCH_REPO_SUCC ="FETCH_REPO_SUCC"
export const FETCH_REPO_FAIL ="FETCH_REPO_FAIL"
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (repoId: number) => ({
    type: TOGGLE_FAVORITE,
    payload: repoId
});

export interface PublicRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface FetchRepoReqAction {
    type: typeof FETCH_REPO_REQ;
}

interface FetchRepoSuccAction {
    type: typeof FETCH_REPO_SUCC;
    payload: PublicRepo[]; 
}

interface FetchRepoFailAction {
    type: typeof FETCH_REPO_FAIL;
    payload: string; 
}

export type RepoActionTypes = FetchRepoReqAction | FetchRepoSuccAction | FetchRepoFailAction;