import {configureStore} from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";

const ConfigurationStore = configureStore({
    reducer:{
        app: AppSlice.reducer
    }
});

export default ConfigurationStore;