export interface User {
  id: number;
  userId: string;
  password: string;
  name?: string;
  email?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}
