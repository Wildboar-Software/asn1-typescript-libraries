/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AgeOfLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgeOfLocation  ::=  INTEGER (0..32767)
 * ```
 */
export
type AgeOfLocation = INTEGER;

export function _decode_AgeOfLocation (el: _Element): AgeOfLocation {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 32767n) {
        throw new ASN1OverflowError("AgeOfLocation violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_AgeOfLocation: $.ASN1Encoder<AgeOfLocation> = $._encodeInteger;


/* eslint-enable */
