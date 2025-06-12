/* eslint-disable */
import { DBEKM } from "../CMSDBKeyManagement/DBEKM.oca.js";
import { simpleString } from "../CMSDBKeyManagement/simpleString.oa.js";
export { DBEKM } from "../CMSDBKeyManagement/DBEKM.oca.js";
export { simpleString } from "../CMSDBKeyManagement/simpleString.oa.js";

/* START_OF_SYMBOL_DEFINITION SchemaIdentifier */
/**
 * @summary SchemaIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemaIdentifier DBEKM ::= {
 * simpleString,
 * ...    -- Expect additional schema identifier objects --
 * }
 * ```
 *
 * @constant
 * @type {DBEKM[]}
 *
 */
export const SchemaIdentifier: DBEKM[] = [simpleString];
/* END_OF_SYMBOL_DEFINITION SchemaIdentifier */

/* eslint-enable */
