/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEUES1APID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEUES1APID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type MMEUES1APID = INTEGER;
export const _decode_MMEUES1APID: $.ASN1Decoder<MMEUES1APID> = (el: _Element): MMEUES1APID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 4294967295n) {
        throw new ASN1OverflowError("MMEUES1APID violates INTEGER range");
    }
    return value;
};
export const _encode_MMEUES1APID: $.ASN1Encoder<MMEUES1APID> = $._encodeInteger;


/* eslint-enable */
