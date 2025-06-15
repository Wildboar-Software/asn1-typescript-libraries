/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary usefulDefinitions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * usefulDefinitions                        ID ::= {module usefulDefinitions(0) 9}
 * ```
 *
 * @constant
 */
export const usefulDefinitions: ID = new _OID(
    [/* usefulDefinitions */ 0, 9],
    module_
);

/* eslint-enable */
