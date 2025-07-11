/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary commonProtocolSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * commonProtocolSpecification              ID ::= {module commonProtocolSpecification(35) 9}
 * ```
 *
 * @constant
 */
export const commonProtocolSpecification: ID = _OID.fromParts(
    [/* commonProtocolSpecification */ 35, 9],
    module_
);

/* eslint-enable */
