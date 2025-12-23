import { User } from "./user";

export interface GetUsersResponse {
  users: User[];
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface AnalyticsResponse {
  totalUsers: number;
}
