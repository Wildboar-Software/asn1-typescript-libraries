/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDPPort
 * @description
 *
 * UDP port, written in decimal. Range 0 to 65535 inclusive.
 * Example: `53`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.19, citing IETF RFC 768.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * https://www.rfc-editor.org/rfc/rfc768
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDPPort  ::=  INTEGER (0..65535)
 * ```
 */
export
type UDPPort = INTEGER;
export const _decode_UDPPort: $.ASN1Decoder<UDPPort> = (el: _Element): UDPPort => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 65535n) {
        throw new ASN1OverflowError("UDPPort violates INTEGER range");
    }
    return value;
};
export const _encode_UDPPort: $.ASN1Encoder<UDPPort> = $._encodeInteger;


/* eslint-enable */
