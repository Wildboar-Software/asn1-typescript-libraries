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
    LabelAndParameters,
    _decode_LabelAndParameters,
    _encode_LabelAndParameters,
} from '../GrmAttributeDefinitionModule/LabelAndParameters.ta.mjs';
export {
    LabelAndParameters,
    _decode_LabelAndParameters,
    _encode_LabelAndParameters,
} from '../GrmAttributeDefinitionModule/LabelAndParameters.ta.mjs';
import {
    OptionalLabelAndParameters,
    _decode_OptionalLabelAndParameters,
    _encode_OptionalLabelAndParameters,
} from '../GrmAttributeDefinitionModule/OptionalLabelAndParameters.ta.mjs';
export {
    OptionalLabelAndParameters,
    _decode_OptionalLabelAndParameters,
    _encode_OptionalLabelAndParameters,
} from '../GrmAttributeDefinitionModule/OptionalLabelAndParameters.ta.mjs';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
export {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SystemsMgtOperation */
/**
 * @summary SystemsMgtOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemsMgtOperation  ::=  CHOICE {
 *   get           [0]  LabelAndParameters,
 *   replace       [1]  LabelAndParameters,
 *   add           [2]  LabelAndParameters,
 *   remove        [3]  LabelAndParameters,
 *   create        [4]  OptionalLabelAndParameters,
 *   delete        [5]  TemplateList,
 *   action        [6]  LabelAndParameters,
 *   notification  [7]  LabelAndParameters
 * }
 * ```
 */
export type SystemsMgtOperation =
    | { get_: LabelAndParameters } /* CHOICE_ALT_ROOT */
    | { replace: LabelAndParameters } /* CHOICE_ALT_ROOT */
    | { add: LabelAndParameters } /* CHOICE_ALT_ROOT */
    | { remove: LabelAndParameters } /* CHOICE_ALT_ROOT */
    | { create: OptionalLabelAndParameters } /* CHOICE_ALT_ROOT */
    | { delete_: TemplateList } /* CHOICE_ALT_ROOT */
    | { action: LabelAndParameters } /* CHOICE_ALT_ROOT */
    | { notification: LabelAndParameters } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SystemsMgtOperation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemsMgtOperation */
let _cached_decoder_for_SystemsMgtOperation: $.ASN1Decoder<SystemsMgtOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemsMgtOperation */

/* START_OF_SYMBOL_DEFINITION _decode_SystemsMgtOperation */
/**
 * @summary Decodes an ASN.1 element into a(n) SystemsMgtOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SystemsMgtOperation} The decoded data structure.
 */
export function _decode_SystemsMgtOperation(el: _Element) {
    if (!_cached_decoder_for_SystemsMgtOperation) {
        _cached_decoder_for_SystemsMgtOperation = $._decode_inextensible_choice<SystemsMgtOperation>(
            {
                'CONTEXT 0': [
                    'get_',
                    $._decode_implicit<LabelAndParameters>(
                        () => _decode_LabelAndParameters
                    ),
                ],
                'CONTEXT 1': [
                    'replace',
                    $._decode_implicit<LabelAndParameters>(
                        () => _decode_LabelAndParameters
                    ),
                ],
                'CONTEXT 2': [
                    'add',
                    $._decode_implicit<LabelAndParameters>(
                        () => _decode_LabelAndParameters
                    ),
                ],
                'CONTEXT 3': [
                    'remove',
                    $._decode_implicit<LabelAndParameters>(
                        () => _decode_LabelAndParameters
                    ),
                ],
                'CONTEXT 4': [
                    'create',
                    $._decode_implicit<OptionalLabelAndParameters>(
                        () => _decode_OptionalLabelAndParameters
                    ),
                ],
                'CONTEXT 5': [
                    'delete_',
                    $._decode_implicit<TemplateList>(
                        () => _decode_TemplateList
                    ),
                ],
                'CONTEXT 6': [
                    'action',
                    $._decode_implicit<LabelAndParameters>(
                        () => _decode_LabelAndParameters
                    ),
                ],
                'CONTEXT 7': [
                    'notification',
                    $._decode_implicit<LabelAndParameters>(
                        () => _decode_LabelAndParameters
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SystemsMgtOperation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SystemsMgtOperation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemsMgtOperation */
let _cached_encoder_for_SystemsMgtOperation: $.ASN1Encoder<SystemsMgtOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemsMgtOperation */

/* START_OF_SYMBOL_DEFINITION _encode_SystemsMgtOperation */
/**
 * @summary Encodes a(n) SystemsMgtOperation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemsMgtOperation, encoded as an ASN.1 Element.
 */
export function _encode_SystemsMgtOperation(
    value: SystemsMgtOperation,
    elGetter: $.ASN1Encoder<SystemsMgtOperation>
) {
    if (!_cached_encoder_for_SystemsMgtOperation) {
        _cached_encoder_for_SystemsMgtOperation = $._encode_choice<SystemsMgtOperation>(
            {
                get_: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_LabelAndParameters,
                    $.BER
                ),
                replace: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_LabelAndParameters,
                    $.BER
                ),
                add: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_LabelAndParameters,
                    $.BER
                ),
                remove: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_LabelAndParameters,
                    $.BER
                ),
                create: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_OptionalLabelAndParameters,
                    $.BER
                ),
                delete_: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_TemplateList,
                    $.BER
                ),
                action: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_LabelAndParameters,
                    $.BER
                ),
                notification: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => _encode_LabelAndParameters,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SystemsMgtOperation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SystemsMgtOperation */

/* eslint-enable */
