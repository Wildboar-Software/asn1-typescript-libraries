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
 * @summary Integer32
 * @description
 *
 * Signed integer restricted to −2**31..2**31−1 (ISO 9506-2:2003 §7.5.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Integer32  ::=  INTEGER(-2147483648..2147483647)
 * ```
 */
export
type Integer32 = INTEGER;
export const _decode_Integer32 = (el: _Element): Integer32 => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < -2147483648 || n > 2147483647) {
        throw new ASN1OverflowError("Integer32 violates INTEGER range constraint");
    }
    return value;
};
export const _encode_Integer32 = $._encodeInteger;


/* eslint-enable */
