/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RadioChanRequested, _decode_RadioChanRequested, _encode_RadioChanRequested } from "../CSChargingDataTypes/RadioChanRequested.ta.mjs";


/**
 * @summary RadioChannelsRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioChannelsRequested  ::=  SET  OF
 *    RadioChanRequested
 * ```
 */
export
type RadioChannelsRequested = RadioChanRequested[]; // SetOfType

let _cached_decoder_for_RadioChannelsRequested: $.ASN1Decoder<RadioChannelsRequested> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RadioChannelsRequested
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RadioChannelsRequested (el: _Element): RadioChannelsRequested {
    if (!_cached_decoder_for_RadioChannelsRequested) { _cached_decoder_for_RadioChannelsRequested = $._decodeSetOf<RadioChanRequested>(() => _decode_RadioChanRequested); }
    return _cached_decoder_for_RadioChannelsRequested(el);
}

let _cached_encoder_for_RadioChannelsRequested: $.ASN1Encoder<RadioChannelsRequested> | null = null;

/**
 * @summary Encodes a(n) RadioChannelsRequested into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RadioChannelsRequested, encoded as an ASN.1 Element.
 */
export
function _encode_RadioChannelsRequested (value: RadioChannelsRequested, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RadioChannelsRequested) { _cached_encoder_for_RadioChannelsRequested = $._encodeSetOf<RadioChanRequested>(() => _encode_RadioChanRequested, $.BER); }
    return _cached_encoder_for_RadioChannelsRequested(value, elGetter);
}


/* eslint-enable */
