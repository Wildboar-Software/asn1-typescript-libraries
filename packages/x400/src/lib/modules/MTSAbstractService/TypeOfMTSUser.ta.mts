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
 * @summary TypeOfMTSUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfMTSUser  ::=  INTEGER {
 *   public(0), private(1), ms(2), dl(3), pdau(4), physical-recipient(5), other(6)
 * }(0..ub-mts-user-types)
 * ```
 */
export type TypeOfMTSUser = INTEGER;

/**
 * @summary TypeOfMTSUser_public_
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_public_: TypeOfMTSUser = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_public_
 * @constant
 * @type {number}
 */
export const public_: TypeOfMTSUser = TypeOfMTSUser_public_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_private_
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_private_: TypeOfMTSUser = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_private_
 * @constant
 * @type {number}
 */
export const private_: TypeOfMTSUser = TypeOfMTSUser_private_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_ms
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_ms: TypeOfMTSUser = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_ms
 * @constant
 * @type {number}
 */
export const ms: TypeOfMTSUser = TypeOfMTSUser_ms; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_dl
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_dl: TypeOfMTSUser = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_dl
 * @constant
 * @type {number}
 */
export const dl: TypeOfMTSUser = TypeOfMTSUser_dl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_pdau
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_pdau: TypeOfMTSUser = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_pdau
 * @constant
 * @type {number}
 */
export const pdau: TypeOfMTSUser = TypeOfMTSUser_pdau; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_physical_recipient
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_physical_recipient: TypeOfMTSUser = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_physical_recipient
 * @constant
 * @type {number}
 */
export const physical_recipient: TypeOfMTSUser = TypeOfMTSUser_physical_recipient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_other
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_other: TypeOfMTSUser = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeOfMTSUser_other
 * @constant
 * @type {number}
 */
export const other: TypeOfMTSUser = TypeOfMTSUser_other; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TypeOfMTSUser = $._decodeInteger;


export const _encode_TypeOfMTSUser = $._encodeInteger;


/* eslint-enable */
