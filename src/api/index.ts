import axios from 'axios';
import { IPostWithAd, IResponsePostList } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://34.22.77.64:8080',
});

export const getPostList = async (): Promise<IResponsePostList> => {
  const { data } = await instance.get('/posts');
  return data;
};

export const createPost = (title: string, contents: string, tag: string) => {
  return instance.post('/posts', {
    title,
    contents,
    tag,
  });
};

export const getPostById = async (id: string): Promise<IPostWithAd> => {
  const { data } = await instance.get(`/posts/${id}`);
  return data;
};

export const updatePostById = (id: string, title: string, contents: string, tag: string) => {
  return instance.put(`/posts/${id}`, {
    title,
    contents,
    tag,
  });
};

export const deletePostById = (id: string) => {
  return instance.delete(`/posts/${id}`);
};
