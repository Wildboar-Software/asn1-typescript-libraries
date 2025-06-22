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
 * @summary Completeness
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Completeness {
    completenessUnknown = 0,
    knownComplete = 1,
    knownNotComplete = 2,
}

/**
 * @summary Completeness
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```
 *
 * @enum {number}
 */
export type Completeness = _enum_for_Completeness;

/**
 * @summary Completeness
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```
 *
 * @enum {number}
 */
export const Completeness = _enum_for_Completeness;

/**
 * @summary Completeness_completenessUnknown
 * @constant
 * @type {number}
 */
export const Completeness_completenessUnknown: Completeness =
    Completeness.completenessUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary completenessUnknown
 * @constant
 * @type {number}
 */
export const completenessUnknown: Completeness =
    Completeness.completenessUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Completeness_knownComplete
 * @constant
 * @type {number}
 */
export const Completeness_knownComplete: Completeness =
    Completeness.knownComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary knownComplete
 * @constant
 * @type {number}
 */
export const knownComplete: Completeness =
    Completeness.knownComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Completeness_knownNotComplete
 * @constant
 * @type {number}
 */
export const Completeness_knownNotComplete: Completeness =
    Completeness.knownNotComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary knownNotComplete
 * @constant
 * @type {number}
 */
export const knownNotComplete: Completeness =
    Completeness.knownNotComplete; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Completeness = $._decodeEnumerated;


export const _encode_Completeness = $._encodeEnumerated;


/* eslint-enable */
