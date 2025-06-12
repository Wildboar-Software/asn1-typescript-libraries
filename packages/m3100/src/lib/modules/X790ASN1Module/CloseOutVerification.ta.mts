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

/* START_OF_SYMBOL_DEFINITION _enum_for_CloseOutVerification */
export enum _enum_for_CloseOutVerification {
    noAction = 0,
    verified = 1,
    denied = 2,
    deniedActivityDurationDisputed = 3,
    deniedCloseOutNarrDisputed = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CloseOutVerification */

/* START_OF_SYMBOL_DEFINITION CloseOutVerification */
/**
 * @summary CloseOutVerification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CloseOutVerification  ::=  ENUMERATED {
 *   noAction(0), verified(1), denied(2), deniedActivityDurationDisputed(3),
 *   deniedCloseOutNarrDisputed(4), ...
 *   }
 * ```@enum {number}
 */
export type CloseOutVerification = _enum_for_CloseOutVerification | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CloseOutVerification */

/* START_OF_SYMBOL_DEFINITION CloseOutVerification_noAction */
/**
 * @summary CloseOutVerification_noAction
 * @constant
 * @type {number}
 */
export const CloseOutVerification_noAction: CloseOutVerification = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CloseOutVerification_noAction */

/* START_OF_SYMBOL_DEFINITION noAction */
/**
 * @summary noAction
 * @constant
 * @type {number}
 */
export const noAction: CloseOutVerification = CloseOutVerification_noAction; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noAction */

/* START_OF_SYMBOL_DEFINITION CloseOutVerification_verified */
/**
 * @summary CloseOutVerification_verified
 * @constant
 * @type {number}
 */
export const CloseOutVerification_verified: CloseOutVerification = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CloseOutVerification_verified */

/* START_OF_SYMBOL_DEFINITION verified */
/**
 * @summary verified
 * @constant
 * @type {number}
 */
export const verified: CloseOutVerification = CloseOutVerification_verified; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION verified */

/* START_OF_SYMBOL_DEFINITION CloseOutVerification_denied */
/**
 * @summary CloseOutVerification_denied
 * @constant
 * @type {number}
 */
export const CloseOutVerification_denied: CloseOutVerification = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CloseOutVerification_denied */

/* START_OF_SYMBOL_DEFINITION denied */
/**
 * @summary denied
 * @constant
 * @type {number}
 */
export const denied: CloseOutVerification = CloseOutVerification_denied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION denied */

/* START_OF_SYMBOL_DEFINITION CloseOutVerification_deniedActivityDurationDisputed */
/**
 * @summary CloseOutVerification_deniedActivityDurationDisputed
 * @constant
 * @type {number}
 */
export const CloseOutVerification_deniedActivityDurationDisputed: CloseOutVerification = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CloseOutVerification_deniedActivityDurationDisputed */

/* START_OF_SYMBOL_DEFINITION deniedActivityDurationDisputed */
/**
 * @summary deniedActivityDurationDisputed
 * @constant
 * @type {number}
 */
export const deniedActivityDurationDisputed: CloseOutVerification = CloseOutVerification_deniedActivityDurationDisputed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION deniedActivityDurationDisputed */

/* START_OF_SYMBOL_DEFINITION CloseOutVerification_deniedCloseOutNarrDisputed */
/**
 * @summary CloseOutVerification_deniedCloseOutNarrDisputed
 * @constant
 * @type {number}
 */
export const CloseOutVerification_deniedCloseOutNarrDisputed: CloseOutVerification = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CloseOutVerification_deniedCloseOutNarrDisputed */

/* START_OF_SYMBOL_DEFINITION deniedCloseOutNarrDisputed */
/**
 * @summary deniedCloseOutNarrDisputed
 * @constant
 * @type {number}
 */
export const deniedCloseOutNarrDisputed: CloseOutVerification = CloseOutVerification_deniedCloseOutNarrDisputed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION deniedCloseOutNarrDisputed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CloseOutVerification */
let _cached_decoder_for_CloseOutVerification: $.ASN1Decoder<CloseOutVerification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CloseOutVerification */

/* START_OF_SYMBOL_DEFINITION _decode_CloseOutVerification */
/**
 * @summary Decodes an ASN.1 element into a(n) CloseOutVerification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CloseOutVerification} The decoded data structure.
 */
export function _decode_CloseOutVerification(el: _Element) {
    if (!_cached_decoder_for_CloseOutVerification) {
        _cached_decoder_for_CloseOutVerification = $._decodeEnumerated;
    }
    return _cached_decoder_for_CloseOutVerification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CloseOutVerification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CloseOutVerification */
let _cached_encoder_for_CloseOutVerification: $.ASN1Encoder<CloseOutVerification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CloseOutVerification */

/* START_OF_SYMBOL_DEFINITION _encode_CloseOutVerification */
/**
 * @summary Encodes a(n) CloseOutVerification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CloseOutVerification, encoded as an ASN.1 Element.
 */
export function _encode_CloseOutVerification(
    value: CloseOutVerification,
    elGetter: $.ASN1Encoder<CloseOutVerification>
) {
    if (!_cached_encoder_for_CloseOutVerification) {
        _cached_encoder_for_CloseOutVerification = $._encodeEnumerated;
    }
    return _cached_encoder_for_CloseOutVerification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CloseOutVerification */

/* eslint-enable */
