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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ExtendedNetworkAddress_e163_4_address,
    _decode_ExtendedNetworkAddress_e163_4_address,
    _encode_ExtendedNetworkAddress_e163_4_address,
} from '../MTSAbstractService/ExtendedNetworkAddress-e163-4-address.ta.mjs';
import {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta.mjs';
/**
 * @summary ExtendedNetworkAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedNetworkAddress  ::=  CHOICE {
 *   e163-4-address
 *     SEQUENCE {number
 *                 [0]  NumericString(SIZE (1..ub-e163-4-number-length)),
 *               sub-address
 *                 [1]  NumericString(SIZE (1..ub-e163-4-sub-address-length))
 *                   OPTIONAL},
 *   psap-address    [0]  PresentationAddress
 * }
 * ```
 */
export type ExtendedNetworkAddress =
    | {
          e163_4_address: ExtendedNetworkAddress_e163_4_address;
      } /* CHOICE_ALT_ROOT */
    | { psap_address: PresentationAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExtendedNetworkAddress: $.ASN1Decoder<ExtendedNetworkAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedNetworkAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedNetworkAddress} The decoded data structure.
 */
export function _decode_ExtendedNetworkAddress(el: _Element) {
    if (!_cached_decoder_for_ExtendedNetworkAddress) {
        _cached_decoder_for_ExtendedNetworkAddress = $._decode_inextensible_choice<ExtendedNetworkAddress>(
            {
                'UNIVERSAL 16': [
                    'e163_4_address',
                    _decode_ExtendedNetworkAddress_e163_4_address,
                ],
                'CONTEXT 0': [
                    'psap_address',
                    $._decode_implicit<PresentationAddress>(
                        () => _decode_PresentationAddress
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExtendedNetworkAddress(el);
}

let _cached_encoder_for_ExtendedNetworkAddress: $.ASN1Encoder<ExtendedNetworkAddress> | null = null;

/**
 * @summary Encodes a(n) ExtendedNetworkAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedNetworkAddress, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedNetworkAddress(
    value: ExtendedNetworkAddress,
    elGetter: $.ASN1Encoder<ExtendedNetworkAddress>
) {
    if (!_cached_encoder_for_ExtendedNetworkAddress) {
        _cached_encoder_for_ExtendedNetworkAddress = $._encode_choice<ExtendedNetworkAddress>(
            {
                e163_4_address: _encode_ExtendedNetworkAddress_e163_4_address,
                psap_address: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PresentationAddress,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExtendedNetworkAddress(value, elGetter);
}


/* eslint-enable */
