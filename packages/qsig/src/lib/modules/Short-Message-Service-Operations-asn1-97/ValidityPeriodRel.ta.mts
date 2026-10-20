/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ValidityPeriodRel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValidityPeriodRel  ::=  INTEGER (0..255)
 * ```
 */
export
type ValidityPeriodRel = INTEGER;

export
const _decode_ValidityPeriodRel = (el: _Element): ValidityPeriodRel => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("ValidityPeriodRel violates INTEGER constraint");
    }
    return value;
};

export
const _encode_ValidityPeriodRel: $.ASN1Encoder<ValidityPeriodRel> = $._encodeInteger;

/* eslint-enable */
