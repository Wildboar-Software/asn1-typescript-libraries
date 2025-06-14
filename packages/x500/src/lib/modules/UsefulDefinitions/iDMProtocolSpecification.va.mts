/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary iDMProtocolSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iDMProtocolSpecification                 ID ::= {module iDMProtocolSpecification(30) 9}
 * ```
 *
 * @constant
 */
export const iDMProtocolSpecification: ID = new _OID(
    [/* iDMProtocolSpecification */ 30, 9],
    module_
);

/* eslint-enable */
