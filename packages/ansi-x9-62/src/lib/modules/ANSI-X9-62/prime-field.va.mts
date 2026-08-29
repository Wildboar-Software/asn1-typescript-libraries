/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_fieldType } from "../ANSI-X9-62/id-fieldType.va.mjs";
/**
 * @summary prime_field
 * @description
 *
 * Identifies Fp. Parameters are `Prime-p`.
 * ANSI X9.62-1998 §6.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime-field OBJECT IDENTIFIER ::= { id-fieldType prime(1) }
 * ```
 *
 * @constant
 */
export const prime_field: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* prime */ 1],
    id_fieldType
);

/* eslint-enable */
