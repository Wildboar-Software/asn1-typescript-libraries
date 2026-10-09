/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_RAIdentity, _encode_RAIdentity, RAIdentity } from "../MAP-CommonDataTypes/RAIdentity.ta.mjs";


/**
 * @summary RoutingAreaId_List
 * @description
 *
 * SEQUENCE SIZE (1..8) OF RAIdentity (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingAreaId-List  ::=  SEQUENCE SIZE (1..8) OF
 *     RAIdentity
 * ```
 */
export
type RoutingAreaId_List = RAIdentity[]; // SequenceOfType

let _cached_decoder_for_RoutingAreaId_List: $.ASN1Decoder<RoutingAreaId_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingAreaId_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingAreaId_List (el: _Element): RoutingAreaId_List {
    if (!_cached_decoder_for_RoutingAreaId_List) { _cached_decoder_for_RoutingAreaId_List = $._decodeSequenceOf<RAIdentity>(() => _decode_RAIdentity); }
    const value = _cached_decoder_for_RoutingAreaId_List(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("RoutingAreaId_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_RoutingAreaId_List: $.ASN1Encoder<RoutingAreaId_List> | null = null;

/**
 * @summary Encodes a(n) RoutingAreaId_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingAreaId_List, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingAreaId_List (value: RoutingAreaId_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingAreaId_List) { _cached_encoder_for_RoutingAreaId_List = $._encodeSequenceOf<RAIdentity>(() => _encode_RAIdentity, $.BER); }
    return _cached_encoder_for_RoutingAreaId_List(value, elGetter);
}


/* eslint-enable */
