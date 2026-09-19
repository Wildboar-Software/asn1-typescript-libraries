/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AreaOfInterestItem, _decode_AreaOfInterestItem, _encode_AreaOfInterestItem } from "../TS33128Payloads/AreaOfInterestItem.ta.mjs";
// export { AreaOfInterestItem, _decode_AreaOfInterestItem, _encode_AreaOfInterestItem } from "../TS33128Payloads/AreaOfInterestItem.ta.mjs";


/**
 * @summary LocationAreaOfInterestList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationAreaOfInterestList   ::=  SEQUENCE (SIZE(1..MAX)) OF AreaOfInterestItem
 * ```
 */
export
type LocationAreaOfInterestList = AreaOfInterestItem[]; // SequenceOfType

let _cached_decoder_for_LocationAreaOfInterestList: $.ASN1Decoder<LocationAreaOfInterestList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationAreaOfInterestList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationAreaOfInterestList (el: _Element): LocationAreaOfInterestList {
    if (!_cached_decoder_for_LocationAreaOfInterestList) { _cached_decoder_for_LocationAreaOfInterestList = $._decodeSequenceOf<AreaOfInterestItem>(() => _decode_AreaOfInterestItem); }
    return _cached_decoder_for_LocationAreaOfInterestList(el);
}

let _cached_encoder_for_LocationAreaOfInterestList: $.ASN1Encoder<LocationAreaOfInterestList> | null = null;

/**
 * @summary Encodes a(n) LocationAreaOfInterestList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationAreaOfInterestList, encoded as an ASN.1 Element.
 */
export
function _encode_LocationAreaOfInterestList (value: LocationAreaOfInterestList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationAreaOfInterestList) { _cached_encoder_for_LocationAreaOfInterestList = $._encodeSequenceOf<AreaOfInterestItem>(() => _encode_AreaOfInterestItem, $.BER); }
    return _cached_encoder_for_LocationAreaOfInterestList(value, elGetter);
}


/* eslint-enable */
