// import { bugAdded, bugRemoved, bugResolved } from "./actionCreator.js";
import { apiCallBegan, apiCallSuccess } from "./store/api.js";
import { addBug, assignBugToUser, bugAdded, bugAssignedToUser, bugRemoved, bugResolved, bugsReceived, getBugsByUser, getUnresolvedBugs, loadBugs, resolveBug } from "./store/bugs.js";
// import bugsStore from "./store/bugsStore.js";
import { addProject } from "./store/projects.js";
// import projectsStore from "./store/projectsStore.js";
import Store from "./store/store.js";
import { addUser } from "./store/users.js";
// import { store } from "./store.js";

const store = Store();

// const unsubscribe = store.subscribe(() => {
//     console.log("Store Changed!", store.getState());
// });

// store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugAdded("Bug 2"));
// store.dispatch(bugAdded("Bug 3"));
// store.dispatch(bugAdded("Bug 4"));
// store.dispatch(bugAdded("Bug 5"));

// unsubscribe();

// // store.dispatch(bugRemoved(1));

// store.dispatch(bugResolved("cswj"))
// store.dispatch(bugResolved(3))

// bugsStore.dispatch(bugAdded({ description: "Bug 1" }));
// bugsStore.dispatch(bugAdded({ description: "Bug 2" }));
// bugsStore.dispatch(bugAdded({ description: "Bug 3" }));
// bugsStore.dispatch(bugAdded({ description: "Bug 4" }));
// bugsStore.dispatch(bugAdded({ description: "Bug 5" }));

// bugsStore.dispatch(bugRemoved({ id: 1 }));
// bugsStore.dispatch(bugResolved({ id: 3 }));

// unsubscribe();

// console.log(bugsStore.getState());

// projectsStore.dispatch(addProject({ name: "Foul Project!" }));
// projectsStore.dispatch(addProject({ name: "Vua Project!" }));

// console.log(projectsStore.getState());

// using createSlice -->

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAdded({ description: "Bug 4" }));
// store.dispatch(bugAdded({ description: "Bug 5" }));

// store.dispatch(bugRemoved({ id: 1 }));
// store.dispatch(bugResolved({ id: 3 }));

// unsubscribe();

// console.log(store.getState());

// store.dispatch(addProject({ name: "Foul Project!" }));
// store.dispatch(addProject({ name: "Vua Project!" }));


// const x = getUnresolvedBugs(store.getState())
// const y = getUnresolvedBugs(store.getState())

// console.log(x === y);
// console.log(x);
// console.log(y);


// store.dispatch(addUser({ name: "Mofiz" }));
// // store.dispatch(addUser({ name: "Hafiz" }));
// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));

// const z = getBugsByUser(1)(store.getState());

// console.log(z);

// store.dispatch((dispatch, getState) => {
//     dispatch({ type: 'bugsReceived', bugs: [1, 2, 3] });
//     console.log("Hola", getState());

// });

// console.log(store.getState());


// store.dispatch({
//         type: 'apiRequested',
//         payload: {
//             url: '/bugs',
//             method: 'get',
//             data: {},
//             onSuccess: 'bugsReceived',
//             onError: 'apiRequestFailed'
//         }
// });

// using createAction
store.dispatch(loadBugs());

// setTimeout(() => {
//     store.dispatch(loadBugs());
// }, 2000);

// store.dispatch(addBug({ description: "Babul" }));

setTimeout(() => {
    store.dispatch(resolveBug(2));
}, 2000);


setTimeout(() => {
    store.dispatch(assignBugToUser(2, 4));
}, 2000);

