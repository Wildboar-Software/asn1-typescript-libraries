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
 * @summary MtsUserType
 * @description
 *
 * Defined in ITU-T X.411 (1999) (MTA managed objects).
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
export const MtsUserType_ms: 1 = 1 satisfies MtsUserType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MtsUserType_ms
 * @constant
 * @type {number}
 */
export const ms: 1 = MtsUserType_ms; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MtsUserType_ua
 * @constant
 * @type {number}
 */
export const MtsUserType_ua: 2 = 2 satisfies MtsUserType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MtsUserType_ua
 * @constant
 * @type {number}
 */
export const ua: 2 = MtsUserType_ua; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MtsUserType_au
 * @constant
 * @type {number}
 */
export const MtsUserType_au: 3 = 3 satisfies MtsUserType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MtsUserType_au
 * @constant
 * @type {number}
 */
export const au: 3 = MtsUserType_au; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_MtsUserType: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_MtsUserType: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
