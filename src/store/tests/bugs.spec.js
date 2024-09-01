import { apiCallBegan } from "../api";
import { addBug, bugAdded } from "../bugs"
import store from "../store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("bugsSlice", () => {
    // solitary test
    // describe("action creators", () => {
    //     it("addBug", () => {
    //         const bug = { description: "Bug Test" }
    //         const result = addBug(bug);

    //         const expected = {
    //             type: apiCallBegan.type,
    //             payload: {
    //                 url: '/bugs',
    //                 method: 'post',
    //                 data: bug,
    //                 onSuccess: bugAdded.type
    //             }
    //         }

    //         expect(result).toEqual(expected)
    //     });
    // });

    let fakeAxios;

    beforeEach(() => {
        fakeAxios = new MockAdapter(axios);
    });

    // helper function
    const bugsSlice = () => {
        return store.getState().entities.bugs;
    }

    // it("should add the bug to the store if it's saved to the server", async () => {
    //     // AAA --> 
    //     // -> Arrange
    //     const bug = { description: "Bug Test" };
    //     const savedBug = { ...bug, id: 1 };
    //     fakeAxios.onPost('/bugs').reply(200, savedBug);

    //     // -> Act 
    //     await store.dispatch(addBug(bug));

    //     // -> Assert
    //     expect(bugsSlice().list).toContainEqual(savedBug);
    // });

    it("should not add the bug to the store if it's not saved to the server", async () => {
        // AAA --> 
        // -> Arrange
        const bug = { description: "Bug Test" };
        fakeAxios.onPost('/bugs').reply(500);

        // -> Act 
        await store.dispatch(addBug(bug));

        // -> Assert
        expect(bugsSlice().list).toHaveLength(0);
    });
});