/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary basicAccessControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicAccessControl                       ID ::= {module basicAccessControl(24) 9}
 * ```
 *
 * @constant
 */
export const basicAccessControl: ID = _OID.fromParts(
    [/* basicAccessControl */ 24, 9],
    module_
);

/* eslint-enable */
