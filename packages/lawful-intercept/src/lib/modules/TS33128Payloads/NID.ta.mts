/* eslint-disable */
import {
    type ASN1Element as _Element,
    type UTF8String,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NID
 * @description
 * 
 * This represents the Network Identifier, which together with a PLMN ID is used
 * to identify an SNPN. See TS 23.003 [19] clause 12.7.1. Encoded as per TS
 * 29.571 [17] clause 5.4.3.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
