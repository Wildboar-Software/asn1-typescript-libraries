/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_RadioResource, _encode_RadioResource, RadioResource } from "../MAP-MS-DataTypes/RadioResource.ta.mjs";


import { maxNumOfRadioResources } from "./maxNumOfRadioResources.va.mjs";

/**
 * @summary RadioResourceList
 * @description
 *
 * List of RAB-Ids and associated Channel Type IEs (3GPP TS 48.008). Used when
 * there are multiple bearers and at least one has Radio Resource Information.
 * Not sent if `RadioResourceInformation` is sent.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.6.10A and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioResourceList  ::=  SEQUENCE SIZE (1.. maxNumOfRadioResources) OF
 *     RadioResource
 * ```
 */
export
type RadioResourceList = RadioResource[]; // SequenceOfType

let _cached_decoder_for_RadioResourceList: $.ASN1Decoder<RadioResourceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RadioResourceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RadioResourceList (el: _Element): RadioResourceList {
    if (!_cached_decoder_for_RadioResourceList) { _cached_decoder_for_RadioResourceList = $._decodeSequenceOf<RadioResource>(() => _decode_RadioResource); }
    const value = _cached_decoder_for_RadioResourceList(el);
    if (value.length < 1 || value.length > maxNumOfRadioResources) {
        throw new ASN1SizeError("RadioResourceList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_RadioResourceList: $.ASN1Encoder<RadioResourceList> | null = null;

/**
 * @summary Encodes a(n) RadioResourceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RadioResourceList, encoded as an ASN.1 Element.
 */
export
function _encode_RadioResourceList (value: RadioResourceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RadioResourceList) { _cached_encoder_for_RadioResourceList = $._encodeSequenceOf<RadioResource>(() => _encode_RadioResource, $.BER); }
    return _cached_encoder_for_RadioResourceList(value, elGetter);
}


/* eslint-enable */
