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
 * @summary VideotexSyntax
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideotexSyntax  ::=  INTEGER {
 *   ids(0), data-syntax1(1), data-syntax2(2), data-syntax3(3)}
 * ```
 */
export type VideotexSyntax = INTEGER;

/**
 * @summary VideotexSyntax_ids
 * @constant
 * @type {number}
 */
export const VideotexSyntax_ids = 0 satisfies VideotexSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_ids
 * @constant
 * @type {number}
 */
export const ids = VideotexSyntax_ids satisfies VideotexSyntax; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax1
 * @constant
 * @type {number}
 */
export const VideotexSyntax_data_syntax1 = 1 satisfies VideotexSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax1
 * @constant
 * @type {number}
 */
export const data_syntax1 = VideotexSyntax_data_syntax1 satisfies VideotexSyntax; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax2
 * @constant
 * @type {number}
 */
export const VideotexSyntax_data_syntax2 = 2 satisfies VideotexSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax2
 * @constant
 * @type {number}
 */
export const data_syntax2 = VideotexSyntax_data_syntax2 satisfies VideotexSyntax; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax3
 * @constant
 * @type {number}
 */
export const VideotexSyntax_data_syntax3 = 3 satisfies VideotexSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax3
 * @constant
 * @type {number}
 */
export const data_syntax3 = VideotexSyntax_data_syntax3 satisfies VideotexSyntax; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_VideotexSyntax = $._decodeInteger;


export const _encode_VideotexSyntax = $._encodeInteger;


/* eslint-enable */
