/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { fieldType } from "../ANSI-X9-42/fieldType.va.mjs";

/**
 * @summary gfPrime
 * @description
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
