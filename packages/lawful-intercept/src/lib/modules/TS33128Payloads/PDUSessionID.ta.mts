/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDUSessionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionID  ::=  INTEGER (0..255)
 * ```
 */
export
type PDUSessionID = INTEGER;
export const _decode_PDUSessionID: $.ASN1Decoder<PDUSessionID> = (el: _Element): PDUSessionID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("PDUSessionID violates INTEGER range");
    }
    return value;
};
export const _encode_PDUSessionID: $.ASN1Encoder<PDUSessionID> = $._encodeInteger;


/* eslint-enable */
