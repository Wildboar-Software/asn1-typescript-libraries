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
 * @summary Severity
 * @description
 * 
 * Effect of an event on the controlled process.
 * Integer 0..127; 0 = most severe, 64 = normal, 127 = least. Server
 * treatment is a local matter. ISO 9506-1:2003 §19.1.1.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Severity  ::=  INTEGER (0..127)
 * ```
 */
export
type Severity = INTEGER;
export const _decode_Severity = (el: _Element): Severity => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 127) {
        throw new ASN1OverflowError("Severity violates INTEGER range constraint");
    }
    return value;
};
export const _encode_Severity = $._encodeInteger;


/* eslint-enable */
