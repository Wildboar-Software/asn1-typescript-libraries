/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary distributedOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distributedOperations                    ID ::= {module distributedOperations(3) 9}
 * ```
 *
 * @constant
 */
export const distributedOperations: ID = _OID.fromParts(
    [/* distributedOperations */ 3, 9],
    module_
);

/* eslint-enable */
