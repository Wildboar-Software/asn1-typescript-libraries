/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_SS_Code, _encode_SS_Code, SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


import { maxNumOfSS } from "./maxNumOfSS.va.mjs";

/**
 * @summary SS_List
 * @description
 *
 * SEQUENCE SIZE (1..maxNumOfSS) OF SS-Code (3GPP TS 29.002 V19.1.0 clause
 * 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-List  ::=  SEQUENCE SIZE (1..maxNumOfSS) OF
 *     SS-Code
 * ```
 */
export
type SS_List = SS_Code[]; // SequenceOfType

let _cached_decoder_for_SS_List: $.ASN1Decoder<SS_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_List (el: _Element): SS_List {
    if (!_cached_decoder_for_SS_List) { _cached_decoder_for_SS_List = $._decodeSequenceOf<SS_Code>(() => _decode_SS_Code); }
    const value = _cached_decoder_for_SS_List(el);
    if (value.length < 1 || value.length > maxNumOfSS) {
        throw new ASN1SizeError("SS_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_SS_List: $.ASN1Encoder<SS_List> | null = null;

/**
 * @summary Encodes a(n) SS_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_List, encoded as an ASN.1 Element.
 */
export
function _encode_SS_List (value: SS_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_List) { _cached_encoder_for_SS_List = $._encodeSequenceOf<SS_Code>(() => _encode_SS_Code, $.BER); }
    return _cached_encoder_for_SS_List(value, elGetter);
}


/* eslint-enable */
