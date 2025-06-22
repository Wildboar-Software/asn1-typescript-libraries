/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary distributedDirectoryObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distributedDirectoryObjectIdentifiers ID ::= {module 13}
 * ```
 *
 * @constant
 */
export const distributedDirectoryObjectIdentifiers: ID = _OID.fromParts(
    [13],
    module_
);

/* eslint-enable */
