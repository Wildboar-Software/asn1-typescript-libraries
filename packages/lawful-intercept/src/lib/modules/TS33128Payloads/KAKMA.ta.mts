/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KAKMA
 * @description
 * 
 * AKMA Anchor Key (see TS 33.535 [65] clause 5.1). Shall be included if
 * available. NOTE: Whether kAKMA is included could also depend on whether
 * provisioning is general or service specific.
 *
 * 3GPP TS 33.128, clause 7.9.1.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KAKMA  ::=  OCTET STRING
 * ```
 */
export
type KAKMA = OCTET_STRING; // OctetStringType
export const _decode_KAKMA: $.ASN1Decoder<KAKMA> = $._decodeOctetString;
export const _encode_KAKMA: $.ASN1Encoder<KAKMA> = $._encodeOctetString;


/* eslint-enable */
