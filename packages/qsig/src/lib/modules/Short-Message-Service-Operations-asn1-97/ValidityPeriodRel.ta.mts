/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ValidityPeriodRel
 * @description
 *
 * Relative Validity Period, one octet (ECMA-325 Table E.2, §E.1.2.2). After it
 * elapses the Service Centre deletes the Short Message.
 *
 * - 0 to 143: (value + 1) x 5 minutes, in 5-minute steps up to 12 hours.
 * - 144 to 167: 12 hours + ((value - 143) x 30 minutes).
 * - 168 to 196: (value - 166) x 1 day.
 * - 197 to 255: (value - 192) x 1 week.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
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
