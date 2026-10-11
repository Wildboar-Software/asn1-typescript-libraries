/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ISDN_AddressString, _encode_ISDN_AddressString, ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


import { maxNumOfDispatchers } from "./maxNumOfDispatchers.va.mjs";

/**
 * @summary DispatcherList
 * @description
 *
 * SEQUENCE SIZE (1..maxNumOfDispatchers) OF ISDN-AddressString (3GPP TS 29.002
 * V19.1.0 clause 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DispatcherList  ::=  
 *     SEQUENCE SIZE (1..maxNumOfDispatchers) OF
 *     ISDN-AddressString
 * ```
 */
export
type DispatcherList = ISDN_AddressString[]; // SequenceOfType

let _cached_decoder_for_DispatcherList: $.ASN1Decoder<DispatcherList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DispatcherList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DispatcherList (el: _Element): DispatcherList {
    if (!_cached_decoder_for_DispatcherList) { _cached_decoder_for_DispatcherList = $._decodeSequenceOf<ISDN_AddressString>(() => _decode_ISDN_AddressString); }
    const value = _cached_decoder_for_DispatcherList(el);
    if (value.length < 1 || value.length > maxNumOfDispatchers) {
        throw new ASN1SizeError("DispatcherList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_DispatcherList: $.ASN1Encoder<DispatcherList> | null = null;

/**
 * @summary Encodes a(n) DispatcherList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DispatcherList, encoded as an ASN.1 Element.
 */
export
function _encode_DispatcherList (value: DispatcherList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DispatcherList) { _cached_encoder_for_DispatcherList = $._encodeSequenceOf<ISDN_AddressString>(() => _encode_ISDN_AddressString, $.BER); }
    return _cached_encoder_for_DispatcherList(value, elGetter);
}


/* eslint-enable */
