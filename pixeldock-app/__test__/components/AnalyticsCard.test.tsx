import { render, screen } from "@testing-library/react";
import AnalyticsCard from "@/src/components/AnalyticsCard";
import * as api from "@/src/services/api"; // Import for spy/mock

describe("AnalyticsCard", () => {
  // Mock useGetAnalyticsQuery
  const mockUseGetAnalyticsQuery = jest.spyOn(api, "useGetAnalyticsQuery");

  // Suppress console logs during tests
  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("renders loading state", () => {
    mockUseGetAnalyticsQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    } as any);

    render(<AnalyticsCard />);

    expect(screen.getByText(/loading statistics/i)).toBeInTheDocument();
  });

  test("renders error state and logs error", () => {
    const errorSpy = jest.spyOn(console, "error");

    mockUseGetAnalyticsQuery.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as any);

    render(<AnalyticsCard />);

    expect(screen.getByText(/error loading statistics/i)).toBeInTheDocument();
    expect(errorSpy).toHaveBeenCalledWith("Failed to load analytics data");
  });

  test("renders data correctly", () => {
    mockUseGetAnalyticsQuery.mockReturnValue({
      data: { totalUsers: 42 },
      isLoading: false,
      isError: false,
    } as any);

    render(<AnalyticsCard />);

    expect(screen.getByText(/total registered users/i)).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
  });
});
