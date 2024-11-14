import { db } from '$lib/server/database/connection';
import {jornada,tipoEvento,lugares,eventos} from '$lib/server/database/schema'
import { fail } from "@sveltejs/kit";
import { LibsqlError } from '@libsql/client';
import { eq, and, like } from "drizzle-orm";
import { uploadImage } from '$lib/server/cloudinary';



export const load = async () => {
    const jornadas = await db
    .select({
        idjornada:jornada.idJornada,
        nomjornada:jornada.nomJornada
    })
    .from(jornada);

    const tipo_evento = await db
    .select({
        idtipoevento: tipoEvento.idTipoEvento,
        nomtipoevento: tipoEvento.desTipoEvento
    })
    .from(tipoEvento);

    const lugar = await db
    .select({
        idlugar : lugares.idLugar,
        nomlugar : lugares.nomLugar
    })
    .from(lugares);


	return {jornadas, tipo_evento,lugar};
}

export const actions = {
    guardar: async ({request}) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        console.log(data);

        try {
            await db.insert(eventos).values({
                tituloEvento: data.tit as string,
                descEvento: data.desc as string,
                fecEvento: data.fecha as string,
                idTipoEvento: parseInt(data.tipoevento as string),
                idJornada: parseInt(data.jornada as string),
                idLugar: parseInt(data.lugar as string)


            })
        } catch (error) {
            if (error instanceof LibsqlError) {
                console.log(error);
            }
            return console.log("pito");
        }

        return { success: true };
    }

}
