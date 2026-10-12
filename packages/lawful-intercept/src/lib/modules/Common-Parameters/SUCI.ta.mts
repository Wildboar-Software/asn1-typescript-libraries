/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUCI  ::=  OCTET STRING
 * ```
 */
export
type SUCI = OCTET_STRING; // OctetStringType
export const _decode_SUCI: $.ASN1Decoder<SUCI> = $._decodeOctetString;
export const _encode_SUCI: $.ASN1Encoder<SUCI> = $._encodeOctetString;


/* eslint-enable */
