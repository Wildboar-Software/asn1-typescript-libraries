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
 * @summary CMSVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMSVersion  ::=  INTEGER { v84(84) } (v84,...)
 * ```
 */
export
type CMSVersion = INTEGER;

/**
 * @summary CMSVersion_v84
 * @constant
 * @type {number}
 */
export
const CMSVersion_v84: CMSVersion = 84; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CMSVersion_v84
 * @constant
 * @type {number}
 */
export
const v84: CMSVersion = CMSVersion_v84; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CMSVersion = (el: _Element): CMSVersion => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 84n) {
        throw new ASN1OverflowError("CMSVersion violates INTEGER range");
    }
    return value;
};
export const _encode_CMSVersion = $._encodeInteger;


/* eslint-enable */
