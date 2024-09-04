import { RepoActionTypes ,FETCH_REPO_FAIL, FETCH_REPO_REQ, FETCH_REPO_SUCC } from "./types";
interface PublicRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Repostate{
    load: boolean;
    repos: PublicRepo[];
    error: string | null;
}
const initialState:Repostate = {
    load: false,
    repos: [],
    error: '',
};



const repoReducer = (state = initialState, action: RepoActionTypes) :Repostate => {
    switch (action.type) {
        case FETCH_REPO_REQ:
            return {
                ...state,
                load: true,
            };
        case FETCH_REPO_SUCC:
            return {
                load: false,
                repos: action.payload,
                error: '',
            };
        case FETCH_REPO_FAIL:
            return {
                load: false,
                repos: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default repoReducer;
