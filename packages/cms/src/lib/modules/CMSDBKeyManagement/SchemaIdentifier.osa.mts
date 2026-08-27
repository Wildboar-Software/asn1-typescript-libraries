/* eslint-disable */
import { type DBEKM } from "../CMSDBKeyManagement/DBEKM.oca.mjs";
import { simpleString } from "../CMSDBKeyManagement/simpleString.oa.mjs";

/**
 * @summary SchemaIdentifier
 * @description
 *
 * Object set identifying DBEKM schema. (ITU-T X.894 | ISO/IEC 24824-4 clause 9.2 / Annex A.16).
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
