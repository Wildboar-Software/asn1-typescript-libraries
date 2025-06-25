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
    ClockAddress,
    _decode_ClockAddress,
    _encode_ClockAddress,
} from '../TimeMF/ClockAddress.ta.mjs';
import {
    ReferenceClockType,
    _decode_ReferenceClockType,
    _encode_ReferenceClockType,
} from '../TimeMF/ReferenceClockType.ta.mjs';
/**
 * @summary CurrSynchSourceAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CurrSynchSourceAddress  ::=  CHOICE {
 *   refPeerAssoc  [0]  ClockAddress,
 *   refClockID    [1]  ReferenceClockType
 * }
 * ```
 */
export type CurrSynchSourceAddress =
    | { refPeerAssoc: ClockAddress } /* CHOICE_ALT_ROOT */
    | { refClockID: ReferenceClockType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CurrSynchSourceAddress: $.ASN1Decoder<CurrSynchSourceAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CurrSynchSourceAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CurrSynchSourceAddress} The decoded data structure.
 */
export function _decode_CurrSynchSourceAddress(el: _Element): CurrSynchSourceAddress {
    if (!_cached_decoder_for_CurrSynchSourceAddress) {
        _cached_decoder_for_CurrSynchSourceAddress = $._decode_inextensible_choice<CurrSynchSourceAddress>(
            {
                'CONTEXT 0': [
                    'refPeerAssoc',
                    $._decode_explicit<ClockAddress>(
                        () => _decode_ClockAddress
                    ),
                ],
                'CONTEXT 1': [
                    'refClockID',
                    $._decode_implicit<ReferenceClockType>(
                        () => _decode_ReferenceClockType
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CurrSynchSourceAddress(el);
}

let _cached_encoder_for_CurrSynchSourceAddress: $.ASN1Encoder<CurrSynchSourceAddress> | null = null;

/**
 * @summary Encodes a(n) CurrSynchSourceAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrSynchSourceAddress, encoded as an ASN.1 Element.
 */
export function _encode_CurrSynchSourceAddress(
    value: CurrSynchSourceAddress,
    elGetter: $.ASN1Encoder<CurrSynchSourceAddress>
): _Element {
    if (!_cached_encoder_for_CurrSynchSourceAddress) {
        _cached_encoder_for_CurrSynchSourceAddress = $._encode_choice<CurrSynchSourceAddress>(
            {
                refPeerAssoc: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ClockAddress,
                    $.BER
                ),
                refClockID: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ReferenceClockType,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CurrSynchSourceAddress(value, elGetter);
}


/* eslint-enable */
