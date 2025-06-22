/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary opBindingManagement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * opBindingManagement                      ID ::= {module opBindingManagement(18) 9}
 * ```
 *
 * @constant
 */
export const opBindingManagement: ID = _OID.fromParts(
    [/* opBindingManagement */ 18, 9],
    module_
);

/* eslint-enable */
