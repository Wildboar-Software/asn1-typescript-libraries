/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorCode
 * @description
 * 
 * IANA-registered H.248 error code, 0 to 65535 (ITU-T Rec. H.248.1 (03/2013)
 * clause 7.1.20).
 *
 * ITU-T H.248.8 is the list of codes and their descriptions. Clause 14.2 is how
 * new codes are registered. This Recommendation cites, among others, 401, 403,
 * 406, 410, 411, 413, 421, 422, 431, 435, 442, 444, 457, 460, 471, 501, 506,
 * 510, and 518. See `ErrorDescriptor`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorCode  ::=  INTEGER(0..65535)
 * ```
 */
export
type ErrorCode = INTEGER;
export const _decode_ErrorCode = (el: _Element): ErrorCode => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 65535n) {
        throw new ASN1OverflowError("ErrorCode violates INTEGER range");
    }
    return value;
};
export const _encode_ErrorCode = $._encodeInteger;


/* eslint-enable */
