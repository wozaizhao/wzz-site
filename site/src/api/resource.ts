import { request } from '@/utils/request';

export function getResources() {
  return request.get({
    url: '/resources',
  });
}
