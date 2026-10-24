/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUPIType
 * @description
 * 
 * Indicates the type of SUPI concealed by a SUCI. Shall be populated as
 * described in TS 23.003 [19] clause 2.2B.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPIType  ::=  INTEGER (0..7)
 * ```
 */
export
type SUPIType = INTEGER;
export const _decode_SUPIType: $.ASN1Decoder<SUPIType> = (el: _Element): SUPIType => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 7n) {
        throw new ASN1OverflowError("SUPIType violates INTEGER range");
    }
    return value;
};
export const _encode_SUPIType: $.ASN1Encoder<SUPIType> = $._encodeInteger;


/* eslint-enable */
