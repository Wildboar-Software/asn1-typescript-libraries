/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_acScheme } from "../UsefulDefinitions/id-acScheme.va.mjs";
/**
 * @summary simplifiedAccessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * simplifiedAccessControlScheme  OBJECT IDENTIFIER ::= {id-acScheme 2}
 * ```
 *
 * @constant
 */
export const simplifiedAccessControlScheme: OBJECT_IDENTIFIER = _OID.fromParts(
    [2],
    id_acScheme
);

/* eslint-enable */
