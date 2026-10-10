/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffDuration  ::=  INTEGER (0..36000)
 * ```
 */
export
type TariffDuration = INTEGER;
export const _decode_TariffDuration = (el: _Element): TariffDuration => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 36000) {
        throw new ASN1OverflowError("TariffDuration violates INTEGER range");
    }
    return value;
};
export const _encode_TariffDuration = $._encodeInteger;


/* eslint-enable */
