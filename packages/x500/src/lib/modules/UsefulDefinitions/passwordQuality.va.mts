/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary passwordQuality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * passwordQuality                          ID ::= {ds 39}
 * ```
 *
 * @constant
 */
export const passwordQuality: ID = new _OID([39], ds);

/* eslint-enable */
