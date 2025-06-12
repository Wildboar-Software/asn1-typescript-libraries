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
    ManualHandlingInstruction,
    _decode_ManualHandlingInstruction,
    _encode_ManualHandlingInstruction,
} from '../IPMSHeadingExtensions/ManualHandlingInstruction.ta.js';
export {
    ManualHandlingInstruction,
    _decode_ManualHandlingInstruction,
    _encode_ManualHandlingInstruction,
} from '../IPMSHeadingExtensions/ManualHandlingInstruction.ta.js';

/* START_OF_SYMBOL_DEFINITION ManualHandlingInstructions */
/**
 * @summary ManualHandlingInstructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManualHandlingInstructions  ::=
 *   SEQUENCE (SIZE (1..ub-manual-handling-instructions)) OF
 *     ManualHandlingInstruction
 * ```
 */
export type ManualHandlingInstructions = ManualHandlingInstruction[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ManualHandlingInstructions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManualHandlingInstructions */
let _cached_decoder_for_ManualHandlingInstructions: $.ASN1Decoder<ManualHandlingInstructions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManualHandlingInstructions */

/* START_OF_SYMBOL_DEFINITION _decode_ManualHandlingInstructions */
/**
 * @summary Decodes an ASN.1 element into a(n) ManualHandlingInstructions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManualHandlingInstructions} The decoded data structure.
 */
export function _decode_ManualHandlingInstructions(el: _Element) {
    if (!_cached_decoder_for_ManualHandlingInstructions) {
        _cached_decoder_for_ManualHandlingInstructions = $._decodeSequenceOf<ManualHandlingInstruction>(
            () => _decode_ManualHandlingInstruction
        );
    }
    return _cached_decoder_for_ManualHandlingInstructions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManualHandlingInstructions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManualHandlingInstructions */
let _cached_encoder_for_ManualHandlingInstructions: $.ASN1Encoder<ManualHandlingInstructions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManualHandlingInstructions */

/* START_OF_SYMBOL_DEFINITION _encode_ManualHandlingInstructions */
/**
 * @summary Encodes a(n) ManualHandlingInstructions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManualHandlingInstructions, encoded as an ASN.1 Element.
 */
export function _encode_ManualHandlingInstructions(
    value: ManualHandlingInstructions,
    elGetter: $.ASN1Encoder<ManualHandlingInstructions>
) {
    if (!_cached_encoder_for_ManualHandlingInstructions) {
        _cached_encoder_for_ManualHandlingInstructions = $._encodeSequenceOf<ManualHandlingInstruction>(
            () => _encode_ManualHandlingInstruction,
            $.BER
        );
    }
    return _cached_encoder_for_ManualHandlingInstructions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManualHandlingInstructions */

/* eslint-enable */
