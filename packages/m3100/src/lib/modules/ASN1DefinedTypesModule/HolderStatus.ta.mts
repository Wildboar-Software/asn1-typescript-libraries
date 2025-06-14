/* eslint-disable */
import {
    NULL,
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
    CircuitPackType,
    _decode_CircuitPackType,
    _encode_CircuitPackType,
} from '../ASN1DefinedTypesModule/CircuitPackType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION HolderStatus */
/**
 * @summary HolderStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HolderStatus  ::=  CHOICE {
 *   holderEmpty             [0]  NULL,
 *   inTheAcceptableList     [1]  CircuitPackType,
 *   notInTheAcceptableList  [2]  CircuitPackType,
 *   unknownType             [3]  NULL
 * }
 * ```
 */
export type HolderStatus =
    | { holderEmpty: NULL } /* CHOICE_ALT_ROOT */
    | { inTheAcceptableList: CircuitPackType } /* CHOICE_ALT_ROOT */
    | { notInTheAcceptableList: CircuitPackType } /* CHOICE_ALT_ROOT */
    | { unknownType: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION HolderStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HolderStatus */
let _cached_decoder_for_HolderStatus: $.ASN1Decoder<HolderStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HolderStatus */

/* START_OF_SYMBOL_DEFINITION _decode_HolderStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) HolderStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HolderStatus} The decoded data structure.
 */
export function _decode_HolderStatus(el: _Element) {
    if (!_cached_decoder_for_HolderStatus) {
        _cached_decoder_for_HolderStatus = $._decode_inextensible_choice<HolderStatus>(
            {
                'CONTEXT 0': [
                    'holderEmpty',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'inTheAcceptableList',
                    $._decode_implicit<CircuitPackType>(
                        () => _decode_CircuitPackType
                    ),
                ],
                'CONTEXT 2': [
                    'notInTheAcceptableList',
                    $._decode_implicit<CircuitPackType>(
                        () => _decode_CircuitPackType
                    ),
                ],
                'CONTEXT 3': [
                    'unknownType',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_HolderStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HolderStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HolderStatus */
let _cached_encoder_for_HolderStatus: $.ASN1Encoder<HolderStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HolderStatus */

/* START_OF_SYMBOL_DEFINITION _encode_HolderStatus */
/**
 * @summary Encodes a(n) HolderStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HolderStatus, encoded as an ASN.1 Element.
 */
export function _encode_HolderStatus(
    value: HolderStatus,
    elGetter: $.ASN1Encoder<HolderStatus>
) {
    if (!_cached_encoder_for_HolderStatus) {
        _cached_encoder_for_HolderStatus = $._encode_choice<HolderStatus>(
            {
                holderEmpty: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                inTheAcceptableList: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CircuitPackType,
                    $.BER
                ),
                notInTheAcceptableList: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_CircuitPackType,
                    $.BER
                ),
                unknownType: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_HolderStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HolderStatus */

/* eslint-enable */
