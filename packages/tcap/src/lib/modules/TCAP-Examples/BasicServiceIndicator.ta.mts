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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary BasicServiceIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicServiceIndicator  ::=  ENUMERATED {speech(0), unrestrictedDigital(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_BasicServiceIndicator {
    speech = 0,
    unrestrictedDigital = 1,
}

/**
 * @summary BasicServiceIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicServiceIndicator  ::=  ENUMERATED {speech(0), unrestrictedDigital(1)}
 * ```
 *
 * @enum {number}
 */
export type BasicServiceIndicator = _enum_for_BasicServiceIndicator;

/**
 * @summary BasicServiceIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicServiceIndicator  ::=  ENUMERATED {speech(0), unrestrictedDigital(1)}
 * ```
 *
 * @enum {number}
 */
export const BasicServiceIndicator = _enum_for_BasicServiceIndicator;

/**
 * @summary BasicServiceIndicator_speech
 * @constant
 * @type {number}
 */
export const BasicServiceIndicator_speech: BasicServiceIndicator =
    BasicServiceIndicator.speech; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speech
 * @constant
 * @type {number}
 */
export const speech: BasicServiceIndicator =
    BasicServiceIndicator.speech; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicServiceIndicator_unrestrictedDigital
 * @constant
 * @type {number}
 */
export const BasicServiceIndicator_unrestrictedDigital: BasicServiceIndicator =
    BasicServiceIndicator.unrestrictedDigital; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestrictedDigital
 * @constant
 * @type {number}
 */
export const unrestrictedDigital: BasicServiceIndicator =
    BasicServiceIndicator.unrestrictedDigital; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_BasicServiceIndicator = $._decodeEnumerated;


export const _encode_BasicServiceIndicator = $._encodeEnumerated;


/* eslint-enable */
