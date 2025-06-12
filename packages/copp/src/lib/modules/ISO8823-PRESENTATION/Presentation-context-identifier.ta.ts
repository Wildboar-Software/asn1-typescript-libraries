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

/* START_OF_SYMBOL_DEFINITION Presentation_context_identifier */
/**
 * @summary Presentation_context_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier  ::=  INTEGER(1..127, ..., 128..MAX)
 * ```
 */
export type Presentation_context_identifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_identifier */
let _cached_decoder_for_Presentation_context_identifier: $.ASN1Decoder<Presentation_context_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Presentation_context_identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_identifier} The decoded data structure.
 */
export function _decode_Presentation_context_identifier(el: _Element) {
    if (!_cached_decoder_for_Presentation_context_identifier) {
        _cached_decoder_for_Presentation_context_identifier = $._decodeInteger;
    }
    return _cached_decoder_for_Presentation_context_identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_identifier */
let _cached_encoder_for_Presentation_context_identifier: $.ASN1Encoder<Presentation_context_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Presentation_context_identifier */
/**
 * @summary Encodes a(n) Presentation_context_identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_identifier, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_identifier(
    value: Presentation_context_identifier,
    elGetter: $.ASN1Encoder<Presentation_context_identifier>
) {
    if (!_cached_encoder_for_Presentation_context_identifier) {
        _cached_encoder_for_Presentation_context_identifier = $._encodeInteger;
    }
    return _cached_encoder_for_Presentation_context_identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Presentation_context_identifier */

/* eslint-enable */
