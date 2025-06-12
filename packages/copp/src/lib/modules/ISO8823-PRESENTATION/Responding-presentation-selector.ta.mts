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
    Presentation_selector,
    _decode_Presentation_selector,
    _encode_Presentation_selector,
} from '../ISO8823-PRESENTATION/Presentation-selector.ta.mjs';
export {
    Presentation_selector,
    _decode_Presentation_selector,
    _encode_Presentation_selector,
} from '../ISO8823-PRESENTATION/Presentation-selector.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Responding_presentation_selector */
/**
 * @summary Responding_presentation_selector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Responding-presentation-selector  ::=  Presentation-selector
 * ```
 */
export type Responding_presentation_selector = Presentation_selector; // DefinedType
/* END_OF_SYMBOL_DEFINITION Responding_presentation_selector */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Responding_presentation_selector */
let _cached_decoder_for_Responding_presentation_selector: $.ASN1Decoder<Responding_presentation_selector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Responding_presentation_selector */

/* START_OF_SYMBOL_DEFINITION _decode_Responding_presentation_selector */
/**
 * @summary Decodes an ASN.1 element into a(n) Responding_presentation_selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Responding_presentation_selector} The decoded data structure.
 */
export function _decode_Responding_presentation_selector(el: _Element) {
    if (!_cached_decoder_for_Responding_presentation_selector) {
        _cached_decoder_for_Responding_presentation_selector = _decode_Presentation_selector;
    }
    return _cached_decoder_for_Responding_presentation_selector(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Responding_presentation_selector */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Responding_presentation_selector */
let _cached_encoder_for_Responding_presentation_selector: $.ASN1Encoder<Responding_presentation_selector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Responding_presentation_selector */

/* START_OF_SYMBOL_DEFINITION _encode_Responding_presentation_selector */
/**
 * @summary Encodes a(n) Responding_presentation_selector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Responding_presentation_selector, encoded as an ASN.1 Element.
 */
export function _encode_Responding_presentation_selector(
    value: Responding_presentation_selector,
    elGetter: $.ASN1Encoder<Responding_presentation_selector>
) {
    if (!_cached_encoder_for_Responding_presentation_selector) {
        _cached_encoder_for_Responding_presentation_selector = _encode_Presentation_selector;
    }
    return _cached_encoder_for_Responding_presentation_selector(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Responding_presentation_selector */

/* eslint-enable */
