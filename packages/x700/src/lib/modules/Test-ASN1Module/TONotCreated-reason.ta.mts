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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary TONotCreated_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_TONotCreated_reason {
    invalidTOclass = 0,
    duplicateTOInstance = 1,
    invalidMORTClass = 2,
    invalidAssociatedObjectClass = 3,
    mORTNotAvailable = 4,
    associatedObjectNotAvailable = 5,
}

/**
 * @summary TONotCreated_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type TONotCreated_reason = _enum_for_TONotCreated_reason;

/**
 * @summary TONotCreated_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const TONotCreated_reason = _enum_for_TONotCreated_reason;

/**
 * @summary TONotCreated_reason_invalidTOclass
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_invalidTOclass: TONotCreated_reason =
    TONotCreated_reason.invalidTOclass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidTOclass
 * @constant
 * @type {number}
 */
export const invalidTOclass: TONotCreated_reason =
    TONotCreated_reason.invalidTOclass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TONotCreated_reason_duplicateTOInstance
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_duplicateTOInstance: TONotCreated_reason =
    TONotCreated_reason.duplicateTOInstance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateTOInstance
 * @constant
 * @type {number}
 */
export const duplicateTOInstance: TONotCreated_reason =
    TONotCreated_reason.duplicateTOInstance; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TONotCreated_reason_invalidMORTClass
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_invalidMORTClass: TONotCreated_reason =
    TONotCreated_reason.invalidMORTClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMORTClass
 * @constant
 * @type {number}
 */
export const invalidMORTClass: TONotCreated_reason =
    TONotCreated_reason.invalidMORTClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TONotCreated_reason_invalidAssociatedObjectClass
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_invalidAssociatedObjectClass: TONotCreated_reason =
    TONotCreated_reason.invalidAssociatedObjectClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAssociatedObjectClass
 * @constant
 * @type {number}
 */
export const invalidAssociatedObjectClass: TONotCreated_reason =
    TONotCreated_reason.invalidAssociatedObjectClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TONotCreated_reason_mORTNotAvailable
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_mORTNotAvailable: TONotCreated_reason =
    TONotCreated_reason.mORTNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mORTNotAvailable
 * @constant
 * @type {number}
 */
export const mORTNotAvailable: TONotCreated_reason =
    TONotCreated_reason.mORTNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TONotCreated_reason_associatedObjectNotAvailable
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_associatedObjectNotAvailable: TONotCreated_reason =
    TONotCreated_reason.associatedObjectNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary associatedObjectNotAvailable
 * @constant
 * @type {number}
 */
export const associatedObjectNotAvailable: TONotCreated_reason =
    TONotCreated_reason.associatedObjectNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TONotCreated_reason = $._decodeEnumerated;


export const _encode_TONotCreated_reason = $._encodeEnumerated;


/* eslint-enable */
