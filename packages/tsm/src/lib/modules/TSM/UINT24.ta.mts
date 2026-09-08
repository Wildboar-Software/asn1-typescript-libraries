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
 * @summary UINT24
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UINT24     ::=     INTEGER(0..16777215)
 * ```
 */
export
type UINT24 = INTEGER;
export const _decode_UINT24 = (el: _Element): UINT24 => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 16777215n) {
        throw new ASN1OverflowError("UINT24 violates INTEGER range");
    }
    return value;
};
export const _encode_UINT24 = $._encodeInteger;


/* eslint-enable */
