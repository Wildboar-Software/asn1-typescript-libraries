/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary attributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeSet                             ID ::= {ds 7}
 * ```
 *
 * @constant
 */
export const attributeSet: ID = new _OID([7], ds);

/* eslint-enable */
