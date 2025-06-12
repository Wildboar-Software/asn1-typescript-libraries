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
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.js';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.js';

/* START_OF_SYMBOL_DEFINITION ValidateReply */
/**
 * @summary ValidateReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidateReply  ::=  CHOICE {
 *   validationTerminated      [0]  NULL,
 *   passValidation            [1]  NULL,
 *   passValidationWithResult  [2]  SET OF ManagementExtension,
 *   failValidation            [3]  NULL,
 *   failValidationWithResult  [4]  SET OF ManagementExtension
 * }
 * ```
 */
export type ValidateReply =
    | { validationTerminated: NULL } /* CHOICE_ALT_ROOT */
    | { passValidation: NULL } /* CHOICE_ALT_ROOT */
    | { passValidationWithResult: ManagementExtension[] } /* CHOICE_ALT_ROOT */
    | { failValidation: NULL } /* CHOICE_ALT_ROOT */
    | { failValidationWithResult: ManagementExtension[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ValidateReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidateReply */
let _cached_decoder_for_ValidateReply: $.ASN1Decoder<ValidateReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidateReply */

/* START_OF_SYMBOL_DEFINITION _decode_ValidateReply */
/**
 * @summary Decodes an ASN.1 element into a(n) ValidateReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValidateReply} The decoded data structure.
 */
export function _decode_ValidateReply(el: _Element) {
    if (!_cached_decoder_for_ValidateReply) {
        _cached_decoder_for_ValidateReply = $._decode_inextensible_choice<ValidateReply>(
            {
                'CONTEXT 0': [
                    'validationTerminated',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'passValidation',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 2': [
                    'passValidationWithResult',
                    $._decode_implicit<ManagementExtension[]>(() =>
                        $._decodeSetOf<ManagementExtension>(
                            () => _decode_ManagementExtension
                        )
                    ),
                ],
                'CONTEXT 3': [
                    'failValidation',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 4': [
                    'failValidationWithResult',
                    $._decode_implicit<ManagementExtension[]>(() =>
                        $._decodeSetOf<ManagementExtension>(
                            () => _decode_ManagementExtension
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ValidateReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ValidateReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidateReply */
let _cached_encoder_for_ValidateReply: $.ASN1Encoder<ValidateReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidateReply */

/* START_OF_SYMBOL_DEFINITION _encode_ValidateReply */
/**
 * @summary Encodes a(n) ValidateReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidateReply, encoded as an ASN.1 Element.
 */
export function _encode_ValidateReply(
    value: ValidateReply,
    elGetter: $.ASN1Encoder<ValidateReply>
) {
    if (!_cached_encoder_for_ValidateReply) {
        _cached_encoder_for_ValidateReply = $._encode_choice<ValidateReply>(
            {
                validationTerminated: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                passValidation: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeNull,
                    $.BER
                ),
                passValidationWithResult: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<ManagementExtension>(
                            () => _encode_ManagementExtension,
                            $.BER
                        ),
                    $.BER
                ),
                failValidation: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => $._encodeNull,
                    $.BER
                ),
                failValidationWithResult: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () =>
                        $._encodeSetOf<ManagementExtension>(
                            () => _encode_ManagementExtension,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ValidateReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ValidateReply */

/* eslint-enable */
