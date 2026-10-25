/* eslint-disable */
import {
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
export const BasicServiceIndicator: typeof _enum_for_BasicServiceIndicator = _enum_for_BasicServiceIndicator;

/**
 * @summary BasicServiceIndicator_speech
 * @constant
 * @type {number}
 */
export const BasicServiceIndicator_speech: _enum_for_BasicServiceIndicator.speech =
    BasicServiceIndicator.speech; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speech
 * @constant
 * @type {number}
 */
export const speech: _enum_for_BasicServiceIndicator.speech =
    BasicServiceIndicator.speech; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicServiceIndicator_unrestrictedDigital
 * @constant
 * @type {number}
 */
export const BasicServiceIndicator_unrestrictedDigital: _enum_for_BasicServiceIndicator.unrestrictedDigital =
    BasicServiceIndicator.unrestrictedDigital; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestrictedDigital
 * @constant
 * @type {number}
 */
export const unrestrictedDigital: _enum_for_BasicServiceIndicator.unrestrictedDigital =
    BasicServiceIndicator.unrestrictedDigital; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_BasicServiceIndicator: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_BasicServiceIndicator: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
