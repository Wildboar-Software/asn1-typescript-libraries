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
    PSAPAddress,
    _decode_PSAPAddress,
    _encode_PSAPAddress,
} from '../MTSAbstractService/PSAPAddress.ta.mjs';
import {
    GenericAddress,
    _decode_GenericAddress,
    _encode_GenericAddress,
} from '../MhsMTAAsn1Module/GenericAddress.ta.mjs';
/**
 * @summary EMailAccessPointAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailAccessPointAddress  ::=  CHOICE {
 *   psap            [0]  PSAPAddress,
 *   genericAddress  [1]  GenericAddress
 * }
 * ```
 */
export type EMailAccessPointAddress =
    | { psap: PSAPAddress } /* CHOICE_ALT_ROOT */
    | { genericAddress: GenericAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EMailAccessPointAddress: $.ASN1Decoder<EMailAccessPointAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailAccessPointAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailAccessPointAddress} The decoded data structure.
 */
export function _decode_EMailAccessPointAddress(el: _Element): EMailAccessPointAddress {
    if (!_cached_decoder_for_EMailAccessPointAddress) {
        _cached_decoder_for_EMailAccessPointAddress = $._decode_inextensible_choice<EMailAccessPointAddress>(
            {
                'CONTEXT 0': [
                    'psap',
                    $._decode_implicit<PSAPAddress>(() => _decode_PSAPAddress),
                ],
                'CONTEXT 1': [
                    'genericAddress',
                    $._decode_implicit<GenericAddress>(
                        () => _decode_GenericAddress
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailAccessPointAddress(el);
}

let _cached_encoder_for_EMailAccessPointAddress: $.ASN1Encoder<EMailAccessPointAddress> | null = null;

/**
 * @summary Encodes a(n) EMailAccessPointAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailAccessPointAddress, encoded as an ASN.1 Element.
 */
export function _encode_EMailAccessPointAddress(
    value: EMailAccessPointAddress,
    elGetter: $.ASN1Encoder<EMailAccessPointAddress>
): _Element {
    if (!_cached_encoder_for_EMailAccessPointAddress) {
        _cached_encoder_for_EMailAccessPointAddress = $._encode_choice<EMailAccessPointAddress>(
            {
                psap: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PSAPAddress,
                    $.BER
                ),
                genericAddress: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericAddress,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailAccessPointAddress(value, elGetter);
}


/* eslint-enable */
