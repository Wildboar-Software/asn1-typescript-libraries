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
 * @summary AutoSubmitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSubmitted  ::=  ENUMERATED {
 *   not-auto-submitted(0), auto-generated(1), auto-replied(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AutoSubmitted {
    not_auto_submitted = 0,
    auto_generated = 1,
    auto_replied = 2,
}

/**
 * @summary AutoSubmitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSubmitted  ::=  ENUMERATED {
 *   not-auto-submitted(0), auto-generated(1), auto-replied(2)}
 * ```
 *
 * @enum {number}
 */
export type AutoSubmitted = _enum_for_AutoSubmitted;

/**
 * @summary AutoSubmitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSubmitted  ::=  ENUMERATED {
 *   not-auto-submitted(0), auto-generated(1), auto-replied(2)}
 * ```
 *
 * @enum {number}
 */
export const AutoSubmitted = _enum_for_AutoSubmitted;

/**
 * @summary AutoSubmitted_not_auto_submitted
 * @constant
 * @type {number}
 */
export const AutoSubmitted_not_auto_submitted: AutoSubmitted =
    AutoSubmitted.not_auto_submitted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_auto_submitted
 * @constant
 * @type {number}
 */
export const not_auto_submitted: AutoSubmitted =
    AutoSubmitted.not_auto_submitted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AutoSubmitted_auto_generated
 * @constant
 * @type {number}
 */
export const AutoSubmitted_auto_generated: AutoSubmitted =
    AutoSubmitted.auto_generated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto_generated
 * @constant
 * @type {number}
 */
export const auto_generated: AutoSubmitted =
    AutoSubmitted.auto_generated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AutoSubmitted_auto_replied
 * @constant
 * @type {number}
 */
export const AutoSubmitted_auto_replied: AutoSubmitted =
    AutoSubmitted.auto_replied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto_replied
 * @constant
 * @type {number}
 */
export const auto_replied: AutoSubmitted =
    AutoSubmitted.auto_replied; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AutoSubmitted = $._decodeEnumerated;


export const _encode_AutoSubmitted = $._encodeEnumerated;


/* eslint-enable */
