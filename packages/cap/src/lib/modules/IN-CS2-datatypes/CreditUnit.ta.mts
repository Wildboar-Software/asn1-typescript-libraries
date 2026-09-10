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
 * @summary CreditUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreditUnit  ::=  INTEGER(0..maxCreditUnit)
 * ```
 */
export
type CreditUnit = INTEGER;
export const _decode_CreditUnit = (el: _Element): CreditUnit => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 65536n) : (value < 0 || value > 65536))) {
        throw new ASN1OverflowError("CreditUnit violates INTEGER constraint");
    }
    return value;
};
export const _encode_CreditUnit = $._encodeInteger;


/* eslint-enable */
