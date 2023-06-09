export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  category: string[];
  token: string;
  createdAt: string;
  lastLogin: string;
  notes: Note[];
};

export type Note = {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
};

export type UserPayload = {
  id: string;
  email: string;
  iat: number;
  exp: number;
  verified: boolean;
};
