/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reason  ::=  OCTET STRING
 * ```
 */
export
type Reason = OCTET_STRING; // OctetStringType

export const _decode_Reason: $.ASN1Decoder<Reason> = $._decodeOctetString;

export const _encode_Reason: $.ASN1Encoder<Reason> = $._encodeOctetString;


/* eslint-enable */
