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
 * @summary EE_Duration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EE-Duration  ::=  INTEGER {
 *     current          (0),
 *     permanent        (1)
 * } (0..1)
 * ```
 */
export
type EE_Duration = INTEGER;

/**
 * @summary EE_Duration_current
 * @constant
 * @type {number}
 */
export
const EE_Duration_current: EE_Duration = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_Duration_current
 * @constant
 * @type {number}
 */
export
const current: EE_Duration = EE_Duration_current; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_Duration_permanent
 * @constant
 * @type {number}
 */
export
const EE_Duration_permanent: EE_Duration = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_Duration_permanent
 * @constant
 * @type {number}
 */
export
const permanent: EE_Duration = EE_Duration_permanent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EE_Duration = (el: _Element): EE_Duration => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 1) {
        throw new ASN1OverflowError("EE_Duration violates INTEGER range constraint");
    }
    return value;
};
export const _encode_EE_Duration = $._encodeInteger;


/* eslint-enable */
