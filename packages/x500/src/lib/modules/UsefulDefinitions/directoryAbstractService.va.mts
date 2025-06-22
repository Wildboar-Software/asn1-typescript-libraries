/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary directoryAbstractService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryAbstractService                 ID ::= {module directoryAbstractService(2) 9}
 * ```
 *
 * @constant
 */
export const directoryAbstractService: ID = _OID.fromParts(
    [/* directoryAbstractService */ 2, 9],
    module_
);

/* eslint-enable */
