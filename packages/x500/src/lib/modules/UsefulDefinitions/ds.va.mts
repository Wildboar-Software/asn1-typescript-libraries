/* eslint-disable */
import { joint_iso_itu_t, ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary ds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ds ID ::= {joint-iso-itu-t ds(5)}
 * ```
 *
 * @constant
 */
export const ds: ID = _OID.fromParts([/* ds */ 5], joint_iso_itu_t);

/* eslint-enable */
