/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary hierarchicalOperationalBindings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchicalOperationalBindings          ID ::= {module hierarchicalOperationalBindings(20) 9}
 * ```
 *
 * @constant
 */
export const hierarchicalOperationalBindings: ID = _OID.fromParts(
    [/* hierarchicalOperationalBindings */ 20, 9],
    module_
);

/* eslint-enable */
