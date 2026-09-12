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
 * @summary Unsigned16
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Unsigned16  ::=  INTEGER(0..32767)
 * ```
 */
export
type Unsigned16 = INTEGER;
export const _decode_Unsigned16 = (el: _Element): Unsigned16 => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 32767) {
        throw new ASN1OverflowError("Unsigned16 violates INTEGER range constraint");
    }
    return value;
};
export const _encode_Unsigned16 = $._encodeInteger;


/* eslint-enable */
