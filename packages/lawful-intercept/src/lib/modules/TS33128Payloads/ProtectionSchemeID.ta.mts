/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProtectionSchemeID
 * @description
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
