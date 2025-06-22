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
 * @summary Encipherment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Encipherment  ::=  INTEGER {encrypted(1), clear(2)}
 * ```
 */
export type Encipherment = INTEGER;

/**
 * @summary Encipherment_encrypted
 * @constant
 * @type {number}
 */
export const Encipherment_encrypted: Encipherment = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Encipherment_encrypted
 * @constant
 * @type {number}
 */
export const encrypted: Encipherment = Encipherment_encrypted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Encipherment_clear
 * @constant
 * @type {number}
 */
export const Encipherment_clear: Encipherment = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Encipherment_clear
 * @constant
 * @type {number}
 */
export const clear: Encipherment = Encipherment_clear; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Encipherment = $._decodeInteger;


export const _encode_Encipherment = $._encodeInteger;


/* eslint-enable */
