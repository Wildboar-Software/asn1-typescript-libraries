/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PagingRestrictionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PagingRestrictionIndicator  ::=  OCTET STRING (SIZE(1..33))
 * ```
 */
export
type PagingRestrictionIndicator = OCTET_STRING; // OctetStringType
export const _decode_PagingRestrictionIndicator: $.ASN1Decoder<PagingRestrictionIndicator> = $._decodeOctetString;
export const _encode_PagingRestrictionIndicator: $.ASN1Encoder<PagingRestrictionIndicator> = $._encodeOctetString;


/* eslint-enable */
