/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary upperBounds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * upperBounds                              ID ::= {module upperBounds(10) 9}
 * ```
 *
 * @constant
 */
export const upperBounds: ID = _OID.fromParts([/* upperBounds */ 10, 9], module_);

/* eslint-enable */
