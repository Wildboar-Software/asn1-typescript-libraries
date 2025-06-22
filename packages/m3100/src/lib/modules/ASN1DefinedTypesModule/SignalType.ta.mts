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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    CharacteristicInformation,
    _decode_CharacteristicInformation,
    _encode_CharacteristicInformation,
} from '../ASN1DefinedTypesModule/CharacteristicInformation.ta.mjs';
import {
    Bundle,
    _decode_Bundle,
    _encode_Bundle,
} from '../ASN1DefinedTypesModule/Bundle.ta.mjs';

/**
 * @summary SignalType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalType  ::=  CHOICE {
 *   simple   CharacteristicInformation,
 *   bundle   Bundle,
 *   complex  [0]  SEQUENCE OF Bundle
 * }
 * ```
 */
export type SignalType =
    | { simple: CharacteristicInformation } /* CHOICE_ALT_ROOT */
    | { bundle: Bundle } /* CHOICE_ALT_ROOT */
    | { complex: Bundle[] } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_SignalType: $.ASN1Decoder<SignalType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignalType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalType} The decoded data structure.
 */
export function _decode_SignalType(el: _Element) {
    if (!_cached_decoder_for_SignalType) {
        _cached_decoder_for_SignalType = $._decode_inextensible_choice<SignalType>(
            {
                'UNIVERSAL 6': ['simple', _decode_CharacteristicInformation],
                'UNIVERSAL 16': ['bundle', _decode_Bundle],
                'CONTEXT 0': [
                    'complex',
                    $._decode_implicit<Bundle[]>(() =>
                        $._decodeSequenceOf<Bundle>(() => _decode_Bundle)
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SignalType(el);
}


let _cached_encoder_for_SignalType: $.ASN1Encoder<SignalType> | null = null;


/**
 * @summary Encodes a(n) SignalType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalType, encoded as an ASN.1 Element.
 */
export function _encode_SignalType(
    value: SignalType,
    elGetter: $.ASN1Encoder<SignalType>
) {
    if (!_cached_encoder_for_SignalType) {
        _cached_encoder_for_SignalType = $._encode_choice<SignalType>(
            {
                simple: _encode_CharacteristicInformation,
                bundle: _encode_Bundle,
                complex: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSequenceOf<Bundle>(
                            () => _encode_Bundle,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SignalType(value, elGetter);
}


/* eslint-enable */
