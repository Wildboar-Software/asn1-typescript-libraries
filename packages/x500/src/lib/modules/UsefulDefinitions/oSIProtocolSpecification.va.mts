/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary oSIProtocolSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oSIProtocolSpecification                 ID ::= {module oSIProtocolSpecification(36) 9}
 * ```
 *
 * @constant
 */
export const oSIProtocolSpecification: ID = _OID.fromParts(
    [/* oSIProtocolSpecification */ 36, 9],
    module_
);

/* eslint-enable */
