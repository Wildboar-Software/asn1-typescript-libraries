/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary port
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * port                                     ID ::= {ds 11}
 * ```
 *
 * @constant
 */
export const port: ID = new _OID([11], ds);

/* eslint-enable */
