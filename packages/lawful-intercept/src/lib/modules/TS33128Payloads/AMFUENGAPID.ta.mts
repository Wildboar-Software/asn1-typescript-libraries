/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFUENGAPID
 * @description
 * 
 * New Identity that the AMF uses to uniquely identify the target UE over the NG
 * Interface. Shall include when sent in the UE CONTEXT MODIFICATION REQUEST or
 * when known at the NF. See TS 38.413 [23] clause 9.3.3.1.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.15.
 * https://www.3gpp.org/DynaReport/33128.htm
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
