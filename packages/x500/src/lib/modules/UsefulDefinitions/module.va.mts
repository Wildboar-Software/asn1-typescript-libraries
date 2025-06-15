/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary module_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * module                                   ID ::= {ds 1}
 * ```
 *
 * @constant
 */
export const module_: ID = new _OID([1], ds);

/* eslint-enable */
