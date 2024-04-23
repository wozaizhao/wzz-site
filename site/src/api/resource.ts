import { request } from '@/utils/request';

export function getResources(params: any) {
  return request.get({
    url: '/resources',
    params
  });
}
