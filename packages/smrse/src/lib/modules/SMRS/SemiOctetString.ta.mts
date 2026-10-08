/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SemiOctetString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SemiOctetString  ::=  OCTET STRING
 * ```
 *
 * Digits of an `SMS-Address` in the `octet-format` alternative. Each
 * octet contains two binary coded decimal digits (clauses 2.2 and 3.2).
 * Those clauses constrain the string to `SIZE (1..10)`; this assignment
 * does not. The report does not specify nibble order or a filler for an
 * odd count of digits.
 */
export
type SemiOctetString = OCTET_STRING; // OctetStringType
export const _decode_SemiOctetString = $._decodeOctetString;
export const _encode_SemiOctetString = $._encodeOctetString;


/* eslint-enable */
