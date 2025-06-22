/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary accessControlAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlAttribute                   ID ::= {ds 24}
 * ```
 *
 * @constant
 */
export const accessControlAttribute: ID = _OID.fromParts([24], ds);

/* eslint-enable */
