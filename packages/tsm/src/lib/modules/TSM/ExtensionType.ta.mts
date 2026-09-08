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
 * @summary ExtensionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionType     ::=     INTEGER(0..66535)
 * ```
 */
export
type ExtensionType = INTEGER;
export const _decode_ExtensionType = (el: _Element): ExtensionType => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 66535n) {
        throw new ASN1OverflowError("ExtensionType violates INTEGER range");
    }
    return value;
};
export const _encode_ExtensionType = $._encodeInteger;


/* eslint-enable */
