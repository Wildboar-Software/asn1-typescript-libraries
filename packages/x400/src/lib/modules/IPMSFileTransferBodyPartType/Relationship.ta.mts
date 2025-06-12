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
    ExplicitRelationship,
    ExplicitRelationship_unspecified /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecified /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitRelationship_new_file /* IMPORTED_LONG_NAMED_INTEGER */,
    new_file /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitRelationship_replacement /* IMPORTED_LONG_NAMED_INTEGER */,
    replacement /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitRelationship_extension /* IMPORTED_LONG_NAMED_INTEGER */,
    extension /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ExplicitRelationship,
    _encode_ExplicitRelationship,
} from '../IPMSFileTransferBodyPartType/ExplicitRelationship.ta.mjs';
export {
    ExplicitRelationship,
    ExplicitRelationship_unspecified /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecified /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitRelationship_new_file /* IMPORTED_LONG_NAMED_INTEGER */,
    new_file /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitRelationship_replacement /* IMPORTED_LONG_NAMED_INTEGER */,
    replacement /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitRelationship_extension /* IMPORTED_LONG_NAMED_INTEGER */,
    extension /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ExplicitRelationship,
    _encode_ExplicitRelationship,
} from '../IPMSFileTransferBodyPartType/ExplicitRelationship.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Relationship */
/**
 * @summary Relationship
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Relationship  ::=  CHOICE {
 *   explicit-relationship     [0]  ExplicitRelationship,
 *   descriptive-relationship  [1]  GraphicString
 * }
 * ```
 */
export type Relationship =
    | { explicit_relationship: ExplicitRelationship } /* CHOICE_ALT_ROOT */
    | { descriptive_relationship: GraphicString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Relationship */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Relationship */
let _cached_decoder_for_Relationship: $.ASN1Decoder<Relationship> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Relationship */

/* START_OF_SYMBOL_DEFINITION _decode_Relationship */
/**
 * @summary Decodes an ASN.1 element into a(n) Relationship
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Relationship} The decoded data structure.
 */
export function _decode_Relationship(el: _Element) {
    if (!_cached_decoder_for_Relationship) {
        _cached_decoder_for_Relationship = $._decode_inextensible_choice<Relationship>(
            {
                'CONTEXT 0': [
                    'explicit_relationship',
                    $._decode_implicit<ExplicitRelationship>(
                        () => _decode_ExplicitRelationship
                    ),
                ],
                'CONTEXT 1': [
                    'descriptive_relationship',
                    $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Relationship(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Relationship */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Relationship */
let _cached_encoder_for_Relationship: $.ASN1Encoder<Relationship> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Relationship */

/* START_OF_SYMBOL_DEFINITION _encode_Relationship */
/**
 * @summary Encodes a(n) Relationship into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Relationship, encoded as an ASN.1 Element.
 */
export function _encode_Relationship(
    value: Relationship,
    elGetter: $.ASN1Encoder<Relationship>
) {
    if (!_cached_encoder_for_Relationship) {
        _cached_encoder_for_Relationship = $._encode_choice<Relationship>(
            {
                explicit_relationship: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExplicitRelationship,
                    $.BER
                ),
                descriptive_relationship: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeGraphicString,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Relationship(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Relationship */

/* eslint-enable */
