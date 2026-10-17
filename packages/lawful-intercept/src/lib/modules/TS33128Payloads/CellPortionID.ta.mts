/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellPortionID
 * @description
 * 
 * This parameter gives the current Cell Portion location of the target UE. The
 * Cell Portion ID is the unique identifier for a cell portion within a cell.
 * Defined in TS 29.171 [54] clause 7.4.31.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellPortionID  ::=  INTEGER (0..4095)
 * ```
 */
export
type CellPortionID = INTEGER;
export const _decode_CellPortionID: $.ASN1Decoder<CellPortionID> = (el: _Element): CellPortionID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 4095n) {
        throw new ASN1OverflowError("CellPortionID violates INTEGER range");
    }
    return value;
};
export const _encode_CellPortionID: $.ASN1Encoder<CellPortionID> = $._encodeInteger;


/* eslint-enable */
