/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerModificationCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerModificationCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerModificationCauseValue = INTEGER;

export function _decode_EPSBearerModificationCauseValue (el: _Element): EPSBearerModificationCauseValue {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("EPSBearerModificationCauseValue violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_EPSBearerModificationCauseValue: $.ASN1Encoder<EPSBearerModificationCauseValue> = $._encodeInteger;


/* eslint-enable */
