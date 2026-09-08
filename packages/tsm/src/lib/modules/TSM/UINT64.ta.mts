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
 * @summary UINT64
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UINT64     ::=     INTEGER(0..18446744073709551615)
 * ```
 */
export
type UINT64 = INTEGER;
export const _decode_UINT64 = (el: _Element): UINT64 => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 18446744073709551615n) {
        throw new ASN1OverflowError("UINT64 violates INTEGER range");
    }
    return value;
};
export const _encode_UINT64 = $._encodeInteger;


/* eslint-enable */
