/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary attributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeType                            ID ::= {ds 4}
 * ```
 *
 * @constant
 */
export const attributeType: ID = _OID.fromParts([4], ds);

/* eslint-enable */
