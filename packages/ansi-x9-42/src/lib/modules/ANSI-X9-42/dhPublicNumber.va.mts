/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { numberType } from "../ANSI-X9-42/numberType.va.mjs";

/**
 * @summary dhPublicNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhPublicNumber OBJECT IDENTIFIER ::= {numberType 1 }
 * ```
 *
 * @constant
 */
export const dhPublicNumber: OBJECT_IDENTIFIER = _OID.fromParts([1], numberType);

/* eslint-enable */
