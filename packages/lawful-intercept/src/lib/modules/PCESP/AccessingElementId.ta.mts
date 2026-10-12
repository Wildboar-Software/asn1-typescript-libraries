/* eslint-disable */
import {
    ASN1Element as _Element,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessingElementId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessingElementId  ::=  VisibleString (SIZE(1..15, ...))
 * ```
 */
export
type AccessingElementId = VisibleString; // VisibleString
export const _decode_AccessingElementId: $.ASN1Decoder<AccessingElementId> = $._decodeVisibleString;
export const _encode_AccessingElementId: $.ASN1Encoder<AccessingElementId> = $._encodeVisibleString;


/* eslint-enable */
