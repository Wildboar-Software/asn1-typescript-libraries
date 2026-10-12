/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Rai
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Rai                 ::=  OCTET STRING (SIZE (6))
 * ```
 */
export
type Rai = OCTET_STRING; // OctetStringType
export const _decode_Rai: $.ASN1Decoder<Rai> = $._decodeOctetString;
export const _encode_Rai: $.ASN1Encoder<Rai> = $._encodeOctetString;


/* eslint-enable */
