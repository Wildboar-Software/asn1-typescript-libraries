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
    BuiltInContentType,
    _decode_BuiltInContentType,
    _encode_BuiltInContentType,
} from '../MTSAbstractService/BuiltInContentType.ta.mjs';
import {
    ExtendedContentType,
    _decode_ExtendedContentType,
    _encode_ExtendedContentType,
} from '../MTSAbstractService/ExtendedContentType.ta.mjs';
/**
 * @summary DeliveredContentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveredContentType  ::=  CHOICE {
 *   built-in  [0]  BuiltInContentType,
 *   extended  ExtendedContentType
 * }
 * ```
 */
export type DeliveredContentType =
    | { built_in: BuiltInContentType } /* CHOICE_ALT_ROOT */
    | { extended: ExtendedContentType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeliveredContentType: $.ASN1Decoder<DeliveredContentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveredContentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveredContentType} The decoded data structure.
 */
export function _decode_DeliveredContentType(el: _Element): DeliveredContentType {
    if (!_cached_decoder_for_DeliveredContentType) {
        _cached_decoder_for_DeliveredContentType = $._decode_inextensible_choice<DeliveredContentType>(
            {
                'CONTEXT 0': [
                    'built_in',
                    $._decode_implicit<BuiltInContentType>(
                        () => _decode_BuiltInContentType
                    ),
                ],
                'UNIVERSAL 13': ['extended', _decode_ExtendedContentType],
            }
        );
    }
    return _cached_decoder_for_DeliveredContentType(el);
}

let _cached_encoder_for_DeliveredContentType: $.ASN1Encoder<DeliveredContentType> | null = null;

/**
 * @summary Encodes a(n) DeliveredContentType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveredContentType, encoded as an ASN.1 Element.
 */
export function _encode_DeliveredContentType(
    value: DeliveredContentType,
    elGetter: $.ASN1Encoder<DeliveredContentType>
): _Element {
    if (!_cached_encoder_for_DeliveredContentType) {
        _cached_encoder_for_DeliveredContentType = $._encode_choice<DeliveredContentType>(
            {
                built_in: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_BuiltInContentType,
                    $.BER
                ),
                extended: _encode_ExtendedContentType,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DeliveredContentType(value, elGetter);
}


/* eslint-enable */
