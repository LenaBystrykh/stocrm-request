const obj = {
  example: {
    project: {
      name: 'jsonmaker',
      age: 10,
      array: [
        'jsonmaker',
        'JSON',
        {
          file: 'pdf',
          key: [1, 5, true, 30],
        },
      ],
    },
    developer: {
      name: {
        firstName: 'Yogesh',
        lastName: 'Jagdale',
      },
      age: 26,
      hobbies: ['Reading', 'Programming'],
    },
    message: 'Make_your_JSON_while_having_your_Coffee',
  },
};

const objectToArray = (obj, path = [], result = []) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    path.push(key);

    if (typeof value === 'object') {
      objectToArray(value, path, acc);
    } else {
      acc.push(`${path.map((n, i) => (i ? `[${n}]` : n)).join('')}=${value}`);
    }

    path.pop();

    return acc;
  }, result);

const objectToRequestString = obj => console.log(objectToArray(obj).join('&'));

objectToRequestString(obj);
