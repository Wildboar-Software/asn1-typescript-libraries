/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary attributeSyntaxVendor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeSyntaxVendor                    ID ::= {ds 5}
 * ```
 *
 * @constant
 */
export const attributeSyntaxVendor: ID = _OID.fromParts([5], ds);

/* eslint-enable */
