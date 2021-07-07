// Todo interface
export interface TodoInterface {
    id: string;
    text: string;
    isCompleted: boolean;
  }
  
  // Todo form interface
  export interface InterfaceForm {
    todos: TodoInterface[];
    EventCreate: (todo: TodoInterface) => void;
  }
  
  // Todo list interface
  export interface InterfaceList {
    EventUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    EventRemove: (id: string) => void;
    EventComplete: (id: string) => void;

    todos: TodoInterface[]
  }
  
  // Todo item interface
  export interface InterfaceItem {
    EventUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    EventRemove: (id: string) => void;
    EventComplete: (id: string) => void;

    todo: TodoInterface;
  }