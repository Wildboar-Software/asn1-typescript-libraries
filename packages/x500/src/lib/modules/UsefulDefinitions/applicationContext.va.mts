/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary applicationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applicationContext                       ID ::= {ds 3}
 * ```
 *
 * @constant
 */
export const applicationContext: ID = new _OID([3], ds);

/* eslint-enable */
