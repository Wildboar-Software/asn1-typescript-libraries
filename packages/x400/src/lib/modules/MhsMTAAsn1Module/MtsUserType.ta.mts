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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary MtsUserType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MtsUserType  ::=  INTEGER {ms(1), ua(2), au(3)}
 * ```
 */
export type MtsUserType = INTEGER;

/**
 * @summary MtsUserType_ms
 * @constant
 * @type {number}
 */
export const MtsUserType_ms: MtsUserType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MtsUserType_ms
 * @constant
 * @type {number}
 */
export const ms: MtsUserType = MtsUserType_ms; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MtsUserType_ua
 * @constant
 * @type {number}
 */
export const MtsUserType_ua: MtsUserType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MtsUserType_ua
 * @constant
 * @type {number}
 */
export const ua: MtsUserType = MtsUserType_ua; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MtsUserType_au
 * @constant
 * @type {number}
 */
export const MtsUserType_au: MtsUserType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MtsUserType_au
 * @constant
 * @type {number}
 */
export const au: MtsUserType = MtsUserType_au; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_MtsUserType = $._decodeInteger;


export const _encode_MtsUserType = $._encodeInteger;


/* eslint-enable */
