import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        results: [
          {
            name: {
              first: "Laith",
              last: "Harb",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
            },
            login: {
              username: "ThePhonyGOAT",
            },
          },
          {
            name: {
              first: "Laith",
              last: "Harb",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
            },
            login: {
              username: "ThePhonyGOAT",
            },
          },
          {
            name: {
              first: "Laith",
              last: "Harb",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
            },
            login: {
              username: "ThePhonyGOAT",
            },
          },
          {
            name: {
              first: "Laith",
              last: "Harb",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
            },
            login: {
              username: "ThePhonyGOAT",
            },
          },
          {
            name: {
              first: "Laith",
              last: "Harb",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
            },
            login: {
              username: "ThePhonyGOAT",
            },
          },
        ],
      },
    }),
  },
}));

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("should render follower items", async () => {
    render(<MockFollowersList />);

    const followerDivElement = await screen.findByTestId("follower-item-0");

    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    render(<MockFollowersList />);

    const followerDivElement = await screen.findAllByTestId(/follower-item/i);

    expect(followerDivElement.length).toBe(5);
  });
});
