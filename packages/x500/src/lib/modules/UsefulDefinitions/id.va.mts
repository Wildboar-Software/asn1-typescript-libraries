/* eslint-disable */
import { joint_iso_itu_t, ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id ID ::= {joint-iso-itu-t registration-procedures(17) module(1) directory-defs(2)}
 * ```
 *
 * @constant
 */
export const id: ID = _OID.fromParts(
    [/* registration-procedures */ 17, /* module */ 1, /* directory-defs */ 2],
    joint_iso_itu_t
);

/* eslint-enable */
