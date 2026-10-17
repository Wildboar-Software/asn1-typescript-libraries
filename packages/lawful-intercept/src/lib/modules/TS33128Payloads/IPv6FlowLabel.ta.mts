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
 * If the IP addresses in the report are IPv6, this field shall contain the
 * 20-bit IPv6 "Flow Label" as defined in: - IPv6 IETF RFC 8200 [167], and -
 * IPV6 Flow Label Specification IETF RFC 6437 [33].
 *
 * 3GPP TS 33.128, clause 6.2.3.9.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6FlowLabel  ::=  INTEGER(0..1048575)
 * ```
 */
export
type IPv6FlowLabel = INTEGER;
export const _decode_IPv6FlowLabel: $.ASN1Decoder<IPv6FlowLabel> = (el: _Element): IPv6FlowLabel => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 1048575n) {
        throw new ASN1OverflowError("IPv6FlowLabel violates INTEGER range");
    }
    return value;
};
export const _encode_IPv6FlowLabel: $.ASN1Encoder<IPv6FlowLabel> = $._encodeInteger;


/* eslint-enable */
