/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AddressHeader, _decode_AddressHeader, _encode_AddressHeader } from "../SS-MCM-Operations-asn1-97/AddressHeader.ta.mjs";

/**
 * @summary CompleteInfo
 * @description
 *
 * Complete information in an update: one `AddressHeader`
 * per message (ECMA-347 §6.3.1, §6.5.1.1.4). §6.5.1.1.4
 * does not say whether every stored message is included.
 *
 * The complete-mode rules for `mCMNewMsg` (§6.5.1.1.2) are
 * a single originator plus an optional count. They are not
 * this list.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompleteInfo  ::=  SEQUENCE OF AddressHeader
 * ```
 */
export
type CompleteInfo = AddressHeader[]; // SequenceOfType

let _cached_decoder_for_CompleteInfo: $.ASN1Decoder<CompleteInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompleteInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompleteInfo (el: _Element): CompleteInfo {
    if (!_cached_decoder_for_CompleteInfo) { _cached_decoder_for_CompleteInfo = $._decodeSequenceOf<AddressHeader>(() => _decode_AddressHeader); }
    return _cached_decoder_for_CompleteInfo(el);
}

let _cached_encoder_for_CompleteInfo: $.ASN1Encoder<CompleteInfo> | null = null;

/**
 * @summary Encodes a(n) CompleteInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompleteInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CompleteInfo (value: CompleteInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompleteInfo) { _cached_encoder_for_CompleteInfo = $._encodeSequenceOf<AddressHeader>(() => _encode_AddressHeader, $.BER); }
    return _cached_encoder_for_CompleteInfo(value, elGetter);
}

/* eslint-enable */
