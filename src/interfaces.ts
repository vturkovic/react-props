export interface UserType {
    name: string; surname: string; age: number
}
  
export interface UsersType extends Array<UserType>{}

export interface NameAgeType {
    name: string; age: number
}

export interface NameSurnameType {
    name: string; surname: string
}

export interface SurnameAgeType {
    surname: string; age: number;
}

export interface SurnameAgeTypeProps {
    children?: SurnameAgeType;
}