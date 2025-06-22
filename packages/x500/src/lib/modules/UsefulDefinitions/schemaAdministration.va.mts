/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary schemaAdministration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schemaAdministration                     ID ::= {module schemaAdministration(23) 9}
 * ```
 *
 * @constant
 */
export const schemaAdministration: ID = _OID.fromParts(
    [/* schemaAdministration */ 23, 9],
    module_
);

/* eslint-enable */
