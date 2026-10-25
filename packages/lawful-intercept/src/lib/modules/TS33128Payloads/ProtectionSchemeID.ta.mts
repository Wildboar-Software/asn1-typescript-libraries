/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProtectionSchemeID
 * @description
 * 
 * Identifies the Protection Scheme used to generate the SUCI. See TS 23.003
 * [19] clause 2.2B.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtectionSchemeID  ::=  INTEGER (0..15)
 * ```
 */
export
type ProtectionSchemeID = INTEGER;
export const _decode_ProtectionSchemeID: $.ASN1Decoder<ProtectionSchemeID> = (el: _Element): ProtectionSchemeID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 15n) {
        throw new ASN1OverflowError("ProtectionSchemeID violates INTEGER range");
    }
    return value;
};
export const _encode_ProtectionSchemeID: $.ASN1Encoder<ProtectionSchemeID> = $._encodeInteger;


/* eslint-enable */
