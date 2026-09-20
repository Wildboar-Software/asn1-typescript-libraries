/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_RelocationNumber, _encode_RelocationNumber, RelocationNumber } from "../MAP-MS-DataTypes/RelocationNumber.ta.mjs";


import { maxNumOfRelocationNumber } from "./maxNumOfRelocationNumber.va.mjs";

/**
 * @summary RelocationNumberList
 * @description
 *
 * List of relocation numbers (handover number plus RAB Id) returned by MSC-B
 * for multi-bearer relocation.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.19A, 8.4.1 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelocationNumberList  ::=  SEQUENCE SIZE (1..maxNumOfRelocationNumber) OF
 *     RelocationNumber
 * ```
 */
export
type RelocationNumberList = RelocationNumber[]; // SequenceOfType

let _cached_decoder_for_RelocationNumberList: $.ASN1Decoder<RelocationNumberList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelocationNumberList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RelocationNumberList (el: _Element): RelocationNumberList {
    if (!_cached_decoder_for_RelocationNumberList) { _cached_decoder_for_RelocationNumberList = $._decodeSequenceOf<RelocationNumber>(() => _decode_RelocationNumber); }
    const value = _cached_decoder_for_RelocationNumberList(el);
    if (value.length < 1 || value.length > maxNumOfRelocationNumber) {
        throw new ASN1SizeError("RelocationNumberList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_RelocationNumberList: $.ASN1Encoder<RelocationNumberList> | null = null;

/**
 * @summary Encodes a(n) RelocationNumberList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelocationNumberList, encoded as an ASN.1 Element.
 */
export
function _encode_RelocationNumberList (value: RelocationNumberList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RelocationNumberList) { _cached_encoder_for_RelocationNumberList = $._encodeSequenceOf<RelocationNumber>(() => _encode_RelocationNumber, $.BER); }
    return _cached_encoder_for_RelocationNumberList(value, elGetter);
}


/* eslint-enable */
