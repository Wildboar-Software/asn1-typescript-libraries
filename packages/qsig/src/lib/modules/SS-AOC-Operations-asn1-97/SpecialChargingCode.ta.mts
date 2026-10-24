/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SpecialChargingCode
 * @description
 *
 * Integer N from 1 to 10 identifying a charging algorithm (ECMA-211 §A.1.3.3,
 * ECMA-212 §6.3.1). What each code means is outside both standards.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecialChargingCode  ::=  INTEGER (1..10)
 * ```
 */
export
type SpecialChargingCode = INTEGER;

export
const _decode_SpecialChargingCode = (el: _Element): SpecialChargingCode => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 1n || value > 10n) : (value < 1 || value > 10))) {
        throw new ASN1OverflowError("SpecialChargingCode violates INTEGER constraint");
    }
    return value;
};

export
const _encode_SpecialChargingCode: $.ASN1Encoder<SpecialChargingCode> = $._encodeInteger;

/* eslint-enable */
