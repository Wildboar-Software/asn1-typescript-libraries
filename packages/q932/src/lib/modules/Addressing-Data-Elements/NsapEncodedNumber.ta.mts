/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NsapEncodedNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NsapEncodedNumber  ::=  OCTET STRING(SIZE (20))
 * ```
 */
export
type NsapEncodedNumber = OCTET_STRING; // OctetStringType
export const _decode_NsapEncodedNumber: $.ASN1Decoder<NsapEncodedNumber> = $._decodeOctetString;
export const _encode_NsapEncodedNumber: $.ASN1Encoder<NsapEncodedNumber> = $._encodeOctetString;


/* eslint-enable */
