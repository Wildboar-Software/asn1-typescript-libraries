/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_acScheme } from "../UsefulDefinitions/id-acScheme.va.mjs";
/**
 * @summary basicAccessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicAccessControlScheme       OBJECT IDENTIFIER ::= {id-acScheme 1}
 * ```
 *
 * @constant
 */
export const basicAccessControlScheme: OBJECT_IDENTIFIER = _OID.fromParts(
    [1],
    id_acScheme
);

/* eslint-enable */
