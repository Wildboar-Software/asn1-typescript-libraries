/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const object: ID = _OID.fromParts([10], ds);

/* eslint-enable */
