/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AuthenticationQuintuplet, _encode_AuthenticationQuintuplet, AuthenticationQuintuplet } from "../MAP-MS-DataTypes/AuthenticationQuintuplet.ta.mjs";


/**
 * @summary QuintupletList
 * @description
 *
 * One to five UMTS authentication quintuplets (RAND, XRES, CK, IK, AUTN). Order
 * is chronological; the first quintuplet is the oldest.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.7.1 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QuintupletList  ::=  SEQUENCE SIZE (1..5) OF
 *     AuthenticationQuintuplet
 * ```
 */
export
type QuintupletList = AuthenticationQuintuplet[]; // SequenceOfType

let _cached_decoder_for_QuintupletList: $.ASN1Decoder<QuintupletList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QuintupletList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QuintupletList (el: _Element): QuintupletList {
    if (!_cached_decoder_for_QuintupletList) { _cached_decoder_for_QuintupletList = $._decodeSequenceOf<AuthenticationQuintuplet>(() => _decode_AuthenticationQuintuplet); }
    const value = _cached_decoder_for_QuintupletList(el);
    if (value.length < 1 || value.length > 5) {
        throw new ASN1SizeError("QuintupletList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_QuintupletList: $.ASN1Encoder<QuintupletList> | null = null;

/**
 * @summary Encodes a(n) QuintupletList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QuintupletList, encoded as an ASN.1 Element.
 */
export
function _encode_QuintupletList (value: QuintupletList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QuintupletList) { _cached_encoder_for_QuintupletList = $._encodeSequenceOf<AuthenticationQuintuplet>(() => _encode_AuthenticationQuintuplet, $.BER); }
    return _cached_encoder_for_QuintupletList(value, elGetter);
}


/* eslint-enable */
