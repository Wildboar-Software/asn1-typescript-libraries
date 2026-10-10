/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ISDN_AddressString, _encode_ISDN_AddressString, ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


import { maxNumOfGMLC } from "./maxNumOfGMLC.va.mjs";

/**
 * @summary GMLC_List
 * @description
 *
 * Addresses of all GMLCs permitted to issue a call/session unrelated or
 * call/session related MT-LR for this MS (3GPP TS 23.271). If segmentation is
 * used, the complete GMLC-List shall be sent in one segment (3GPP TS 29.002
 * V19.1.0 clauses 7.6.3.61 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GMLC-List  ::=  SEQUENCE SIZE (1..maxNumOfGMLC) OF
 *     ISDN-AddressString
 * ```
 */
export
type GMLC_List = ISDN_AddressString[]; // SequenceOfType

let _cached_decoder_for_GMLC_List: $.ASN1Decoder<GMLC_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GMLC_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GMLC_List (el: _Element): GMLC_List {
    if (!_cached_decoder_for_GMLC_List) { _cached_decoder_for_GMLC_List = $._decodeSequenceOf<ISDN_AddressString>(() => _decode_ISDN_AddressString); }
    const value = _cached_decoder_for_GMLC_List(el);
    if (value.length < 1 || value.length > maxNumOfGMLC) {
        throw new ASN1SizeError("GMLC_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_GMLC_List: $.ASN1Encoder<GMLC_List> | null = null;

/**
 * @summary Encodes a(n) GMLC_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GMLC_List, encoded as an ASN.1 Element.
 */
export
function _encode_GMLC_List (value: GMLC_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GMLC_List) { _cached_encoder_for_GMLC_List = $._encodeSequenceOf<ISDN_AddressString>(() => _encode_ISDN_AddressString, $.BER); }
    return _cached_encoder_for_GMLC_List(value, elGetter);
}


/* eslint-enable */
