/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPCNICellInfoAge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPCNICellInfoAge  ::=  INTEGER(0..999999999)
 * ```
 */
export
type SIPCNICellInfoAge = INTEGER;
export const _decode_SIPCNICellInfoAge: $.ASN1Decoder<SIPCNICellInfoAge> = (el: _Element): SIPCNICellInfoAge => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 999999999n) {
        throw new ASN1OverflowError("SIPCNICellInfoAge violates INTEGER range");
    }
    return value;
};
export const _encode_SIPCNICellInfoAge: $.ASN1Encoder<SIPCNICellInfoAge> = $._encodeInteger;


/* eslint-enable */
