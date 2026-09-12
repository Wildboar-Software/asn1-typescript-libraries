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
 * @summary EE_Class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EE-Class  ::=  INTEGER {
 *     modifier         (0),
 *     notification     (1)
 * } (0..1)
 * ```
 */
export
type EE_Class = INTEGER;

/**
 * @summary EE_Class_modifier
 * @constant
 * @type {number}
 */
export
const EE_Class_modifier: EE_Class = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_Class_modifier
 * @constant
 * @type {number}
 */
export
const modifier: EE_Class = EE_Class_modifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_Class_notification
 * @constant
 * @type {number}
 */
export
const EE_Class_notification: EE_Class = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_Class_notification
 * @constant
 * @type {number}
 */
export
const notification: EE_Class = EE_Class_notification; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EE_Class = (el: _Element): EE_Class => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 1) {
        throw new ASN1OverflowError("EE_Class violates INTEGER range constraint");
    }
    return value;
};
export const _encode_EE_Class = $._encodeInteger;


/* eslint-enable */
