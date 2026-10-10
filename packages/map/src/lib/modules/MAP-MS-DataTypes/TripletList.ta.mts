/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AuthenticationTriplet, _encode_AuthenticationTriplet, AuthenticationTriplet } from "../MAP-MS-DataTypes/AuthenticationTriplet.ta.mjs";


/**
 * @summary TripletList
 * @description
 *
 * One to five GSM authentication triplets (RAND, SRES, Kc).
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.7.1 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TripletList  ::=  SEQUENCE SIZE (1..5) OF
 *     AuthenticationTriplet
 * ```
 */
export
type TripletList = AuthenticationTriplet[]; // SequenceOfType

let _cached_decoder_for_TripletList: $.ASN1Decoder<TripletList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TripletList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TripletList (el: _Element): TripletList {
    if (!_cached_decoder_for_TripletList) { _cached_decoder_for_TripletList = $._decodeSequenceOf<AuthenticationTriplet>(() => _decode_AuthenticationTriplet); }
    const value = _cached_decoder_for_TripletList(el);
    if (value.length < 1 || value.length > 5) {
        throw new ASN1SizeError("TripletList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_TripletList: $.ASN1Encoder<TripletList> | null = null;

/**
 * @summary Encodes a(n) TripletList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TripletList, encoded as an ASN.1 Element.
 */
export
function _encode_TripletList (value: TripletList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TripletList) { _cached_encoder_for_TripletList = $._encodeSequenceOf<AuthenticationTriplet>(() => _encode_AuthenticationTriplet, $.BER); }
    return _cached_encoder_for_TripletList(value, elGetter);
}


/* eslint-enable */
