/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NID  ::=  UTF8String (SIZE(11))
 * ```
 */
export
type NID = UTF8String; // UTF8String
export const _decode_NID: $.ASN1Decoder<NID> = (el: _Element): NID => {
    const value = $._decodeUTF8String(el);
    if (value.length < 11 || value.length > 11) {
        throw new ASN1SizeError("NID violates SIZE constraint");
    }
    return value;
};
export const _encode_NID: $.ASN1Encoder<NID> = $._encodeUTF8String;


/* eslint-enable */
