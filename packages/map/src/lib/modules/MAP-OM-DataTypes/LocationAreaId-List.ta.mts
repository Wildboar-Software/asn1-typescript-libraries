/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_LAIFixedLength, _encode_LAIFixedLength, LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";


/**
 * @summary LocationAreaId_List
 * @description
 *
 * SEQUENCE SIZE (1..8) OF LAIFixedLength (3GPP TS 29.002 V19.1.0 clause
 * 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationAreaId-List  ::=  SEQUENCE SIZE (1..8) OF
 *     LAIFixedLength
 * ```
 */
export
type LocationAreaId_List = LAIFixedLength[]; // SequenceOfType

let _cached_decoder_for_LocationAreaId_List: $.ASN1Decoder<LocationAreaId_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationAreaId_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationAreaId_List (el: _Element): LocationAreaId_List {
    if (!_cached_decoder_for_LocationAreaId_List) { _cached_decoder_for_LocationAreaId_List = $._decodeSequenceOf<LAIFixedLength>(() => _decode_LAIFixedLength); }
    const value = _cached_decoder_for_LocationAreaId_List(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("LocationAreaId_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_LocationAreaId_List: $.ASN1Encoder<LocationAreaId_List> | null = null;

/**
 * @summary Encodes a(n) LocationAreaId_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationAreaId_List, encoded as an ASN.1 Element.
 */
export
function _encode_LocationAreaId_List (value: LocationAreaId_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationAreaId_List) { _cached_encoder_for_LocationAreaId_List = $._encodeSequenceOf<LAIFixedLength>(() => _encode_LAIFixedLength, $.BER); }
    return _cached_encoder_for_LocationAreaId_List(value, elGetter);
}


/* eslint-enable */
