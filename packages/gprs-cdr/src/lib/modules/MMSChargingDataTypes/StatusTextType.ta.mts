/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StatusTextType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusTextType  ::=  OCTET STRING
 * ```
 */
export
type StatusTextType = OCTET_STRING; // OctetStringType

export
const _decode_StatusTextType: $.ASN1Decoder<StatusTextType> = $._decodeOctetString;

export
const _encode_StatusTextType: $.ASN1Encoder<StatusTextType> = $._encodeOctetString;

/* eslint-enable */
