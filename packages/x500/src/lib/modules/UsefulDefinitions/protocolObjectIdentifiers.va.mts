/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const protocolObjectIdentifiers: ID = _OID.fromParts(
    [/* protocolObjectIdentifiers */ 4, 9],
    module_
);

/* eslint-enable */
