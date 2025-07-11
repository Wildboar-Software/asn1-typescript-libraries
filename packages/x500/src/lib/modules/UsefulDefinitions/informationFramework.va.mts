/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary informationFramework
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * informationFramework                     ID ::= {module informationFramework(1) 9}
 * ```
 *
 * @constant
 */
export const informationFramework: ID = _OID.fromParts(
    [/* informationFramework */ 1, 9],
    module_
);

/* eslint-enable */
