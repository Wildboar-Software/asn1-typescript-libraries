/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerDeletionCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerDeletionCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerDeletionCauseValue = INTEGER;

export function _decode_EPSBearerDeletionCauseValue (el: _Element): EPSBearerDeletionCauseValue {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("EPSBearerDeletionCauseValue violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_EPSBearerDeletionCauseValue: $.ASN1Encoder<EPSBearerDeletionCauseValue> = $._encodeInteger;


/* eslint-enable */
