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
    UserAddress_x121,
    _decode_UserAddress_x121,
    _encode_UserAddress_x121,
} from '../MTSAbstractService/UserAddress-x121.ta.mjs';
import {
    PSAPAddress,
    _decode_PSAPAddress,
    _encode_PSAPAddress,
} from '../MTSAbstractService/PSAPAddress.ta.mjs';
/**
 * @summary UserAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserAddress  ::=  CHOICE {
 *   x121
 *     [0]  SEQUENCE {x121-address
 *                      NumericString(SIZE (1..ub-x121-address-length)) OPTIONAL,
 *                    tsap-id
 *                      PrintableString(SIZE (1..ub-tsap-id-length)) OPTIONAL
 *   },
 *   presentation  [1]  PSAPAddress
 * }
 * ```
 */
export type UserAddress =
    | { x121: UserAddress_x121 } /* CHOICE_ALT_ROOT */
    | { presentation: PSAPAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UserAddress: $.ASN1Decoder<UserAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserAddress} The decoded data structure.
 */
export function _decode_UserAddress(el: _Element): UserAddress {
    if (!_cached_decoder_for_UserAddress) {
        _cached_decoder_for_UserAddress = $._decode_inextensible_choice<UserAddress>(
            {
                'CONTEXT 0': [
                    'x121',
                    $._decode_implicit<UserAddress_x121>(
                        () => _decode_UserAddress_x121
                    ),
                ],
                'CONTEXT 1': [
                    'presentation',
                    $._decode_implicit<PSAPAddress>(() => _decode_PSAPAddress),
                ],
            }
        );
    }
    return _cached_decoder_for_UserAddress(el);
}

let _cached_encoder_for_UserAddress: $.ASN1Encoder<UserAddress> | null = null;

/**
 * @summary Encodes a(n) UserAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserAddress, encoded as an ASN.1 Element.
 */
export function _encode_UserAddress(
    value: UserAddress,
    elGetter: $.ASN1Encoder<UserAddress>
): _Element {
    if (!_cached_encoder_for_UserAddress) {
        _cached_encoder_for_UserAddress = $._encode_choice<UserAddress>(
            {
                x121: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_UserAddress_x121,
                    $.BER
                ),
                presentation: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_PSAPAddress,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_UserAddress(value, elGetter);
}


/* eslint-enable */
