/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary objectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectClass                              ID ::= {ds 6}
 * ```
 *
 * @constant
 */
export const objectClass: ID = _OID.fromParts([6], ds);

/* eslint-enable */
