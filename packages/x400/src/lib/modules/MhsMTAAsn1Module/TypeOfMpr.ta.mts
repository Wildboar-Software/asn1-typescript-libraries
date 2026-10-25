/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary TypeOfMpr
 * @description
 *
 * Defined in ITU-T X.411 (1999) (MTA managed objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfMpr  ::=  INTEGER {message(0), probe(1), report(2)}
 * ```
 */
export type TypeOfMpr = INTEGER;

/**
 * @summary TypeOfMpr_message
 * @constant
 * @type {number}
 */
export const TypeOfMpr_message = 0 satisfies TypeOfMpr; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMpr_message
 * @constant
 * @type {number}
 */
export const message = TypeOfMpr_message satisfies TypeOfMpr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMpr_probe
 * @constant
 * @type {number}
 */
export const TypeOfMpr_probe = 1 satisfies TypeOfMpr; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMpr_probe
 * @constant
 * @type {number}
 */
export const probe = TypeOfMpr_probe satisfies TypeOfMpr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMpr_report
 * @constant
 * @type {number}
 */
export const TypeOfMpr_report = 2 satisfies TypeOfMpr; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMpr_report
 * @constant
 * @type {number}
 */
export const report = TypeOfMpr_report satisfies TypeOfMpr; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TypeOfMpr = $._decodeInteger;


export const _encode_TypeOfMpr = $._encodeInteger;


/* eslint-enable */
