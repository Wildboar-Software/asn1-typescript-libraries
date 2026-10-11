/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ServiceType, _encode_ServiceType, ServiceType } from "../MAP-MS-DataTypes/ServiceType.ta.mjs";


import { maxNumOfServiceType } from "./maxNumOfServiceType.va.mjs";

/**
 * @summary ServiceTypeList
 * @description
 *
 * Identities of LCS service types allowed to locate a target MS for an MT-LR.
 * Applicable only to the Service type privacy class. Usage in 3GPP TS 23.271.
 * Size 1..32.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.65D and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceTypeList  ::=  SEQUENCE SIZE (1..maxNumOfServiceType) OF
 *     ServiceType
 * ```
 */
export
type ServiceTypeList = ServiceType[]; // SequenceOfType

let _cached_decoder_for_ServiceTypeList: $.ASN1Decoder<ServiceTypeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceTypeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceTypeList (el: _Element): ServiceTypeList {
    if (!_cached_decoder_for_ServiceTypeList) { _cached_decoder_for_ServiceTypeList = $._decodeSequenceOf<ServiceType>(() => _decode_ServiceType); }
    const value = _cached_decoder_for_ServiceTypeList(el);
    if (value.length < 1 || value.length > maxNumOfServiceType) {
        throw new ASN1SizeError("ServiceTypeList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_ServiceTypeList: $.ASN1Encoder<ServiceTypeList> | null = null;

/**
 * @summary Encodes a(n) ServiceTypeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceTypeList, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceTypeList (value: ServiceTypeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceTypeList) { _cached_encoder_for_ServiceTypeList = $._encodeSequenceOf<ServiceType>(() => _encode_ServiceType, $.BER); }
    return _cached_encoder_for_ServiceTypeList(value, elGetter);
}


/* eslint-enable */
