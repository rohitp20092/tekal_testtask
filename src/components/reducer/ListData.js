const initial = {
    Allrecord: []
}
const ListData = (state = initial, action) => {
    switch (action.type) {
        case "LIST_DATA":{
            return { ...state, 
                Allrecord: [...state.Allrecord, action.payload]
            }
        }

        default:
            return state


    }
};
export default ListData;