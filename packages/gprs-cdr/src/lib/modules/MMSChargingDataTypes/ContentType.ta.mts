/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentType  ::=  OCTET STRING
 * ```
 */
export
type ContentType = OCTET_STRING; // OctetStringType

export
const _decode_ContentType: $.ASN1Decoder<ContentType> = $._decodeOctetString;

export
const _encode_ContentType: $.ASN1Encoder<ContentType> = $._encodeOctetString;

/* eslint-enable */
