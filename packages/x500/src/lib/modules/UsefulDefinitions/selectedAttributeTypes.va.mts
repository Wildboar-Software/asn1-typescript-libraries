/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary selectedAttributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * selectedAttributeTypes                   ID ::= {module selectedAttributeTypes(5) 9}
 * ```
 *
 * @constant
 */
export const selectedAttributeTypes: ID = _OID.fromParts(
    [/* selectedAttributeTypes */ 5, 9],
    module_
);

/* eslint-enable */
