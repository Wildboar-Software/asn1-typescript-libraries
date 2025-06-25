/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    GetResult,
    _decode_GetResult,
    _encode_GetResult,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/GetResult.ta.mjs';
import {
    GetListError,
    _decode_GetListError,
    _encode_GetListError,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/GetListError.ta.mjs';
import {
    SetResult,
    _decode_SetResult,
    _encode_SetResult,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/SetResult.ta.mjs';
import {
    SetListError,
    _decode_SetListError,
    _encode_SetListError,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/SetListError.ta.mjs';
import {
    ActionResult,
    _decode_ActionResult,
    _encode_ActionResult,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ActionResult.ta.mjs';
import {
    CommonError,
    _decode_CommonError,
    _encode_CommonError,
} from '../Schedulerev1-ASN1Module/CommonError.ta.mjs';
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

let _cached_decoder_for_OperationResult_Item: $.ASN1Decoder<OperationResult_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperationResult_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationResult_Item} The decoded data structure.
 */
export function _decode_OperationResult_Item(el: _Element): OperationResult_Item {
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

let _cached_encoder_for_OperationResult_Item: $.ASN1Encoder<OperationResult_Item> | null = null;

/**
 * @summary Encodes a(n) OperationResult_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationResult_Item, encoded as an ASN.1 Element.
 */
export function _encode_OperationResult_Item(
    value: OperationResult_Item,
    elGetter: $.ASN1Encoder<OperationResult_Item>
): _Element {
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


/* eslint-enable */
