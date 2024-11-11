import { db } from '$lib/server/database/connection';
import { eventos, jornada} from '$lib/server/database/schema'
import { fail } from "@sveltejs/kit";
import { LibsqlError } from '@libsql/client';
import { eq, and, like } from "drizzle-orm";


export const load = async () => {
    const jornadass = await db
    .select({
        jornada:jornada.nomJornada
    })
    .from(jornada)
	return {jornadass};
}

