import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/database/index';
import type { Actions } from './$types';
import { admin } from '$lib/server/database/schema';
import { eq, and } from "drizzle-orm";
export const actions: Actions = {
	crear: async ({ request }) => {
		const formData = await request.formData();
		const contraseña = formData.get('contraseña');
		console.log(contraseña);
		const cofre = await db.select({ contraseña: admin.contraseña }).from(admin).where(eq(admin.contraseña, contraseña));
		if (cofre.length === 0) { return fail }
		return redirect(302, '../publicacion')
	}
}