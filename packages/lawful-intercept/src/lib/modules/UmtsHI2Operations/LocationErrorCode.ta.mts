/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationErrorCode
 * @description
 * 
 * LALS positioning error. Conditional when positioning is not successful
 * (tables 6.9H and 6.9I). The integer is an OMA Mobile Location Protocol result
 * identifier (OMA-TS-MLP clause 5.4, reference [88]); annex B.3 bounds it to
 * 1..699 and does not list the values.
 * 
 * The paragraph after table 6.9I says a LALS target-positioning report is sent
 * only when the target is successfully located, and that no record is sent when
 * location is unavailable (for example the target is not attached). 3GPP TS
 * 33.108, clause 6.5.1.1 and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationErrorCode  ::=  INTEGER (1..699)
 * ```
 */
export
type LocationErrorCode = INTEGER;
export const _decode_LocationErrorCode: $.ASN1Decoder<LocationErrorCode> = (el: _Element): LocationErrorCode => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 1n || _n > 699n) {
        throw new ASN1OverflowError("LocationErrorCode violates INTEGER range");
    }
    return value;
};
export const _encode_LocationErrorCode: $.ASN1Encoder<LocationErrorCode> = $._encodeInteger;


/* eslint-enable */
