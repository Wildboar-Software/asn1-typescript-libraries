/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IdentityToken
 * @description
 * 
 * Represents the identity token of the PIN client, if available.
 *
 * 3GPP TS 33.128, clause 7.18.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IdentityToken  ::=  UTF8String
 * ```
 */
export
type IdentityToken = UTF8String; // UTF8String
export const _decode_IdentityToken: $.ASN1Decoder<IdentityToken> = $._decodeUTF8String;
export const _encode_IdentityToken: $.ASN1Encoder<IdentityToken> = $._encodeUTF8String;


/* eslint-enable */
