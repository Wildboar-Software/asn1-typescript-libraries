/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UINT8
 * @description
 *
 * Unsigned 8-bit integer `0..255`. ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UINT8     ::=     INTEGER(0..255)
 * ```
 */
export
type UINT8 = INTEGER;
export const _decode_UINT8 = (el: _Element): UINT8 => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 255n) {
        throw new ASN1OverflowError("UINT8 violates INTEGER range");
    }
    return value;
};
export const _encode_UINT8 = $._encodeInteger;


/* eslint-enable */
