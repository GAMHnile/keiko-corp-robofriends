import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App redux connected component test", () => {
  let AppWrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      robots: [
        {
          id: 1,
          name: "John snow",
          email: "john@SpeechGrammarList.com",
        },
        {
          id: 2,
          name: "jane snow",
          email: "jane@SpeechGrammarList.com",
        },
        {
          id: 3,
          name: "Chris snow",
          email: "chris@SpeechGrammarList.com",
        },
      ],
      onRequestRobots: jest.fn(),
      searchField: "",
    };
    AppWrapper = shallow(<App {...mockProps} />)
  });
  it("App snapshot test", () => {
    expect(AppWrapper).toMatchSnapshot();
  });

  it("App shows loading when result ispending", () => {
    const AppWrapper = shallow(
      <App isPending={true} {...mockProps} robots={[]} />
    );
    expect(AppWrapper.find("[id='loading-robots']").length).toEqual(1);
  });
});
