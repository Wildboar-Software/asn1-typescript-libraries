/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFUENGAPID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFUENGAPID  ::=  INTEGER (0..1099511627775)
 * ```
 */
export
type AMFUENGAPID = INTEGER;
export const _decode_AMFUENGAPID: $.ASN1Decoder<AMFUENGAPID> = (el: _Element): AMFUENGAPID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 1099511627775n) {
        throw new ASN1OverflowError("AMFUENGAPID violates INTEGER range");
    }
    return value;
};
export const _encode_AMFUENGAPID: $.ASN1Encoder<AMFUENGAPID> = $._encodeInteger;


/* eslint-enable */
