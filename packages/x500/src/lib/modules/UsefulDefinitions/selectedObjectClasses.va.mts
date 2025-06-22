/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary selectedObjectClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * selectedObjectClasses                    ID ::= {module selectedObjectClasses(6) 9}
 * ```
 *
 * @constant
 */
export const selectedObjectClasses: ID = _OID.fromParts(
    [/* selectedObjectClasses */ 6, 9],
    module_
);

/* eslint-enable */
