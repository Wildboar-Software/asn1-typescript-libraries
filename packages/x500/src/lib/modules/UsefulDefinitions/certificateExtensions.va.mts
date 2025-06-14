/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary certificateExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateExtensions                    ID ::= {module certificateExtensions(26) 9}
 * ```
 *
 * @constant
 */
export const certificateExtensions: ID = new _OID(
    [/* certificateExtensions */ 26, 9],
    module_
);

/* eslint-enable */
