/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { MonitorListEntry, _decode_MonitorListEntry, _encode_MonitorListEntry } from "../CSTA-status-reporting/MonitorListEntry.ta.mjs";



/**
 * @summary MonitorList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorList  ::=  SEQUENCE OF MonitorListEntry
 * ```
 */
export
type MonitorList = MonitorListEntry[]; // SequenceOfType

let _cached_decoder_for_MonitorList: $.ASN1Decoder<MonitorList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorList (el: _Element): MonitorList {
    if (!_cached_decoder_for_MonitorList) { _cached_decoder_for_MonitorList = $._decodeSequenceOf<MonitorListEntry>(() => _decode_MonitorListEntry); }
    return _cached_decoder_for_MonitorList(el);
}

let _cached_encoder_for_MonitorList: $.ASN1Encoder<MonitorList> | null = null;

/**
 * @summary Encodes a(n) MonitorList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorList, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorList (value: MonitorList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorList) { _cached_encoder_for_MonitorList = $._encodeSequenceOf<MonitorListEntry>(() => _encode_MonitorListEntry, $.BER); }
    return _cached_encoder_for_MonitorList(value, elGetter);
}


/* eslint-enable */
