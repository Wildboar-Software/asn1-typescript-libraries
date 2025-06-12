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
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.js';
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.js';

/* START_OF_SYMBOL_DEFINITION Representation */
/**
 * @summary Representation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Representation  ::=  CHOICE {
 *   nameBindingSuperior        [0]  TemplateLabel,
 *   nameBindingSubordinate     [1]  TemplateLabel,
 *   attribute                  [2]  TemplateLabel,
 *   relationshipObjectPointer  [3]  TemplateLabel,
 *   operation                  NULL
 * }
 * ```
 */
export type Representation =
    | { nameBindingSuperior: TemplateLabel } /* CHOICE_ALT_ROOT */
    | { nameBindingSubordinate: TemplateLabel } /* CHOICE_ALT_ROOT */
    | { attribute: TemplateLabel } /* CHOICE_ALT_ROOT */
    | { relationshipObjectPointer: TemplateLabel } /* CHOICE_ALT_ROOT */
    | { operation: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Representation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Representation */
let _cached_decoder_for_Representation: $.ASN1Decoder<Representation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Representation */

/* START_OF_SYMBOL_DEFINITION _decode_Representation */
/**
 * @summary Decodes an ASN.1 element into a(n) Representation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Representation} The decoded data structure.
 */
export function _decode_Representation(el: _Element) {
    if (!_cached_decoder_for_Representation) {
        _cached_decoder_for_Representation = $._decode_inextensible_choice<Representation>(
            {
                'CONTEXT 0': [
                    'nameBindingSuperior',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
                'CONTEXT 1': [
                    'nameBindingSubordinate',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
                'CONTEXT 2': [
                    'attribute',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
                'CONTEXT 3': [
                    'relationshipObjectPointer',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
                'UNIVERSAL 5': ['operation', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_Representation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Representation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Representation */
let _cached_encoder_for_Representation: $.ASN1Encoder<Representation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Representation */

/* START_OF_SYMBOL_DEFINITION _encode_Representation */
/**
 * @summary Encodes a(n) Representation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Representation, encoded as an ASN.1 Element.
 */
export function _encode_Representation(
    value: Representation,
    elGetter: $.ASN1Encoder<Representation>
) {
    if (!_cached_encoder_for_Representation) {
        _cached_encoder_for_Representation = $._encode_choice<Representation>(
            {
                nameBindingSuperior: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
                nameBindingSubordinate: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
                attribute: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
                relationshipObjectPointer: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
                operation: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Representation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Representation */

/* eslint-enable */
