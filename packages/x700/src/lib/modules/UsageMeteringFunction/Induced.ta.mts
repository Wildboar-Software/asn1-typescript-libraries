/* eslint-disable */
import {
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
 * @summary Induced
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Induced  ::=  ENUMERATED {
 *   start(0), suspend(1), resume(2), delete(3), disabled(4), enabled(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_Induced {
    start = 0,
    suspend = 1,
    resume = 2,
    delete_ = 3,
    disabled = 4,
    enabled = 5,
}

/**
 * @summary Induced
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Induced  ::=  ENUMERATED {
 *   start(0), suspend(1), resume(2), delete(3), disabled(4), enabled(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export type Induced = _enum_for_Induced;

/**
 * @summary Induced
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Induced  ::=  ENUMERATED {
 *   start(0), suspend(1), resume(2), delete(3), disabled(4), enabled(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export const Induced = _enum_for_Induced;

/**
 * @summary Induced_start
 * @constant
 * @type {number}
 */
export const Induced_start: Induced =
    Induced.start; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary start
 * @constant
 * @type {number}
 */
export const start: Induced = Induced.start; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Induced_suspend
 * @constant
 * @type {number}
 */
export const Induced_suspend: Induced =
    Induced.suspend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspend
 * @constant
 * @type {number}
 */
export const suspend: Induced =
    Induced.suspend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Induced_resume
 * @constant
 * @type {number}
 */
export const Induced_resume: Induced =
    Induced.resume; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resume
 * @constant
 * @type {number}
 */
export const resume: Induced =
    Induced.resume; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Induced_delete_
 * @constant
 * @type {number}
 */
export const Induced_delete_: Induced =
    Induced.delete_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export const delete_: Induced =
    Induced.delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Induced_disabled
 * @constant
 * @type {number}
 */
export const Induced_disabled: Induced =
    Induced.disabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disabled
 * @constant
 * @type {number}
 */
export const disabled: Induced =
    Induced.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Induced_enabled
 * @constant
 * @type {number}
 */
export const Induced_enabled: Induced =
    Induced.enabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enabled
 * @constant
 * @type {number}
 */
export const enabled: Induced =
    Induced.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Induced = $._decodeEnumerated;


export const _encode_Induced = $._encodeEnumerated;


/* eslint-enable */
