/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APN
 * @description
 * 
 * Access Point Name associated with the PDN connection present in the Create
 * Session Request (see TS 29.274 [87] clauses 7.2.1 and 8.6) or known at the
 * context at the SGW or PGW (see TS 23.401 [50] clause 5.7.4), as defined in TS
 * 23.003[19] clause 9.1.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APN  ::=  UTF8String
 * ```
 */
export
type APN = UTF8String; // UTF8String
export const _decode_APN: $.ASN1Decoder<APN> = $._decodeUTF8String;
export const _encode_APN: $.ASN1Encoder<APN> = $._encodeUTF8String;


/* eslint-enable */
