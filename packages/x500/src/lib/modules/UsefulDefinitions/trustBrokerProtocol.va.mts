/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary trustBrokerProtocol
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * trustBrokerProtocol                      ID ::= {module trustBrokerProtocol(44) 9}
 * ```
 *
 * @constant
 */
export const trustBrokerProtocol: ID = _OID.fromParts(
    [/* trustBrokerProtocol */ 44, 9],
    module_
);

/* eslint-enable */
