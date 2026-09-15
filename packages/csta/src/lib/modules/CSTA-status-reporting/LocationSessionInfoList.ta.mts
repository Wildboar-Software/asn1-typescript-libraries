/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { LocationSessionListEntry, _decode_LocationSessionListEntry, _encode_LocationSessionListEntry } from "../CSTA-status-reporting/LocationSessionListEntry.ta.mjs";



/**
 * @summary LocationSessionInfoList
 * @description
 *
 * Existing location tracking sessions for Get Location Tracking Sessions /
 * Location Session Info. ECMA-269 §28.1.12.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationSessionInfoList  ::=  SEQUENCE OF LocationSessionListEntry
 * ```
 */
export
type LocationSessionInfoList = LocationSessionListEntry[]; // SequenceOfType

let _cached_decoder_for_LocationSessionInfoList: $.ASN1Decoder<LocationSessionInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationSessionInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationSessionInfoList (el: _Element): LocationSessionInfoList {
    if (!_cached_decoder_for_LocationSessionInfoList) { _cached_decoder_for_LocationSessionInfoList = $._decodeSequenceOf<LocationSessionListEntry>(() => _decode_LocationSessionListEntry); }
    return _cached_decoder_for_LocationSessionInfoList(el);
}

let _cached_encoder_for_LocationSessionInfoList: $.ASN1Encoder<LocationSessionInfoList> | null = null;

/**
 * @summary Encodes a(n) LocationSessionInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationSessionInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_LocationSessionInfoList (value: LocationSessionInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationSessionInfoList) { _cached_encoder_for_LocationSessionInfoList = $._encodeSequenceOf<LocationSessionListEntry>(() => _encode_LocationSessionListEntry, $.BER); }
    return _cached_encoder_for_LocationSessionInfoList(value, elGetter);
}


/* eslint-enable */
