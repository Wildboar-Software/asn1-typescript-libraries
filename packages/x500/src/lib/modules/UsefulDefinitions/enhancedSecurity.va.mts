/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary enhancedSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enhancedSecurity                         ID ::= {module enhancedSecurity(28) 9}
 * ```
 *
 * @constant
 */
export const enhancedSecurity: ID = new _OID(
    [/* enhancedSecurity */ 28, 9],
    module_
);

/* eslint-enable */
