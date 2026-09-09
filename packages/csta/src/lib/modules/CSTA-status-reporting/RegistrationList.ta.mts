/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { RegistrationListEntry, _decode_RegistrationListEntry, _encode_RegistrationListEntry } from "../CSTA-status-reporting/RegistrationListEntry.ta.mjs";



/**
 * @summary RegistrationList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationList  ::=  SEQUENCE OF RegistrationListEntry
 * ```
 */
export
type RegistrationList = RegistrationListEntry[]; // SequenceOfType

let _cached_decoder_for_RegistrationList: $.ASN1Decoder<RegistrationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationList (el: _Element): RegistrationList {
    if (!_cached_decoder_for_RegistrationList) { _cached_decoder_for_RegistrationList = $._decodeSequenceOf<RegistrationListEntry>(() => _decode_RegistrationListEntry); }
    return _cached_decoder_for_RegistrationList(el);
}

let _cached_encoder_for_RegistrationList: $.ASN1Encoder<RegistrationList> | null = null;

/**
 * @summary Encodes a(n) RegistrationList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationList, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationList (value: RegistrationList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationList) { _cached_encoder_for_RegistrationList = $._encodeSequenceOf<RegistrationListEntry>(() => _encode_RegistrationListEntry, $.BER); }
    return _cached_encoder_for_RegistrationList(value, elGetter);
}


/* eslint-enable */
