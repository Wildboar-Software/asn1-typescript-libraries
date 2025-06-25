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
 * @summary SignalId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalId  ::=  CHOICE {
 *   simple   [0]  CharacteristicInformation,
 *   bundle   [1]  Bundle,
 *   complex  [3]  SEQUENCE OF Bundle
 * }
 * ```
 */
export type SignalId =
    | { simple: CharacteristicInformation } /* CHOICE_ALT_ROOT */
    | { bundle: Bundle } /* CHOICE_ALT_ROOT */
    | { complex: Bundle[] } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_SignalId: $.ASN1Decoder<SignalId> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignalId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalId} The decoded data structure.
 */
export function _decode_SignalId(el: _Element): SignalId {
    if (!_cached_decoder_for_SignalId) {
        _cached_decoder_for_SignalId = $._decode_inextensible_choice<SignalId>({
            'CONTEXT 0': [
                'simple',
                $._decode_implicit<CharacteristicInformation>(
                    () => _decode_CharacteristicInformation
                ),
            ],
            'CONTEXT 1': [
                'bundle',
                $._decode_implicit<Bundle>(() => _decode_Bundle),
            ],
            'CONTEXT 3': [
                'complex',
                $._decode_implicit<Bundle[]>(() =>
                    $._decodeSequenceOf<Bundle>(() => _decode_Bundle)
                ),
            ],
        });
    }
    return _cached_decoder_for_SignalId(el);
}


let _cached_encoder_for_SignalId: $.ASN1Encoder<SignalId> | null = null;


/**
 * @summary Encodes a(n) SignalId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalId, encoded as an ASN.1 Element.
 */
export function _encode_SignalId(
    value: SignalId,
    elGetter: $.ASN1Encoder<SignalId>
): _Element {
    if (!_cached_encoder_for_SignalId) {
        _cached_encoder_for_SignalId = $._encode_choice<SignalId>(
            {
                simple: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CharacteristicInformation,
                    $.BER
                ),
                bundle: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Bundle,
                    $.BER
                ),
                complex: $._encode_implicit(
                    _TagClass.context,
                    3,
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
    return _cached_encoder_for_SignalId(value, elGetter);
}


/* eslint-enable */
