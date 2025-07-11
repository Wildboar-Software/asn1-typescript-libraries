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
    SinglePeerClock,
    _decode_SinglePeerClock,
    _encode_SinglePeerClock,
} from '../TimeMF/SinglePeerClock.ta.mjs';
/**
 * @summary PeerClockAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PeerClockAddresses  ::=  SET OF SinglePeerClock
 * ```
 */
export type PeerClockAddresses = SinglePeerClock[]; // SetOfType

let _cached_decoder_for_PeerClockAddresses: $.ASN1Decoder<PeerClockAddresses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeerClockAddresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PeerClockAddresses} The decoded data structure.
 */
export function _decode_PeerClockAddresses(el: _Element): PeerClockAddresses {
    if (!_cached_decoder_for_PeerClockAddresses) {
        _cached_decoder_for_PeerClockAddresses = $._decodeSetOf<SinglePeerClock>(
            () => _decode_SinglePeerClock
        );
    }
    return _cached_decoder_for_PeerClockAddresses(el);
}

let _cached_encoder_for_PeerClockAddresses: $.ASN1Encoder<PeerClockAddresses> | null = null;

/**
 * @summary Encodes a(n) PeerClockAddresses into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeerClockAddresses, encoded as an ASN.1 Element.
 */
export function _encode_PeerClockAddresses(
    value: PeerClockAddresses,
    elGetter: $.ASN1Encoder<PeerClockAddresses>
): _Element {
    if (!_cached_encoder_for_PeerClockAddresses) {
        _cached_encoder_for_PeerClockAddresses = $._encodeSetOf<SinglePeerClock>(
            () => _encode_SinglePeerClock,
            $.BER
        );
    }
    return _cached_encoder_for_PeerClockAddresses(value, elGetter);
}


/* eslint-enable */
