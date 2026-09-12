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
 * @summary Unsigned32
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Unsigned32  ::=  INTEGER(0..2147483647)
 * ```
 */
export
type Unsigned32 = INTEGER;
export const _decode_Unsigned32 = (el: _Element): Unsigned32 => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 2147483647) {
        throw new ASN1OverflowError("Unsigned32 violates INTEGER range constraint");
    }
    return value;
};
export const _encode_Unsigned32 = $._encodeInteger;


/* eslint-enable */
