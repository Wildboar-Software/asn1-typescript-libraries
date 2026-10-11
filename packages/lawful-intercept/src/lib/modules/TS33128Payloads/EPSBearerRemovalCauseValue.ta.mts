/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerRemovalCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerRemovalCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerRemovalCauseValue = INTEGER;

export function _decode_EPSBearerRemovalCauseValue (el: _Element): EPSBearerRemovalCauseValue {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("EPSBearerRemovalCauseValue violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_EPSBearerRemovalCauseValue: $.ASN1Encoder<EPSBearerRemovalCauseValue> = $._encodeInteger;


/* eslint-enable */
