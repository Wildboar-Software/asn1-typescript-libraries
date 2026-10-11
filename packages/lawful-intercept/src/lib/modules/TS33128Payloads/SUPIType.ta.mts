/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUPIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPIType  ::=  INTEGER (0..7)
 * ```
 */
export
type SUPIType = INTEGER;

export function _decode_SUPIType (el: _Element): SUPIType {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 7n) {
        throw new ASN1OverflowError("SUPIType violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_SUPIType: $.ASN1Encoder<SUPIType> = $._encodeInteger;


/* eslint-enable */
