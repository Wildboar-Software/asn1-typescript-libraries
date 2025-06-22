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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary VideotexSyntax
 * @description
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
export const VideotexSyntax_ids: VideotexSyntax = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_ids
 * @constant
 * @type {number}
 */
export const ids: VideotexSyntax = VideotexSyntax_ids; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax1
 * @constant
 * @type {number}
 */
export const VideotexSyntax_data_syntax1: VideotexSyntax = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax1
 * @constant
 * @type {number}
 */
export const data_syntax1: VideotexSyntax = VideotexSyntax_data_syntax1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax2
 * @constant
 * @type {number}
 */
export const VideotexSyntax_data_syntax2: VideotexSyntax = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax2
 * @constant
 * @type {number}
 */
export const data_syntax2: VideotexSyntax = VideotexSyntax_data_syntax2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax3
 * @constant
 * @type {number}
 */
export const VideotexSyntax_data_syntax3: VideotexSyntax = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VideotexSyntax_data_syntax3
 * @constant
 * @type {number}
 */
export const data_syntax3: VideotexSyntax = VideotexSyntax_data_syntax3; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_VideotexSyntax = $._decodeInteger;


export const _encode_VideotexSyntax = $._encodeInteger;


/* eslint-enable */
