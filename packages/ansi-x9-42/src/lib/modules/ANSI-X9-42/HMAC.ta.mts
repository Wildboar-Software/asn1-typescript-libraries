/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary HMAC
 * @description
 *
 * MAC output as an octet string. §7.8 allows an optional MAC on
 * derived keying data using an ASC X9-approved MAC offering at least
 * 80 bits of security (e.g. HMAC from ANS X9.71). Used for
 * implementation validation (§7.9); not sufficient for key
 * confirmation. The spec does not further describe this type beyond
 * the assignment. ANS X9.42-2003 §7.8, §A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HMAC  ::=  OCTET STRING
 * ```
 */
export type HMAC = OCTET_STRING; // OctetStringType




export const _decode_HMAC = $._decodeOctetString;




export const _encode_HMAC = $._encodeOctetString;


/* eslint-enable */
