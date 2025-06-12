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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import {
    BodyPartReference_stored_body_part,
    _decode_BodyPartReference_stored_body_part,
    _encode_BodyPartReference_stored_body_part,
} from '../IPMSInformationObjects/BodyPartReference-stored-body-part.ta.mjs';
export {
    BodyPartReference_stored_body_part,
    _decode_BodyPartReference_stored_body_part,
    _encode_BodyPartReference_stored_body_part,
} from '../IPMSInformationObjects/BodyPartReference-stored-body-part.ta.mjs';

/* START_OF_SYMBOL_DEFINITION BodyPartReference */
/**
 * @summary BodyPartReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartReference  ::=  CHOICE {
 *   stored-entry         [0]  SequenceNumber,
 *   stored-content       [1]  SequenceNumber,
 *   submitted-body-part  [2]  INTEGER(1..MAX),
 *   stored-body-part
 *     [3]  SEQUENCE {message-entry     SequenceNumber,
 *                    body-part-number  INTEGER(1..MAX)}
 * }
 * ```
 */
export type BodyPartReference =
    | { stored_entry: SequenceNumber } /* CHOICE_ALT_ROOT */
    | { stored_content: SequenceNumber } /* CHOICE_ALT_ROOT */
    | { submitted_body_part: INTEGER } /* CHOICE_ALT_ROOT */
    | {
          stored_body_part: BodyPartReference_stored_body_part;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BodyPartReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartReference */
let _cached_decoder_for_BodyPartReference: $.ASN1Decoder<BodyPartReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartReference */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartReference */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartReference} The decoded data structure.
 */
export function _decode_BodyPartReference(el: _Element) {
    if (!_cached_decoder_for_BodyPartReference) {
        _cached_decoder_for_BodyPartReference = $._decode_inextensible_choice<BodyPartReference>(
            {
                'CONTEXT 0': [
                    'stored_entry',
                    $._decode_implicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    ),
                ],
                'CONTEXT 1': [
                    'stored_content',
                    $._decode_implicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    ),
                ],
                'CONTEXT 2': [
                    'submitted_body_part',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 3': [
                    'stored_body_part',
                    $._decode_implicit<BodyPartReference_stored_body_part>(
                        () => _decode_BodyPartReference_stored_body_part
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BodyPartReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartReference */
let _cached_encoder_for_BodyPartReference: $.ASN1Encoder<BodyPartReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartReference */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartReference */
/**
 * @summary Encodes a(n) BodyPartReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartReference, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartReference(
    value: BodyPartReference,
    elGetter: $.ASN1Encoder<BodyPartReference>
) {
    if (!_cached_encoder_for_BodyPartReference) {
        _cached_encoder_for_BodyPartReference = $._encode_choice<BodyPartReference>(
            {
                stored_entry: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SequenceNumber,
                    $.BER
                ),
                stored_content: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SequenceNumber,
                    $.BER
                ),
                submitted_body_part: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeInteger,
                    $.BER
                ),
                stored_body_part: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_BodyPartReference_stored_body_part,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartReference */

/* eslint-enable */
