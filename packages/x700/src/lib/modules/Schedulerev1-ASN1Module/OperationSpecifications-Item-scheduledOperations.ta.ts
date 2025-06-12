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
    ModificationList,
    _decode_ModificationList,
    _encode_ModificationList,
} from '../Schedulerev1-ASN1Module/ModificationList.ta.js';
export {
    ModificationList,
    _decode_ModificationList,
    _encode_ModificationList,
} from '../Schedulerev1-ASN1Module/ModificationList.ta.js';
import {
    ActionInfo,
    _decode_ActionInfo,
    _encode_ActionInfo,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ActionInfo.ta.js';
export {
    ActionInfo,
    _decode_ActionInfo,
    _encode_ActionInfo,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ActionInfo.ta.js';
import {
    GetArgument,
    _decode_GetArgument,
    _encode_GetArgument,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/GetArgument.ta.js';
export {
    GetArgument,
    _decode_GetArgument,
    _encode_GetArgument,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/GetArgument.ta.js';

/* START_OF_SYMBOL_DEFINITION OperationSpecifications_Item_scheduledOperations */
/**
 * @summary OperationSpecifications_Item_scheduledOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationSpecifications-Item-scheduledOperations ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OperationSpecifications_Item_scheduledOperations =
    | { set_: ModificationList } /* CHOICE_ALT_ROOT */
    | { action: ActionInfo } /* CHOICE_ALT_ROOT */
    | { get_: GetArgument } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OperationSpecifications_Item_scheduledOperations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationSpecifications_Item_scheduledOperations */
let _cached_decoder_for_OperationSpecifications_Item_scheduledOperations: $.ASN1Decoder<OperationSpecifications_Item_scheduledOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationSpecifications_Item_scheduledOperations */

/* START_OF_SYMBOL_DEFINITION _decode_OperationSpecifications_Item_scheduledOperations */
/**
 * @summary Decodes an ASN.1 element into a(n) OperationSpecifications_Item_scheduledOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationSpecifications_Item_scheduledOperations} The decoded data structure.
 */
export function _decode_OperationSpecifications_Item_scheduledOperations(
    el: _Element
) {
    if (!_cached_decoder_for_OperationSpecifications_Item_scheduledOperations) {
        _cached_decoder_for_OperationSpecifications_Item_scheduledOperations = $._decode_inextensible_choice<OperationSpecifications_Item_scheduledOperations>(
            {
                'CONTEXT 0': [
                    'set_',
                    $._decode_implicit<ModificationList>(
                        () => _decode_ModificationList
                    ),
                ],
                'CONTEXT 1': [
                    'action',
                    $._decode_implicit<ActionInfo>(() => _decode_ActionInfo),
                ],
                'CONTEXT 2': [
                    'get_',
                    $._decode_implicit<GetArgument>(() => _decode_GetArgument),
                ],
            }
        );
    }
    return _cached_decoder_for_OperationSpecifications_Item_scheduledOperations(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_OperationSpecifications_Item_scheduledOperations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationSpecifications_Item_scheduledOperations */
let _cached_encoder_for_OperationSpecifications_Item_scheduledOperations: $.ASN1Encoder<OperationSpecifications_Item_scheduledOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationSpecifications_Item_scheduledOperations */

/* START_OF_SYMBOL_DEFINITION _encode_OperationSpecifications_Item_scheduledOperations */
/**
 * @summary Encodes a(n) OperationSpecifications_Item_scheduledOperations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationSpecifications_Item_scheduledOperations, encoded as an ASN.1 Element.
 */
export function _encode_OperationSpecifications_Item_scheduledOperations(
    value: OperationSpecifications_Item_scheduledOperations,
    elGetter: $.ASN1Encoder<OperationSpecifications_Item_scheduledOperations>
) {
    if (!_cached_encoder_for_OperationSpecifications_Item_scheduledOperations) {
        _cached_encoder_for_OperationSpecifications_Item_scheduledOperations = $._encode_choice<OperationSpecifications_Item_scheduledOperations>(
            {
                set_: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ModificationList,
                    $.BER
                ),
                action: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ActionInfo,
                    $.BER
                ),
                get_: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_GetArgument,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OperationSpecifications_Item_scheduledOperations(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_OperationSpecifications_Item_scheduledOperations */

/* eslint-enable */
