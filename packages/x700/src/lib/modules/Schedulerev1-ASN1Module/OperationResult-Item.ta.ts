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
    GetResult,
    _decode_GetResult,
    _encode_GetResult,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/GetResult.ta.js';
export {
    GetResult,
    _decode_GetResult,
    _encode_GetResult,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/GetResult.ta.js';
import {
    GetListError,
    _decode_GetListError,
    _encode_GetListError,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/GetListError.ta.js';
export {
    GetListError,
    _decode_GetListError,
    _encode_GetListError,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/GetListError.ta.js';
import {
    SetResult,
    _decode_SetResult,
    _encode_SetResult,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/SetResult.ta.js';
export {
    SetResult,
    _decode_SetResult,
    _encode_SetResult,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/SetResult.ta.js';
import {
    SetListError,
    _decode_SetListError,
    _encode_SetListError,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/SetListError.ta.js';
export {
    SetListError,
    _decode_SetListError,
    _encode_SetListError,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/SetListError.ta.js';
import {
    ActionResult,
    _decode_ActionResult,
    _encode_ActionResult,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ActionResult.ta.js';
export {
    ActionResult,
    _decode_ActionResult,
    _encode_ActionResult,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ActionResult.ta.js';
import {
    CommonError,
    _decode_CommonError,
    _encode_CommonError,
} from '../Schedulerev1-ASN1Module/CommonError.ta.js';
export {
    CommonError,
    _decode_CommonError,
    _encode_CommonError,
} from '../Schedulerev1-ASN1Module/CommonError.ta.js';

/* START_OF_SYMBOL_DEFINITION OperationResult_Item */
/**
 * @summary OperationResult_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationResult-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OperationResult_Item =
    | { getResult: GetResult } /* CHOICE_ALT_ROOT */
    | { getListError: GetListError } /* CHOICE_ALT_ROOT */
    | { setResult: SetResult } /* CHOICE_ALT_ROOT */
    | { setListError: SetListError } /* CHOICE_ALT_ROOT */
    | { actionResult: ActionResult } /* CHOICE_ALT_ROOT */
    | { commonError: CommonError } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OperationResult_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationResult_Item */
let _cached_decoder_for_OperationResult_Item: $.ASN1Decoder<OperationResult_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationResult_Item */

/* START_OF_SYMBOL_DEFINITION _decode_OperationResult_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) OperationResult_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationResult_Item} The decoded data structure.
 */
export function _decode_OperationResult_Item(el: _Element) {
    if (!_cached_decoder_for_OperationResult_Item) {
        _cached_decoder_for_OperationResult_Item = $._decode_inextensible_choice<OperationResult_Item>(
            {
                'CONTEXT 0': [
                    'getResult',
                    $._decode_implicit<GetResult>(() => _decode_GetResult),
                ],
                'CONTEXT 1': [
                    'getListError',
                    $._decode_implicit<GetListError>(
                        () => _decode_GetListError
                    ),
                ],
                'CONTEXT 2': [
                    'setResult',
                    $._decode_implicit<SetResult>(() => _decode_SetResult),
                ],
                'CONTEXT 3': [
                    'setListError',
                    $._decode_implicit<SetListError>(
                        () => _decode_SetListError
                    ),
                ],
                'CONTEXT 4': [
                    'actionResult',
                    $._decode_implicit<ActionResult>(
                        () => _decode_ActionResult
                    ),
                ],
                'CONTEXT 5': [
                    'commonError',
                    $._decode_implicit<CommonError>(() => _decode_CommonError),
                ],
            }
        );
    }
    return _cached_decoder_for_OperationResult_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OperationResult_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationResult_Item */
let _cached_encoder_for_OperationResult_Item: $.ASN1Encoder<OperationResult_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationResult_Item */

/* START_OF_SYMBOL_DEFINITION _encode_OperationResult_Item */
/**
 * @summary Encodes a(n) OperationResult_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationResult_Item, encoded as an ASN.1 Element.
 */
export function _encode_OperationResult_Item(
    value: OperationResult_Item,
    elGetter: $.ASN1Encoder<OperationResult_Item>
) {
    if (!_cached_encoder_for_OperationResult_Item) {
        _cached_encoder_for_OperationResult_Item = $._encode_choice<OperationResult_Item>(
            {
                getResult: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_GetResult,
                    $.BER
                ),
                getListError: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GetListError,
                    $.BER
                ),
                setResult: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_SetResult,
                    $.BER
                ),
                setListError: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_SetListError,
                    $.BER
                ),
                actionResult: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_ActionResult,
                    $.BER
                ),
                commonError: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_CommonError,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OperationResult_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OperationResult_Item */

/* eslint-enable */
