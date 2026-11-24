/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProductID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProductID              ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type ProductID = OCTET_STRING; // OctetStringType

export
const _decode_ProductID: $.ASN1Decoder<ProductID> = $._decodeOctetString;

export
const _encode_ProductID: $.ASN1Encoder<ProductID> = $._encodeOctetString;

/* eslint-enable */
