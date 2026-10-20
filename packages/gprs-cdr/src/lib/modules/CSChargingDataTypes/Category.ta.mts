/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Category
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Category    ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type Category = OCTET_STRING; // OctetStringType

export
const _decode_Category: $.ASN1Decoder<Category> = $._decodeOctetString;

export
const _encode_Category: $.ASN1Encoder<Category> = $._encodeOctetString;

/* eslint-enable */
