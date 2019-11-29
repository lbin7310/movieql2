export const people = [
  { id: "0",
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  { id: "1",
    name: "Kiblank",
    age: 30,
    gender: "male"
  },
  { id: "2",
    name: "ChaeRyung",
    age: 18,
    gender: "female"
  },
  { id: "3",
    name: "Momo",
    age: 20,
    gender: "female"
  },
  { id: "4",
    name: "Sana",
    age: 21,
    gender: "female"
  },
  { id: "5",
    name: "Lia",
    age: 20,
    gender: "female"
  }
]

export const getById = id => {
  const filteredPeople = people.filter( person => person.id === String(id));
  return filteredPeople[0];
}