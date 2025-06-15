/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary rosObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rosObject                                ID ::= {ds 25}
 * ```
 *
 * @constant
 */
export const rosObject: ID = new _OID([25], ds);

/* eslint-enable */
