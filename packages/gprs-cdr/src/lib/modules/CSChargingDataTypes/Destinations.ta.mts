/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OsApplication, _decode_OsApplication, _encode_OsApplication } from "../CSChargingDataTypes/OsApplication.ta.mjs";


/**
 * @summary Destinations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Destinations  ::=  SET  OF
 *    OsApplication
 * ```
 */
export
type Destinations = OsApplication[]; // SetOfType

let _cached_decoder_for_Destinations: $.ASN1Decoder<Destinations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Destinations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Destinations (el: _Element): Destinations {
    if (!_cached_decoder_for_Destinations) { _cached_decoder_for_Destinations = $._decodeSetOf<OsApplication>(() => _decode_OsApplication); }
    return _cached_decoder_for_Destinations(el);
}

let _cached_encoder_for_Destinations: $.ASN1Encoder<Destinations> | null = null;

/**
 * @summary Encodes a(n) Destinations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Destinations, encoded as an ASN.1 Element.
 */
export
function _encode_Destinations (value: Destinations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Destinations) { _cached_encoder_for_Destinations = $._encodeSetOf<OsApplication>(() => _encode_OsApplication, $.BER); }
    return _cached_encoder_for_Destinations(value, elGetter);
}


/* eslint-enable */
