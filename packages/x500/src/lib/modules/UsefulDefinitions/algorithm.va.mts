/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithm                                ID ::= {ds 8}
 * ```
 *
 * @constant
 */
export const algorithm: ID = new _OID([8], ds);

/* eslint-enable */
