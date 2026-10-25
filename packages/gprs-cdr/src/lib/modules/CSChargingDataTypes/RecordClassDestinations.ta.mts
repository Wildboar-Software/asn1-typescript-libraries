/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordClassDestination, _decode_RecordClassDestination, _encode_RecordClassDestination } from "../CSChargingDataTypes/RecordClassDestination.ta.mjs";


/**
 * @summary RecordClassDestinations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordClassDestinations  ::=  SET  OF
 *    RecordClassDestination
 * ```
 */
export
type RecordClassDestinations = RecordClassDestination[]; // SetOfType

let _cached_decoder_for_RecordClassDestinations: $.ASN1Decoder<RecordClassDestinations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordClassDestinations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordClassDestinations (el: _Element): RecordClassDestinations {
    if (!_cached_decoder_for_RecordClassDestinations) { _cached_decoder_for_RecordClassDestinations = $._decodeSetOf<RecordClassDestination>(() => _decode_RecordClassDestination); }
    return _cached_decoder_for_RecordClassDestinations(el);
}

let _cached_encoder_for_RecordClassDestinations: $.ASN1Encoder<RecordClassDestinations> | null = null;

/**
 * @summary Encodes a(n) RecordClassDestinations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordClassDestinations, encoded as an ASN.1 Element.
 */
export
function _encode_RecordClassDestinations (value: RecordClassDestinations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordClassDestinations) { _cached_encoder_for_RecordClassDestinations = $._encodeSetOf<RecordClassDestination>(() => _encode_RecordClassDestination, $.BER); }
    return _cached_encoder_for_RecordClassDestinations(value, elGetter);
}


/* eslint-enable */
