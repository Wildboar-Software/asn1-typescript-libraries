/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NextLayerProtocol
 * @description
 * 
 * Shall contain the contents of the IP "Protocol" field as defined in IETF RFC
 * 791 [34] (bits 72...79 in the IP header), and is one of the assigned Internet
 * protocol numbers defined in IANA [32].
 *
 * 3GPP TS 33.128, clause 6.2.3.9.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NextLayerProtocol  ::=  INTEGER(0..255)
 * ```
 */
export
type NextLayerProtocol = INTEGER;
export const _decode_NextLayerProtocol: $.ASN1Decoder<NextLayerProtocol> = (el: _Element): NextLayerProtocol => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("NextLayerProtocol violates INTEGER range");
    }
    return value;
};
export const _encode_NextLayerProtocol: $.ASN1Encoder<NextLayerProtocol> = $._encodeInteger;


/* eslint-enable */
