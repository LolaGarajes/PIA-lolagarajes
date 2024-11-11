import { relations } from "drizzle-orm/relations";
import { tipoEvento, eventos, lugares, jornada } from "./schema";

export const eventosRelations = relations(eventos, ({one}) => ({
	tipoEvento: one(tipoEvento, {
		fields: [eventos.idTipoEvento],
		references: [tipoEvento.idTipoEvento]
	}),
	lugare: one(lugares, {
		fields: [eventos.idLugar],
		references: [lugares.idLugar]
	}),
	jornada: one(jornada, {
		fields: [eventos.idJornada],
		references: [jornada.idJornada]
	}),
}));

export const tipoEventoRelations = relations(tipoEvento, ({many}) => ({
	eventos: many(eventos),
}));

export const lugaresRelations = relations(lugares, ({many}) => ({
	eventos: many(eventos),
}));

export const jornadaRelations = relations(jornada, ({many}) => ({
	eventos: many(eventos),
}));