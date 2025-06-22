/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary directoryManagement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryManagement                      ID ::= {module directoryManagement(27) 9}
 * ```
 *
 * @constant
 */
export const directoryManagement: ID = _OID.fromParts(
    [/* directoryManagement */ 27, 9],
    module_
);

/* eslint-enable */
