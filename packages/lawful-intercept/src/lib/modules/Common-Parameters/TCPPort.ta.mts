/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TCPPort
 * @description
 *
 * TCP port, written in decimal. Annex B and the clause 6.17 regular
 * expression allow 1 to 65535 inclusive. Example: `22`.
 *
 * Annex A restricts the XSD type with `minExclusive` 1 and
 * `maxInclusive` 65535, which excludes port 1. This type follows
 * annex B.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.17, citing IETF RFC 793.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * https://www.rfc-editor.org/rfc/rfc793
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCPPort  ::=  INTEGER (1..65535)
 * ```
 */
export
type TCPPort = INTEGER;
export const _decode_TCPPort: $.ASN1Decoder<TCPPort> = (el: _Element): TCPPort => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 1n || _n > 65535n) {
        throw new ASN1OverflowError("TCPPort violates INTEGER range");
    }
    return value;
};
export const _encode_TCPPort: $.ASN1Encoder<TCPPort> = $._encodeInteger;


/* eslint-enable */
