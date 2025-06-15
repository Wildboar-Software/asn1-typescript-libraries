/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary schemaObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schemaObjectClass                        ID ::= {ds 20}
 * ```
 *
 * @constant
 */
export const schemaObjectClass: ID = new _OID([20], ds);

/* eslint-enable */
