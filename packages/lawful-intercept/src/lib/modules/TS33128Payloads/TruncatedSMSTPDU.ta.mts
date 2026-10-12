/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TruncatedSMSTPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TruncatedSMSTPDU  ::=  OCTET STRING (SIZE(1..130))
 * ```
 */
export
type TruncatedSMSTPDU = OCTET_STRING; // OctetStringType
export const _decode_TruncatedSMSTPDU: $.ASN1Decoder<TruncatedSMSTPDU> = $._decodeOctetString;
export const _encode_TruncatedSMSTPDU: $.ASN1Encoder<TruncatedSMSTPDU> = $._encodeOctetString;


/* eslint-enable */
