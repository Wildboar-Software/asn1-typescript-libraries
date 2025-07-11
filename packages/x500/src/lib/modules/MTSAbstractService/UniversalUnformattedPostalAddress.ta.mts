/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta.mjs";
/**
 * @summary UniversalUnformattedPostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalUnformattedPostalAddress  ::=
 *   UniversalOrBMPString{ub-unformatted-address-length}
 * ```
 */
export type UniversalUnformattedPostalAddress = UniversalOrBMPString; // DefinedType

let _cached_decoder_for_UniversalUnformattedPostalAddress: $.ASN1Decoder<UniversalUnformattedPostalAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalUnformattedPostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalUnformattedPostalAddress} The decoded data structure.
 */
export function _decode_UniversalUnformattedPostalAddress(el: _Element): UniversalUnformattedPostalAddress {
    if (!_cached_decoder_for_UniversalUnformattedPostalAddress) {
        _cached_decoder_for_UniversalUnformattedPostalAddress = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalUnformattedPostalAddress(el);
}

let _cached_encoder_for_UniversalUnformattedPostalAddress: $.ASN1Encoder<UniversalUnformattedPostalAddress> | null = null;

/**
 * @summary Encodes a(n) UniversalUnformattedPostalAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalUnformattedPostalAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalUnformattedPostalAddress(
    value: UniversalUnformattedPostalAddress,
    elGetter: $.ASN1Encoder<UniversalUnformattedPostalAddress>
): _Element {
    if (!_cached_encoder_for_UniversalUnformattedPostalAddress) {
        _cached_encoder_for_UniversalUnformattedPostalAddress = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalUnformattedPostalAddress(
        value,
        elGetter
    );
}


/* eslint-enable */
