/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_APN_Configuration, _encode_APN_Configuration, APN_Configuration } from "../MAP-MS-DataTypes/APN-Configuration.ta.mjs";


import { maxNumOfAPN_Configurations } from "./maxNumOfAPN-Configurations.va.mjs";

/**
 * @summary EPS_DataList
 * @description
 *
 * List of APN-Configurations in an APN-ConfigurationProfile (3GPP TS 29.002
 * V19.1.0 clauses 7.6.3.46A and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-DataList  ::=  SEQUENCE SIZE (1..maxNumOfAPN-Configurations) OF
 *     APN-Configuration
 * ```
 */
export
type EPS_DataList = APN_Configuration[]; // SequenceOfType

let _cached_decoder_for_EPS_DataList: $.ASN1Decoder<EPS_DataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_DataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_DataList (el: _Element): EPS_DataList {
    if (!_cached_decoder_for_EPS_DataList) { _cached_decoder_for_EPS_DataList = $._decodeSequenceOf<APN_Configuration>(() => _decode_APN_Configuration); }
    const value = _cached_decoder_for_EPS_DataList(el);
    if (value.length < 1 || value.length > maxNumOfAPN_Configurations) {
        throw new ASN1SizeError("EPS_DataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_EPS_DataList: $.ASN1Encoder<EPS_DataList> | null = null;

/**
 * @summary Encodes a(n) EPS_DataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_DataList, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_DataList (value: EPS_DataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_DataList) { _cached_encoder_for_EPS_DataList = $._encodeSequenceOf<APN_Configuration>(() => _encode_APN_Configuration, $.BER); }
    return _cached_encoder_for_EPS_DataList(value, elGetter);
}


/* eslint-enable */
