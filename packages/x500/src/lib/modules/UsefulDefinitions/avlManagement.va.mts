/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary avlManagement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * avlManagement                            ID ::= {module avlManagement(43) 9}
 * ```
 *
 * @constant
 */
export const avlManagement: ID = _OID.fromParts([/* avlManagement */ 43, 9], module_);

/* eslint-enable */
