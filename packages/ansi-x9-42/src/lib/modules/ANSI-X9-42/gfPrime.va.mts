/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { fieldType } from "../ANSI-X9-42/fieldType.va.mjs";

/**
 * @summary gfPrime
 * @description
 *
 * Identifies GF(p). Associated parameters shall be
 * `DomainParameters`. Currently the only field type. ANS X9.42-2003
 * §A.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gfPrime     OBJECT IDENTIFIER ::= { fieldType 1 }
 * ```
 *
 * @constant
 */
export const gfPrime: OBJECT_IDENTIFIER = _OID.fromParts([1], fieldType);

/* eslint-enable */
