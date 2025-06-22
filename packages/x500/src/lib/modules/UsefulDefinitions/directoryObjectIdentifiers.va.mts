/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary directoryObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryObjectIdentifiers               ID ::= {module directoryObjectIdentifiers(9) 9}
 * ```
 *
 * @constant
 */
export const directoryObjectIdentifiers: ID = _OID.fromParts(
    [/* directoryObjectIdentifiers */ 9, 9],
    module_
);

/* eslint-enable */
