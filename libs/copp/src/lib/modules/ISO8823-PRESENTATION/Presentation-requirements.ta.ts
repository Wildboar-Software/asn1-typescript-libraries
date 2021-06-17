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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION Presentation_requirements */
/**
 * @summary Presentation_requirements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-requirements  ::=  BIT STRING {context-management(0), restoration(1)
 * }
 * ```
 */
export type Presentation_requirements = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Presentation_requirements */

/* START_OF_SYMBOL_DEFINITION Presentation_requirements_context_management */
/**
 * @summary Presentation_requirements_context_management
 * @constant
 */
export const Presentation_requirements_context_management: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Presentation_requirements_context_management */

/* START_OF_SYMBOL_DEFINITION context_management */
/**
 * @summary context_management
 * @constant
 */
export const context_management: number = Presentation_requirements_context_management; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION context_management */

/* START_OF_SYMBOL_DEFINITION Presentation_requirements_restoration */
/**
 * @summary Presentation_requirements_restoration
 * @constant
 */
export const Presentation_requirements_restoration: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Presentation_requirements_restoration */

/* START_OF_SYMBOL_DEFINITION restoration */
/**
 * @summary restoration
 * @constant
 */
export const restoration: number = Presentation_requirements_restoration; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION restoration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_requirements */
let _cached_decoder_for_Presentation_requirements: $.ASN1Decoder<Presentation_requirements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_requirements */

/* START_OF_SYMBOL_DEFINITION _decode_Presentation_requirements */
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_requirements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_requirements} The decoded data structure.
 */
export function _decode_Presentation_requirements(el: _Element) {
    if (!_cached_decoder_for_Presentation_requirements) {
        _cached_decoder_for_Presentation_requirements = $._decodeBitString;
    }
    return _cached_decoder_for_Presentation_requirements(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Presentation_requirements */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_requirements */
let _cached_encoder_for_Presentation_requirements: $.ASN1Encoder<Presentation_requirements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_requirements */

/* START_OF_SYMBOL_DEFINITION _encode_Presentation_requirements */
/**
 * @summary Encodes a(n) Presentation_requirements into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_requirements, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_requirements(
    value: Presentation_requirements,
    elGetter: $.ASN1Encoder<Presentation_requirements>
) {
    if (!_cached_encoder_for_Presentation_requirements) {
        _cached_encoder_for_Presentation_requirements = $._encodeBitString;
    }
    return _cached_encoder_for_Presentation_requirements(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Presentation_requirements */

/* eslint-enable */
