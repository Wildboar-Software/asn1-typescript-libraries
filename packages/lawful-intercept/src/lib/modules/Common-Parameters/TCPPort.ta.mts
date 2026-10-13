/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TCPPort
 * @description
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
