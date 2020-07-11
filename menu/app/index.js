import { createApp } from "frint";
import { createStore } from "frint-store";

import RootComponent from '../components/Root';
import rootReducer from '../reducers';

export default createApp({
    name: 'Menu',
    providers: [{
            name: 'component',
            useValue: RootComponent
        },
        {
            name: 'store',
            useFactory: ({ app }) => {
                const Store = createStore({
                    initialState: {
                        selected: 0
                    },
                    reducer: rootReducer
                });

                return new Store();
            },

            deps: ['app']
        }
    ]
});
