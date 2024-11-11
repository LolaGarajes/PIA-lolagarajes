import { sqliteTable, integer, foreignKey, text, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const jornada = sqliteTable("jornada", {
	idJornada: integer("id_jornada").primaryKey(),
	nomJornada: text("nom_jornada", { length: 255 }),
});

export const tipoEvento = sqliteTable("tipo_evento", {
	idTipoEvento: integer("id_tipo_evento").primaryKey(),
	desTipoEvento: text("des_tipo_evento", { length: 255 }),
});

export const lugares = sqliteTable("lugares", {
	idLugar: integer().primaryKey(),
	nomLugar: text({ length: 255 }),
});

export const admin = sqliteTable("admin", {
	idAdmin: integer(),
	"contraseña": integer("contraseña"),
});

export const eventos = sqliteTable("eventos", {
	idEvento: integer().primaryKey({ autoIncrement: true }),
	tituloEvento: text(),
	descEvento: text(),
	fecEvento: numeric(),
	idTipoEvento: integer().references(() => tipoEvento.idTipoEvento),
	idLugar: integer().references(() => lugares.idLugar),
	idJornada: integer().references(() => jornada.idJornada),
});

