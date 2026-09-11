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
 * @summary UINT16
 * @description
 *
 * Unsigned 16-bit integer `0..65535`. ITU-T Rec. X.1084 (05/2008)
 * Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UINT16     ::=     INTEGER(0..65535)
 * ```
 */
export
type UINT16 = INTEGER;
export const _decode_UINT16 = (el: _Element): UINT16 => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 65535n) {
        throw new ASN1OverflowError("UINT16 violates INTEGER range");
    }
    return value;
};
export const _encode_UINT16 = $._encodeInteger;


/* eslint-enable */
