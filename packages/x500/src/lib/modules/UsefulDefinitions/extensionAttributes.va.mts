/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary extensionAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extensionAttributes                      ID ::= {module extensionAttributes(41) 9}
 * ```
 *
 * @constant
 */
export const extensionAttributes: ID = new _OID(
    [/* extensionAttributes */ 41, 9],
    module_
);

/* eslint-enable */
