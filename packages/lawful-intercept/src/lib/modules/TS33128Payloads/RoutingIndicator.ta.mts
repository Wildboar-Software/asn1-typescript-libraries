/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoutingIndicator
 * @description
 * 
 * The routing indicator for the SUCI. Used with the Home Network Identifier to
 * route network signalling to the correct UDM/AUSF instances. See TS 23.003
 * [19] clause 2.2B.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingIndicator  ::=  INTEGER (0..9999)
 * ```
 */
export
type RoutingIndicator = INTEGER;
export const _decode_RoutingIndicator: $.ASN1Decoder<RoutingIndicator> = (el: _Element): RoutingIndicator => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 9999n) {
        throw new ASN1OverflowError("RoutingIndicator violates INTEGER range");
    }
    return value;
};
export const _encode_RoutingIndicator: $.ASN1Encoder<RoutingIndicator> = $._encodeInteger;


/* eslint-enable */
