/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANUENGAPID
 * @description
 * 
 * Identity that the AMF receives from the NG-RAN node uniquely identifying the
 * target UE within the NG-RAN Node. See TS 38.413 [23] clause 9.3.3.2.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.9.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUENGAPID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type RANUENGAPID = INTEGER;
export const _decode_RANUENGAPID: $.ASN1Decoder<RANUENGAPID> = (el: _Element): RANUENGAPID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 4294967295n) {
        throw new ASN1OverflowError("RANUENGAPID violates INTEGER range");
    }
    return value;
};
export const _encode_RANUENGAPID: $.ASN1Encoder<RANUENGAPID> = $._encodeInteger;


/* eslint-enable */
