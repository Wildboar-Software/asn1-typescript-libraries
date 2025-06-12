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

/* START_OF_SYMBOL_DEFINITION _enum_for_ValidControlType */
/**
 * @summary ValidControlType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidControlType  ::=  ENUMERATED {momentaryOnly(0), continuousOnly(1), both(2)}
 * ```@enum {number}
 */
export enum _enum_for_ValidControlType {
    momentaryOnly = 0,
    continuousOnly = 1,
    both = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ValidControlType */

/* START_OF_SYMBOL_DEFINITION ValidControlType */
/**
 * @summary ValidControlType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidControlType  ::=  ENUMERATED {momentaryOnly(0), continuousOnly(1), both(2)}
 * ```@enum {number}
 */
export type ValidControlType = _enum_for_ValidControlType;
/* END_OF_SYMBOL_DEFINITION ValidControlType */

/* START_OF_SYMBOL_DEFINITION ValidControlType */
/**
 * @summary ValidControlType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidControlType  ::=  ENUMERATED {momentaryOnly(0), continuousOnly(1), both(2)}
 * ```@enum {number}
 */
export const ValidControlType = _enum_for_ValidControlType;
/* END_OF_SYMBOL_DEFINITION ValidControlType */

/* START_OF_SYMBOL_DEFINITION ValidControlType_momentaryOnly */
/**
 * @summary ValidControlType_momentaryOnly
 * @constant
 * @type {number}
 */
export const ValidControlType_momentaryOnly: ValidControlType =
    ValidControlType.momentaryOnly; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ValidControlType_momentaryOnly */

/* START_OF_SYMBOL_DEFINITION momentaryOnly */
/**
 * @summary momentaryOnly
 * @constant
 * @type {number}
 */
export const momentaryOnly: ValidControlType =
    ValidControlType.momentaryOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION momentaryOnly */

/* START_OF_SYMBOL_DEFINITION ValidControlType_continuousOnly */
/**
 * @summary ValidControlType_continuousOnly
 * @constant
 * @type {number}
 */
export const ValidControlType_continuousOnly: ValidControlType =
    ValidControlType.continuousOnly; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ValidControlType_continuousOnly */

/* START_OF_SYMBOL_DEFINITION continuousOnly */
/**
 * @summary continuousOnly
 * @constant
 * @type {number}
 */
export const continuousOnly: ValidControlType =
    ValidControlType.continuousOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION continuousOnly */

/* START_OF_SYMBOL_DEFINITION ValidControlType_both */
/**
 * @summary ValidControlType_both
 * @constant
 * @type {number}
 */
export const ValidControlType_both: ValidControlType =
    ValidControlType.both; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ValidControlType_both */

/* START_OF_SYMBOL_DEFINITION both */
/**
 * @summary both
 * @constant
 * @type {number}
 */
export const both: ValidControlType =
    ValidControlType.both; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION both */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidControlType */
let _cached_decoder_for_ValidControlType: $.ASN1Decoder<ValidControlType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidControlType */

/* START_OF_SYMBOL_DEFINITION _decode_ValidControlType */
/**
 * @summary Decodes an ASN.1 element into a(n) ValidControlType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValidControlType} The decoded data structure.
 */
export function _decode_ValidControlType(el: _Element) {
    if (!_cached_decoder_for_ValidControlType) {
        _cached_decoder_for_ValidControlType = $._decodeEnumerated;
    }
    return _cached_decoder_for_ValidControlType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ValidControlType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidControlType */
let _cached_encoder_for_ValidControlType: $.ASN1Encoder<ValidControlType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidControlType */

/* START_OF_SYMBOL_DEFINITION _encode_ValidControlType */
/**
 * @summary Encodes a(n) ValidControlType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidControlType, encoded as an ASN.1 Element.
 */
export function _encode_ValidControlType(
    value: ValidControlType,
    elGetter: $.ASN1Encoder<ValidControlType>
) {
    if (!_cached_encoder_for_ValidControlType) {
        _cached_encoder_for_ValidControlType = $._encodeEnumerated;
    }
    return _cached_encoder_for_ValidControlType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ValidControlType */

/* eslint-enable */
