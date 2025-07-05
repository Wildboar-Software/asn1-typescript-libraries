/* eslint-disable */
import { type DBEKM } from "../CMSDBKeyManagement/DBEKM.oca.mjs";
import { simpleString } from "../CMSDBKeyManagement/simpleString.oa.mjs";

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

/* eslint-enable */
