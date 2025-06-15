/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
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
export const dhPublicNumber: OBJECT_IDENTIFIER = new _OID([1], numberType);

/* eslint-enable */
