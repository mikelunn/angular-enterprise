/**
 * Created by complunm on 5/19/2017.
 */
const typeCache: { [label: string]: boolean } = {};

export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

const typeForCache: { [slice: string]: { [action: string]: string } } = {};

export function typeFor(slice, action) {
  if (typeForCache[slice] && typeForCache[slice][action]) {
    return typeForCache[slice][action];
  } else {
    typeForCache[slice] = typeForCache[slice] || {};
    typeForCache[slice][action] = `[${slice}] ${action}`;
    type(typeForCache[slice][action]);
    return typeForCache[slice][action];
  }
}

export const slices = {
  BOOK: 'book',
  CURRENCY: 'currency',
  LAYOUT: 'layout'
};
