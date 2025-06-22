/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithm                                ID ::= {ds 8}
 * ```
 *
 * @constant
 */
export const algorithm: ID = _OID.fromParts([8], ds);

/* eslint-enable */
