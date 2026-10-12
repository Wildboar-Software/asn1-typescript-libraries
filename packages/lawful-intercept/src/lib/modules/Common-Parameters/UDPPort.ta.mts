/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDPPort
 * @description
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
