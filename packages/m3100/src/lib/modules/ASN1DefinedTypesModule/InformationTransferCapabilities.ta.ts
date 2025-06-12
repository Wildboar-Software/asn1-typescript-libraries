/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_InformationTransferCapabilities */
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
/* END_OF_SYMBOL_DEFINITION _enum_for_InformationTransferCapabilities */

/* START_OF_SYMBOL_DEFINITION InformationTransferCapabilities */
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
/* END_OF_SYMBOL_DEFINITION InformationTransferCapabilities */

/* START_OF_SYMBOL_DEFINITION InformationTransferCapabilities */
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
/* END_OF_SYMBOL_DEFINITION InformationTransferCapabilities */

/* START_OF_SYMBOL_DEFINITION InformationTransferCapabilities_speech */
/**
 * @summary InformationTransferCapabilities_speech
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_speech: InformationTransferCapabilities =
    InformationTransferCapabilities.speech; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationTransferCapabilities_speech */

/* START_OF_SYMBOL_DEFINITION speech */
/**
 * @summary speech
 * @constant
 * @type {number}
 */
export const speech: InformationTransferCapabilities =
    InformationTransferCapabilities.speech; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION speech */

/* START_OF_SYMBOL_DEFINITION InformationTransferCapabilities_audio3pt1 */
/**
 * @summary InformationTransferCapabilities_audio3pt1
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_audio3pt1: InformationTransferCapabilities =
    InformationTransferCapabilities.audio3pt1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationTransferCapabilities_audio3pt1 */

/* START_OF_SYMBOL_DEFINITION audio3pt1 */
/**
 * @summary audio3pt1
 * @constant
 * @type {number}
 */
export const audio3pt1: InformationTransferCapabilities =
    InformationTransferCapabilities.audio3pt1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION audio3pt1 */

/* START_OF_SYMBOL_DEFINITION InformationTransferCapabilities_audio7 */
/**
 * @summary InformationTransferCapabilities_audio7
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_audio7: InformationTransferCapabilities =
    InformationTransferCapabilities.audio7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationTransferCapabilities_audio7 */

/* START_OF_SYMBOL_DEFINITION audio7 */
/**
 * @summary audio7
 * @constant
 * @type {number}
 */
export const audio7: InformationTransferCapabilities =
    InformationTransferCapabilities.audio7; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION audio7 */

/* START_OF_SYMBOL_DEFINITION InformationTransferCapabilities_audioComb */
/**
 * @summary InformationTransferCapabilities_audioComb
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_audioComb: InformationTransferCapabilities =
    InformationTransferCapabilities.audioComb; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationTransferCapabilities_audioComb */

/* START_OF_SYMBOL_DEFINITION audioComb */
/**
 * @summary audioComb
 * @constant
 * @type {number}
 */
export const audioComb: InformationTransferCapabilities =
    InformationTransferCapabilities.audioComb; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION audioComb */

/* START_OF_SYMBOL_DEFINITION InformationTransferCapabilities_digitalRestricted56 */
/**
 * @summary InformationTransferCapabilities_digitalRestricted56
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_digitalRestricted56: InformationTransferCapabilities =
    InformationTransferCapabilities.digitalRestricted56; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationTransferCapabilities_digitalRestricted56 */

/* START_OF_SYMBOL_DEFINITION digitalRestricted56 */
/**
 * @summary digitalRestricted56
 * @constant
 * @type {number}
 */
export const digitalRestricted56: InformationTransferCapabilities =
    InformationTransferCapabilities.digitalRestricted56; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION digitalRestricted56 */

/* START_OF_SYMBOL_DEFINITION InformationTransferCapabilities_digitalUnrestricted64 */
/**
 * @summary InformationTransferCapabilities_digitalUnrestricted64
 * @constant
 * @type {number}
 */
export const InformationTransferCapabilities_digitalUnrestricted64: InformationTransferCapabilities =
    InformationTransferCapabilities.digitalUnrestricted64; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationTransferCapabilities_digitalUnrestricted64 */

/* START_OF_SYMBOL_DEFINITION digitalUnrestricted64 */
/**
 * @summary digitalUnrestricted64
 * @constant
 * @type {number}
 */
export const digitalUnrestricted64: InformationTransferCapabilities =
    InformationTransferCapabilities.digitalUnrestricted64; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION digitalUnrestricted64 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationTransferCapabilities */
let _cached_decoder_for_InformationTransferCapabilities: $.ASN1Decoder<InformationTransferCapabilities> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationTransferCapabilities */

/* START_OF_SYMBOL_DEFINITION _decode_InformationTransferCapabilities */
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
/* END_OF_SYMBOL_DEFINITION _decode_InformationTransferCapabilities */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationTransferCapabilities */
let _cached_encoder_for_InformationTransferCapabilities: $.ASN1Encoder<InformationTransferCapabilities> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationTransferCapabilities */

/* START_OF_SYMBOL_DEFINITION _encode_InformationTransferCapabilities */
/**
 * @summary Encodes a(n) InformationTransferCapabilities into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_InformationTransferCapabilities */

/* eslint-enable */
