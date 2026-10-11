/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv6FlowLabel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6FlowLabel  ::=  INTEGER(0..1048575)
 * ```
 */
export
type IPv6FlowLabel = INTEGER;

export function _decode_IPv6FlowLabel (el: _Element): IPv6FlowLabel {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 1048575n) {
        throw new ASN1OverflowError("IPv6FlowLabel violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_IPv6FlowLabel: $.ASN1Encoder<IPv6FlowLabel> = $._encodeInteger;


/* eslint-enable */
