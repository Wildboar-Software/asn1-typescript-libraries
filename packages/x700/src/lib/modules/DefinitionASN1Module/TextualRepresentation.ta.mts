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
import {
    LineImage,
    _decode_LineImage,
    _encode_LineImage,
} from '../DefinitionASN1Module/LineImage.ta.mjs';
export {
    LineImage,
    _decode_LineImage,
    _encode_LineImage,
} from '../DefinitionASN1Module/LineImage.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TextualRepresentation */
/**
 * @summary TextualRepresentation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TextualRepresentation  ::=  SEQUENCE OF LineImage
 * ```
 */
export type TextualRepresentation = LineImage[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TextualRepresentation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TextualRepresentation */
let _cached_decoder_for_TextualRepresentation: $.ASN1Decoder<TextualRepresentation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TextualRepresentation */

/* START_OF_SYMBOL_DEFINITION _decode_TextualRepresentation */
/**
 * @summary Decodes an ASN.1 element into a(n) TextualRepresentation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TextualRepresentation} The decoded data structure.
 */
export function _decode_TextualRepresentation(el: _Element) {
    if (!_cached_decoder_for_TextualRepresentation) {
        _cached_decoder_for_TextualRepresentation = $._decodeSequenceOf<LineImage>(
            () => _decode_LineImage
        );
    }
    return _cached_decoder_for_TextualRepresentation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TextualRepresentation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TextualRepresentation */
let _cached_encoder_for_TextualRepresentation: $.ASN1Encoder<TextualRepresentation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TextualRepresentation */

/* START_OF_SYMBOL_DEFINITION _encode_TextualRepresentation */
/**
 * @summary Encodes a(n) TextualRepresentation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TextualRepresentation, encoded as an ASN.1 Element.
 */
export function _encode_TextualRepresentation(
    value: TextualRepresentation,
    elGetter: $.ASN1Encoder<TextualRepresentation>
) {
    if (!_cached_encoder_for_TextualRepresentation) {
        _cached_encoder_for_TextualRepresentation = $._encodeSequenceOf<LineImage>(
            () => _encode_LineImage,
            $.BER
        );
    }
    return _cached_encoder_for_TextualRepresentation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TextualRepresentation */

/* eslint-enable */
