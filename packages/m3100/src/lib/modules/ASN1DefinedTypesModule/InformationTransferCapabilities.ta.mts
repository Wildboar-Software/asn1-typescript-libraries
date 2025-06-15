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
 * @summary InformationTransferCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationTransferCapabilities  ::=  ENUMERATED {
 *   speech(0), audio3pt1(1), audio7(2), audioComb(3), digitalRestricted56(4),
 *   digitalUnrestricted64(5)
 *
 * -- "..." these ellipses defined in ASN.1 amendment are used here to indicate that this is
 * -- an  extensible type and additional enumerations may be added in future --}
 * ```@enum {number}
 */
export enum _enum_for_InformationTransferCapabilities {
    speech = 0,
    audio3pt1 = 1,
    audio7 = 2,
    audioComb = 3,
    digitalRestricted56 = 4,
    digitalUnrestricted64 = 5,
}


/**
 * @summary InformationTransferCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationTransferCapabilities  ::=  ENUMERATED {
 *   speech(0), audio3pt1(1), audio7(2), audioComb(3), digitalRestricted56(4),
 *   digitalUnrestricted64(5)
 *
 * -- "..." these ellipses defined in ASN.1 amendment are used here to indicate that this is
 * -- an  extensible type and additional enumerations may be added in future --}
 * ```@enum {number}
 */
export type InformationTransferCapabilities = _enum_for_InformationTransferCapabilities;


/**
 * @summary InformationTransferCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationTransferCapabilities  ::=  ENUMERATED {
 *   speech(0), audio3pt1(1), audio7(2), audioComb(3), digitalRestricted56(4),
 *   digitalUnrestricted64(5)
 *
 * -- "..." these ellipses defined in ASN.1 amendment are used here to indicate that this is
 * -- an  extensible type and additional enumerations may be added in future --}
 * ```@enum {number}
 */
export const InformationTransferCapabilities = _enum_for_InformationTransferCapabilities;


/**
 * @summary InformationTransferCapabilities_speech
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_speech: InformationTransferCapabilities =
    InformationTransferCapabilities.speech; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary speech
 * @constant
 * @type {number}
 */
export const speech: InformationTransferCapabilities =
    InformationTransferCapabilities.speech; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InformationTransferCapabilities_audio3pt1
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_audio3pt1: InformationTransferCapabilities =
    InformationTransferCapabilities.audio3pt1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary audio3pt1
 * @constant
 * @type {number}
 */
export const audio3pt1: InformationTransferCapabilities =
    InformationTransferCapabilities.audio3pt1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InformationTransferCapabilities_audio7
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_audio7: InformationTransferCapabilities =
    InformationTransferCapabilities.audio7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary audio7
 * @constant
 * @type {number}
 */
export const audio7: InformationTransferCapabilities =
    InformationTransferCapabilities.audio7; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InformationTransferCapabilities_audioComb
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_audioComb: InformationTransferCapabilities =
    InformationTransferCapabilities.audioComb; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary audioComb
 * @constant
 * @type {number}
 */
export const audioComb: InformationTransferCapabilities =
    InformationTransferCapabilities.audioComb; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InformationTransferCapabilities_digitalRestricted56
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_digitalRestricted56: InformationTransferCapabilities =
    InformationTransferCapabilities.digitalRestricted56; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary digitalRestricted56
 * @constant
 * @type {number}
 */
export const digitalRestricted56: InformationTransferCapabilities =
    InformationTransferCapabilities.digitalRestricted56; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InformationTransferCapabilities_digitalUnrestricted64
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_digitalUnrestricted64: InformationTransferCapabilities =
    InformationTransferCapabilities.digitalUnrestricted64; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary digitalUnrestricted64
 * @constant
 * @type {number}
 */
export const digitalUnrestricted64: InformationTransferCapabilities =
    InformationTransferCapabilities.digitalUnrestricted64; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_InformationTransferCapabilities: $.ASN1Decoder<InformationTransferCapabilities> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) InformationTransferCapabilities
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationTransferCapabilities} The decoded data structure.
 */
export function _decode_InformationTransferCapabilities(el: _Element) {
    if (!_cached_decoder_for_InformationTransferCapabilities) {
        _cached_decoder_for_InformationTransferCapabilities =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_InformationTransferCapabilities(el);
}


let _cached_encoder_for_InformationTransferCapabilities: $.ASN1Encoder<InformationTransferCapabilities> | null = null;


/**
 * @summary Encodes a(n) InformationTransferCapabilities into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationTransferCapabilities, encoded as an ASN.1 Element.
 */
export function _encode_InformationTransferCapabilities(
    value: InformationTransferCapabilities,
    elGetter: $.ASN1Encoder<InformationTransferCapabilities>
) {
    if (!_cached_encoder_for_InformationTransferCapabilities) {
        _cached_encoder_for_InformationTransferCapabilities =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_InformationTransferCapabilities(value, elGetter);
}


/* eslint-enable */
