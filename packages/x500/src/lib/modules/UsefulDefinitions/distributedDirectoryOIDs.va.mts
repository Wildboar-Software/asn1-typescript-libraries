/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary distributedDirectoryOIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distributedDirectoryOIDs                 ID ::= {module distributedDirectoryOIDs(13) 9}
 * ```
 *
 * @constant
 */
export const distributedDirectoryOIDs: ID = _OID.fromParts(
    [/* distributedDirectoryOIDs */ 13, 9],
    module_
);

/* eslint-enable */
