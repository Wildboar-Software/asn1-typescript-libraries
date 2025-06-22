/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary dsaOperationalAttributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsaOperationalAttributeTypes             ID ::= {module dsaOperationalAttributeTypes(22) 9}
 * ```
 *
 * @constant
 */
export const dsaOperationalAttributeTypes: ID = _OID.fromParts(
    [/* dsaOperationalAttributeTypes */ 22, 9],
    module_
);

/* eslint-enable */
