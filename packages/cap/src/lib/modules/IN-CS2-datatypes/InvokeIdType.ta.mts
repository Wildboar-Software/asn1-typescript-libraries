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
 * @summary InvokeIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeIdType  ::=  INTEGER(-128..127)
 * ```
 */
export
type InvokeIdType = INTEGER;
export const _decode_InvokeIdType = (el: _Element): InvokeIdType => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < -128n || value > 127n) : (value < -128 || value > 127))) {
        throw new ASN1OverflowError("InvokeIdType violates INTEGER constraint");
    }
    return value;
};
export const _encode_InvokeIdType = $._encodeInteger;


/* eslint-enable */
