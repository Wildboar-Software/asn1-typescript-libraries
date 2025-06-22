/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary certificateExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateExtension                     ID ::= {ds 29}
 * ```
 *
 * @constant
 */
export const certificateExtension: ID = _OID.fromParts([29], ds);

/* eslint-enable */
