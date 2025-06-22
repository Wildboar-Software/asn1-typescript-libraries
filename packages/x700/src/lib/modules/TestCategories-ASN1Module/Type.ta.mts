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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type  ::=  INTEGER {connectionOriented(0), connectionless(1)}
 * ```
 */
export type Type = INTEGER;

/**
 * @summary Type_connectionOriented
 * @constant
 * @type {number}
 */
export const Type_connectionOriented: Type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Type_connectionOriented
 * @constant
 * @type {number}
 */
export const connectionOriented: Type = Type_connectionOriented; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Type_connectionless
 * @constant
 * @type {number}
 */
export const Type_connectionless: Type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Type_connectionless
 * @constant
 * @type {number}
 */
export const connectionless: Type = Type_connectionless; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Type = $._decodeInteger;


export const _encode_Type = $._encodeInteger;


/* eslint-enable */
