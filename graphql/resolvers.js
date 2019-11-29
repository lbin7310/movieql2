import { people, getById } from "./db"

const resovlers = {
  Query: {
    people: () => people,
    person: (_, {id}) => getById(id)
  }
}

export default resovlers;