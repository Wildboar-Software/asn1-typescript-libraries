/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingID  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type ChargingID = INTEGER;

export const _decode_ChargingID = (el: _Element): ChargingID => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? Number(value) : value) < 0 || (typeof value === "bigint" ? Number(value) : value) > 4294967295) {
        throw new ASN1OverflowError("ChargingID violates INTEGER range");
    }
    return value;
};

export
const _encode_ChargingID: $.ASN1Encoder<ChargingID> = $._encodeInteger;

/* eslint-enable */
