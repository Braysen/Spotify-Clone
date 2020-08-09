export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after finished developing...
    token: "BQC9-N8u_pdb3Ottb9_tFvRpuXE1XsA6g-Dm11tr_F02A-hNTikQOGJkuvVONncH94UqARcHfFDFAqhdrJcwCFxwoBnxSQUPtNb1wQljEbMrzFG16B-GZ_ktfW4etNER3CiCeRYsbNi16Kem622gbEm5qgwtcTlVSDdfxLpBdwg4iMCZ",
};

const reducer = ( state , action ) => {
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user                
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            };
        default:
            return state;
    }
};//Validado

export default reducer;