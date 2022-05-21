import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

import { createContext, responseMeta, router } from '$lib/trpcServer';

export const handle: Handle = createTRPCHandle({
  url: '/api',
  router,
  createContext,
  responseMeta
});

// export const handle: Handle = async ({ event, resolve }) => {
// 	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
// 	event.locals.userid = cookies['userid'] || uuid();

// 	const response = await resolve(event);

// 	if (!cookies['userid']) {
// 		// if this is the first time the user has visited this app,
// 		// set a cookie so that we recognise them when they return
// 		response.headers.set(
// 			'set-cookie',
// 			cookie.serialize('userid', event.locals.userid, {
// 				path: '/',
// 				httpOnly: true
// 			})
// 		);
// 	}

// 	return response;
// };
