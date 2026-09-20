/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_LocationArea, _encode_LocationArea, LocationArea } from "../MAP-MS-DataTypes/LocationArea.ta.mjs";


/**
 * @summary PagingArea
 * @description
 *
 * Paging area where the MS is currently located: a list of 1..5 location areas
 * (see 3GPP TS 23.012 and 23.018). Sent in MAP_UPDATE_LOCATION when the VLR
 * reports the area to the HLR.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.5.18, 8.1.2.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PagingArea  ::=  SEQUENCE SIZE (1..5) OF LocationArea
 * ```
 */
export
type PagingArea = LocationArea[]; // SequenceOfType

let _cached_decoder_for_PagingArea: $.ASN1Decoder<PagingArea> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PagingArea
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PagingArea (el: _Element): PagingArea {
    if (!_cached_decoder_for_PagingArea) { _cached_decoder_for_PagingArea = $._decodeSequenceOf<LocationArea>(() => _decode_LocationArea); }
    const value = _cached_decoder_for_PagingArea(el);
    if (value.length < 1 || value.length > 5) {
        throw new ASN1SizeError("PagingArea violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_PagingArea: $.ASN1Encoder<PagingArea> | null = null;

/**
 * @summary Encodes a(n) PagingArea into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PagingArea, encoded as an ASN.1 Element.
 */
export
function _encode_PagingArea (value: PagingArea, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PagingArea) { _cached_encoder_for_PagingArea = $._encodeSequenceOf<LocationArea>(() => _encode_LocationArea, $.BER); }
    return _cached_encoder_for_PagingArea(value, elGetter);
}


/* eslint-enable */
