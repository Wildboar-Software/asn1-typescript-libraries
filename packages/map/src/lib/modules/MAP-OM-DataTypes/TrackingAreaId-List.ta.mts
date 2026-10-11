/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_TA_Id, _encode_TA_Id, TA_Id } from "../MAP-CommonDataTypes/TA-Id.ta.mjs";


/**
 * @summary TrackingAreaId_List
 * @description
 *
 * SEQUENCE SIZE (1..8) OF TA-Id (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrackingAreaId-List  ::=  SEQUENCE SIZE (1..8) OF
 *     TA-Id
 * ```
 */
export
type TrackingAreaId_List = TA_Id[]; // SequenceOfType

let _cached_decoder_for_TrackingAreaId_List: $.ASN1Decoder<TrackingAreaId_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TrackingAreaId_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TrackingAreaId_List (el: _Element): TrackingAreaId_List {
    if (!_cached_decoder_for_TrackingAreaId_List) { _cached_decoder_for_TrackingAreaId_List = $._decodeSequenceOf<TA_Id>(() => _decode_TA_Id); }
    const value = _cached_decoder_for_TrackingAreaId_List(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("TrackingAreaId_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_TrackingAreaId_List: $.ASN1Encoder<TrackingAreaId_List> | null = null;

/**
 * @summary Encodes a(n) TrackingAreaId_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrackingAreaId_List, encoded as an ASN.1 Element.
 */
export
function _encode_TrackingAreaId_List (value: TrackingAreaId_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TrackingAreaId_List) { _cached_encoder_for_TrackingAreaId_List = $._encodeSequenceOf<TA_Id>(() => _encode_TA_Id, $.BER); }
    return _cached_encoder_for_TrackingAreaId_List(value, elGetter);
}


/* eslint-enable */
