/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary directoryOperationalBindingTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryOperationalBindingTypes         ID ::= {module directoryOperationalBindingTypes(25) 9}
 * ```
 *
 * @constant
 */
export const directoryOperationalBindingTypes: ID = new _OID(
    [/* directoryOperationalBindingTypes */ 25, 9],
    module_
);

/* eslint-enable */
