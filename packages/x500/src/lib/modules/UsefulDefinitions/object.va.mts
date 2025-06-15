/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary object
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * object                                   ID ::= {ds 10}
 * ```
 *
 * @constant
 */
export const object: ID = new _OID([10], ds);

/* eslint-enable */
