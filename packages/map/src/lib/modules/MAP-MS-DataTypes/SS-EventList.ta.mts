/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_SS_Code, _encode_SS_Code, SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


import { maxNumOfCamelSSEvents } from "./maxNumOfCamelSSEvents.va.mjs";

/**
 * @summary SS_EventList
 * @description
 *
 * SS-Codes whose invocation triggers CAMEL. CAMEL Phase 3 defines actions for
 * ECT (`00110001`B), MPTY (`01010001`B), CD (`00100100`B), and CCBS
 * (`01000100`B); all other SS codes shall be ignored. When sent to the VLR,
 * shall not mark CCBS; if received, the VLR shall discard the CCBS marking.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-EventList   ::=  SEQUENCE SIZE (1..maxNumOfCamelSSEvents) OF SS-Code
 * ```
 */
export
type SS_EventList = SS_Code[]; // SequenceOfType

let _cached_decoder_for_SS_EventList: $.ASN1Decoder<SS_EventList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_EventList (el: _Element): SS_EventList {
    if (!_cached_decoder_for_SS_EventList) { _cached_decoder_for_SS_EventList = $._decodeSequenceOf<SS_Code>(() => _decode_SS_Code); }
    const value = _cached_decoder_for_SS_EventList(el);
    if (value.length < 1 || value.length > maxNumOfCamelSSEvents) {
        throw new ASN1SizeError("SS_EventList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_SS_EventList: $.ASN1Encoder<SS_EventList> | null = null;

/**
 * @summary Encodes a(n) SS_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_EventList, encoded as an ASN.1 Element.
 */
export
function _encode_SS_EventList (value: SS_EventList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_EventList) { _cached_encoder_for_SS_EventList = $._encodeSequenceOf<SS_Code>(() => _encode_SS_Code, $.BER); }
    return _cached_encoder_for_SS_EventList(value, elGetter);
}


/* eslint-enable */
