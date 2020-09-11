import * as reducers from "./reducers";
import * as actions from "./actions";
import * as constants from "./constants";

describe("searchRobots reducer tests", () => {
  let initialStateSearch;
  beforeEach(() => {
    initialStateSearch = {
      searchField: "",
    };
  });

  it("returns initial state with no matching action", () => {
    expect(reducers.searchRobots()).toEqual(initialStateSearch);
  });

  it("changes searchfield state", () => {
    expect(
      reducers.searchRobots(undefined, actions.setSearchField("abc"))
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe("requestRobots reducer tests", () => {
  let initialStateRobots;
  beforeEach(() => {
    initialStateRobots = {
      robots: [],
      isPending: false,
      error: ""
    };
  });

  it("returns default robots state with unmatched action", () => {
    expect(reducers.requestRobots()).toEqual(initialStateRobots);
  });
  it("turns ispending state true when requesting robots", () => {
    expect(
      reducers.requestRobots(undefined, {
        type: constants.REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ ...initialStateRobots, isPending: true });
  });

  it("sets robots state on success action", () => {
    expect(
      reducers.requestRobots(undefined, {
        type: constants.REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: "john",
            email: "john@gmail.com",
          },
        ],
      })
    ).toEqual({
      ...initialStateRobots,
      robots: [
        {
          id: 1,
          name: "john",
          email: "john@gmail.com",
        },
      ],
    });
  });
  it("sets error state on failed requests", () => {
    expect(
      reducers.requestRobots(undefined, {
        type: constants.REQUEST_ROBOTS_FAILED,
        payload: "nooo!",
      })).toEqual({...initialStateRobots, error: "nooo!"}
      );
  });
});
