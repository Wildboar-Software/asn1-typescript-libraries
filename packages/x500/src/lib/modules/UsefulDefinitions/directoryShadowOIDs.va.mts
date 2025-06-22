/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary directoryShadowOIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryShadowOIDs                      ID ::= {module directoryShadowOIDs(14) 9}
 * ```
 *
 * @constant
 */
export const directoryShadowOIDs: ID = _OID.fromParts(
    [/* directoryShadowOIDs */ 14, 9],
    module_
);

/* eslint-enable */
