export interface UsersInterface { /* kao što vidiš za sve si stavio "export interface" onda je naming konvencija Interface, Postoji i Type ali se odnosi na tipove podataka ne na interface */
    name: string; surname: string; age: number
}
export interface NameAgeInterface { 
    name: string; age: number
}

export interface NameSurnameInterface {
    name: string; surname: string
}

export interface SurnameAgeInterface {
    surname: string; age: number;
}

export interface SurnameAgeInterfaceProps {
    children?: SurnameAgeInterface;
}





// sve je ovo moglo biti
export interface UserInterface {
    name?: string;
    surname?: string;
    age?: number;
    children?: any
}