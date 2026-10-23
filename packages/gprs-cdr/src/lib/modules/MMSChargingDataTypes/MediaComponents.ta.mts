/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MediaComponent, _decode_MediaComponent, _encode_MediaComponent } from "../MMSChargingDataTypes/MediaComponent.ta.mjs";


/**
 * @summary MediaComponents
 * @description
 * 
 * The media components of an MM, each with its volume size. This is the
 * media part of an MM component list.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaComponents  ::=  SET  OF
 *    MediaComponent
 * ```
 */
export
type MediaComponents = MediaComponent[]; // SetOfType

let _cached_decoder_for_MediaComponents: $.ASN1Decoder<MediaComponents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaComponents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaComponents (el: _Element): MediaComponents {
    if (!_cached_decoder_for_MediaComponents) { _cached_decoder_for_MediaComponents = $._decodeSetOf<MediaComponent>(() => _decode_MediaComponent); }
    return _cached_decoder_for_MediaComponents(el);
}

let _cached_encoder_for_MediaComponents: $.ASN1Encoder<MediaComponents> | null = null;

/**
 * @summary Encodes a(n) MediaComponents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaComponents, encoded as an ASN.1 Element.
 */
export
function _encode_MediaComponents (value: MediaComponents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaComponents) { _cached_encoder_for_MediaComponents = $._encodeSetOf<MediaComponent>(() => _encode_MediaComponent, $.BER); }
    return _cached_encoder_for_MediaComponents(value, elGetter);
}


/* eslint-enable */
