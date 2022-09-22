/* eslint-disable no-undef */
import { checkError } from './client.js';

export async function getSigns() {
  const response = await client.from('books').select();

  return checkError(response.data);
}

export async function getBookById(id) {
  const response = await client.from('books').select().match({ id }).single();

  return checkError(response.data);
}
