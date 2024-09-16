export type IntroProp = {
  name: string;
  age: number;
  isLoggedIn: boolean;
};

export type StudentProps = {
  name: {
    first: string;
    last: string;
  };
};

export type StudentListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
