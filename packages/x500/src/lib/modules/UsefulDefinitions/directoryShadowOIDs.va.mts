/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
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
export const directoryShadowOIDs: ID = new _OID(
    [/* directoryShadowOIDs */ 14, 9],
    module_
);

/* eslint-enable */
