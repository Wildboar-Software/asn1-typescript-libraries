/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ISDN_AddressString, _encode_ISDN_AddressString, ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


import { maxNumOfCamelDestinationNumbers } from "./maxNumOfCamelDestinationNumbers.va.mjs";

/**
 * @summary DestinationNumberList
 * @description
 *
 * CAMEL dialled-number list. The receiving entity shall not check the format of
 * a number in the list (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationNumberList   ::=  SEQUENCE SIZE    (1..maxNumOfCamelDestinationNumbers) OF
 *     ISDN-AddressString
 * ```
 */
export
type DestinationNumberList = ISDN_AddressString[]; // SequenceOfType

let _cached_decoder_for_DestinationNumberList: $.ASN1Decoder<DestinationNumberList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationNumberList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationNumberList (el: _Element): DestinationNumberList {
    if (!_cached_decoder_for_DestinationNumberList) { _cached_decoder_for_DestinationNumberList = $._decodeSequenceOf<ISDN_AddressString>(() => _decode_ISDN_AddressString); }
    const value = _cached_decoder_for_DestinationNumberList(el);
    if (value.length < 1 || value.length > maxNumOfCamelDestinationNumbers) {
        throw new ASN1SizeError("DestinationNumberList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_DestinationNumberList: $.ASN1Encoder<DestinationNumberList> | null = null;

/**
 * @summary Encodes a(n) DestinationNumberList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationNumberList, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationNumberList (value: DestinationNumberList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationNumberList) { _cached_encoder_for_DestinationNumberList = $._encodeSequenceOf<ISDN_AddressString>(() => _encode_ISDN_AddressString, $.BER); }
    return _cached_encoder_for_DestinationNumberList(value, elGetter);
}


/* eslint-enable */
