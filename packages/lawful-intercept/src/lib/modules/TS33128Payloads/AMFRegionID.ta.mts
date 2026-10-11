/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFRegionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegionID  ::=  INTEGER (0..255)
 * ```
 */
export
type AMFRegionID = INTEGER;

export function _decode_AMFRegionID (el: _Element): AMFRegionID {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("AMFRegionID violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_AMFRegionID: $.ASN1Encoder<AMFRegionID> = $._encodeInteger;


/* eslint-enable */
