/* eslint-disable */
import { DBEKM } from "../CMSDBKeyManagement/DBEKM.oca.mjs";
import { simpleString } from "../CMSDBKeyManagement/simpleString.oa.mjs";
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
