/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AddressString, _encode_AddressString, AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";


import { maxEventSpecification } from "./maxEventSpecification.va.mjs";

/**
 * @summary SS_EventSpecification
 * @description
 *
 * SEQUENCE SIZE (1..maxEventSpecification) OF AddressString (3GPP TS 29.002
 * V19.1.0 clause 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-EventSpecification  ::=  SEQUENCE SIZE (1..maxEventSpecification) OF
 *     AddressString
 * ```
 */
export
type SS_EventSpecification = AddressString[]; // SequenceOfType

let _cached_decoder_for_SS_EventSpecification: $.ASN1Decoder<SS_EventSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_EventSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_EventSpecification (el: _Element): SS_EventSpecification {
    if (!_cached_decoder_for_SS_EventSpecification) { _cached_decoder_for_SS_EventSpecification = $._decodeSequenceOf<AddressString>(() => _decode_AddressString); }
    const value = _cached_decoder_for_SS_EventSpecification(el);
    if (value.length < 1 || value.length > maxEventSpecification) {
        throw new ASN1SizeError("SS_EventSpecification violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_SS_EventSpecification: $.ASN1Encoder<SS_EventSpecification> | null = null;

/**
 * @summary Encodes a(n) SS_EventSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_EventSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_SS_EventSpecification (value: SS_EventSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_EventSpecification) { _cached_encoder_for_SS_EventSpecification = $._encodeSequenceOf<AddressString>(() => _encode_AddressString, $.BER); }
    return _cached_encoder_for_SS_EventSpecification(value, elGetter);
}


/* eslint-enable */
