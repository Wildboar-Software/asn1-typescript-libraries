/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const certificateExtensions: ID = _OID.fromParts(
    [/* certificateExtensions */ 26, 9],
    module_
);

/* eslint-enable */
