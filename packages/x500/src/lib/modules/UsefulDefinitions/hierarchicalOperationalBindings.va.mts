/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
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
export const hierarchicalOperationalBindings: ID = new _OID(
    [/* hierarchicalOperationalBindings */ 20, 9],
    module_
);

/* eslint-enable */
