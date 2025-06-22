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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary TerminationPointInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminationPointInformation  ::=  CHOICE {
 *   tPOrGTP   [0]  ObjectInstance,
 *   sourceTP  [1]  ObjectInstance,
 *   sinkTP    [2]  ObjectInstance
 * }
 * ```
 */
export type TerminationPointInformation =
    | { tPOrGTP: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { sourceTP: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { sinkTP: ObjectInstance } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_TerminationPointInformation: $.ASN1Decoder<TerminationPointInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TerminationPointInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminationPointInformation} The decoded data structure.
 */
export function _decode_TerminationPointInformation(el: _Element) {
    if (!_cached_decoder_for_TerminationPointInformation) {
        _cached_decoder_for_TerminationPointInformation = $._decode_inextensible_choice<TerminationPointInformation>(
            {
                'CONTEXT 0': [
                    'tPOrGTP',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 1': [
                    'sourceTP',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 2': [
                    'sinkTP',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TerminationPointInformation(el);
}


let _cached_encoder_for_TerminationPointInformation: $.ASN1Encoder<TerminationPointInformation> | null = null;


/**
 * @summary Encodes a(n) TerminationPointInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationPointInformation, encoded as an ASN.1 Element.
 */
export function _encode_TerminationPointInformation(
    value: TerminationPointInformation,
    elGetter: $.ASN1Encoder<TerminationPointInformation>
) {
    if (!_cached_encoder_for_TerminationPointInformation) {
        _cached_encoder_for_TerminationPointInformation = $._encode_choice<TerminationPointInformation>(
            {
                tPOrGTP: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                sourceTP: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                sinkTP: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TerminationPointInformation(value, elGetter);
}


/* eslint-enable */
