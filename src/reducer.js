export const initialState = {
    user: null,
    playlists: [],
    spotify: null,//Nuevo
    playing: false,
    item: null,
    //remove after finished developing...
    //token: "BQC9-N8u_pdb3Ottb9_tFvRpuXE1XsA6g-Dm11tr_F02A-hNTikQOGJkuvVONncH94UqARcHfFDFAqhdrJcwCFxwoBnxSQUPtNb1wQljEbMrzFG16B-GZ_ktfW4etNER3CiCeRYsbNi16Kem622gbEm5qgwtcTlVSDdfxLpBdwg4iMCZ",
};

const reducer = ( state , action ) => {
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user                
            };//Validado
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            };//Validado
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            };//Validado
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            };//Validado
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };//Nuevo
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };//Nuevo
        default:
            return state;
    }
};//Validado

export default reducer;