/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary protocolObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protocolObjectIdentifiers                ID ::= {module protocolObjectIdentifiers(4) 9}
 * ```
 *
 * @constant
 */
export const protocolObjectIdentifiers: ID = new _OID(
    [/* protocolObjectIdentifiers */ 4, 9],
    module_
);

/* eslint-enable */
